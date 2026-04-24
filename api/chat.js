// ===== VERCEL SERVERLESS FUNCTION =====
// Este arquivo roda no servidor — a chave nunca chega ao browser

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { pergunta, tema } = req.body;

  if (!pergunta || typeof pergunta !== 'string') {
    return res.status(400).json({ error: 'Parâmetro "pergunta" ausente ou inválido' });
  }

  const extra = tema ? `Foque especialmente em ${tema}.` : '';
  const systemPrompt = `Você é a BicharIA, uma inteligência artificial especialista em animais domésticos e selvagens — incluindo cães, gatos, coelhos, lebres, hamsters, répteis (iguana, gecko, dragão barbudo), aves (calopsita, periquito, arara), capivaras e canídeos selvagens (lobos, raposas, coiotes, lobo-guará). Responda sempre em português brasileiro, de forma cativante, curiosa e didática. Use emojis com moderação para tornar a resposta amigável. Seja conciso mas rico em detalhes — no máximo 4 parágrafos curtos. ${extra}`;

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
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user',   content: pergunta }
        ]
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