const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

if (!process.env.GROQ_API_KEY) {
  console.error('[chat] GROQ_API_KEY não definida — as chamadas vão falhar.');
}

// RATE LIMIT: janela de 60s, máximo de 20 requisições por IP
const rateLimitMap = new Map(); // ip -> { count, windowStart }
const RATE_LIMIT_MAX = 20;
const RATE_LIMIT_WINDOW_MS = 60_000;

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  // RATE LIMIT: identifica IP via header do proxy ou socket
  const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket?.remoteAddress || 'unknown';
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Muitas requisições. Aguarde um momento e tente novamente.' });
  }

  const { pergunta, tema, historico, stream: wantsStream } = req.body;

  if (!pergunta || typeof pergunta !== 'string') {
    return res.status(400).json({ error: 'Parâmetro "pergunta" ausente ou inválido' });
  }

  const extra = tema ? tema : '';
  const systemPrompt = `Você é a BicharIA, uma inteligência artificial especialista em animais domésticos e selvagens — incluindo cães, gatos, coelhos, lebres, hamsters, répteis (iguana, gecko, dragão barbudo), aves (calopsita, periquito, arara), capivaras, canídeos selvagens (lobos, raposas, coiotes, lobo-guará) e cavalos (Árabe, Quarto de Milha, Frísio, Mustang, Mangalarga Marchador, Campolina, Lusitano, Andaluz, Appaloosa, Paint Horse, Clydesdale, Shire, Puro Sangue Inglês, Shetland e outras). Responda sempre em português brasileiro, de forma cativante, curiosa e didática. Use emojis com moderação. Seja conciso mas rico em detalhes — no máximo 4 parágrafos curtos. ${extra}`;

  const messages = [{ role: 'system', content: systemPrompt }];

  if (Array.isArray(historico) && historico.length > 0) {
    historico.slice(-10).forEach(msg => {
      if (msg.role && msg.content) {
        messages.push({ role: msg.role, content: msg.content });
      }
    });
  }

  messages.push({ role: 'user', content: pergunta });

  // STREAMING: se o cliente pediu stream, faz proxy do SSE da Groq direto pro browser
  if (wantsStream) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    try {
      const groqRes = await fetch(GROQ_URL, {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          max_tokens: 1000,
          temperature: 0.7,
          stream: true,
          messages
        })
      });

      clearTimeout(timeoutId);

      // Repassa os headers SSE e faz proxy do body chunk a chunk
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('X-Accel-Buffering', 'no');

      const reader = groqRes.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(decoder.decode(value, { stream: true }));
      }
      res.end();

    } catch (err) {
      clearTimeout(timeoutId);
      // Se o stream já começou não dá pra mandar JSON de erro — envia evento especial
      res.write(`data: {"error":"${err.message}"}\n\n`);
      res.end();
    }
    return;
  }

  // MODO NORMAL (sem stream) — mantido para compatibilidade com ferramentas internas
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    let groqRes;
    try {
      groqRes = await fetch(GROQ_URL, {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          max_tokens: 1000,
          temperature: 0.7,
          messages
        })
      });
    } finally {
      clearTimeout(timeoutId);
    }

    const data = await groqRes.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    const texto = data.choices?.[0]?.message?.content || 'Não foi possível obter uma resposta.';
    return res.status(200).json({ texto });

  } catch (err) {
    return res.status(500).json({ error: err.message || 'Erro interno no servidor' });
  }
}