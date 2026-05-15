const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { pergunta, tema, historico } = req.body;

  if (!pergunta || typeof pergunta !== 'string') {
    return res.status(400).json({ error: 'Parâmetro "pergunta" ausente ou inválido' });
  }

  const extra = tema ? tema : '';
  const systemPrompt = `Você é a BicharIA, uma inteligência artificial especialista em animais domésticos e selvagens — incluindo cães, gatos, coelhos, lebres, hamsters, répteis (iguana, gecko, dragão barbudo), aves (calopsita, periquito, arara), capivaras, canídeos selvagens (lobos, raposas, coiotes, lobo-guará) e cavalos (Árabe, Quarto de Milha, Frísio, Mustang, Mangalarga Marchador, Campolina, Lusitano, Andaluz, Appaloosa, Paint Horse, Clydesdale, Shire, Puro Sangue Inglês, Shetland e outras). Responda sempre em português brasileiro, de forma cativante, curiosa e didática. Use emojis com moderação. Seja conciso mas rico em detalhes — no máximo 4 parágrafos curtos. ${extra}`;

  // Monta o histórico de mensagens para o modo chat
  const messages = [{ role: 'system', content: systemPrompt }];

  if (Array.isArray(historico) && historico.length > 0) {
    // Adiciona as últimas 10 mensagens do histórico
    historico.slice(-10).forEach(msg => {
      if (msg.role && msg.content) {
        messages.push({ role: msg.role, content: msg.content });
      }
    });
  }

  messages.push({ role: 'user', content: pergunta });

  try {
    const groqRes = await fetch(GROQ_URL, {
      method: 'POST',
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