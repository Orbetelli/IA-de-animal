// ===== VERCEL SERVERLESS FUNCTION — BUSCA DE FOTOS =====
// A Unsplash API key fica segura aqui no servidor

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Parâmetro "query" ausente' });
  }

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape`,
      {
        headers: {
          'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
        }
      }
    );

    const data = await response.json();

    if (data.errors) {
      return res.status(500).json({ error: data.errors[0] });
    }

    return res.status(200).json({ url: data?.urls?.regular || null });

  } catch (err) {
    return res.status(500).json({ error: err.message || 'Erro ao buscar foto' });
  }
}
