// ===== VERCEL SERVERLESS FUNCTION — BUSCA DE FOTOS =====
// A Unsplash API key fica segura aqui no servidor

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { query } = req.query;

  // FIX #7: validação de presença, tipo e tamanho máximo do query
  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Parâmetro "query" ausente ou inválido' });
  }
  if (query.length > 100) {
    return res.status(400).json({ error: 'Parâmetro "query" excede o limite de 100 caracteres' });
  }

  // PERF #8: timeout de 8s para não deixar a função travada esperando a Unsplash
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape`,
      {
        signal: controller.signal,
        headers: {
          'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
        }
      }
    );

    clearTimeout(timeoutId);
    const data = await response.json();

    if (data.errors) {
      return res.status(500).json({ error: data.errors[0] });
    }

    return res.status(200).json({ url: data?.urls?.regular || null });

  } catch (err) {
    clearTimeout(timeoutId);
    const msg = err.name === 'AbortError' ? 'Timeout ao buscar foto' : (err.message || 'Erro ao buscar foto');
    return res.status(500).json({ error: msg });
  }
}