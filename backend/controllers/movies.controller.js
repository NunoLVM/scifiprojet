import axios from "axios";

const apiKey = process.env.TMDB_API_KEY;

if (!apiKey) {
  console.warn("[TMDB] Missing TMDB_API_KEY in .env");
}

const TMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // sem Authorization; vamos sempre com ?api_key=
});

function withKey(params = {}) {
  return { ...params, api_key: apiKey };
}

export async function getPopular(req, res) {
  try {
    if (!apiKey) return res.status(500).json({ error: "TMDB_API_KEY missing" });
    const { data } = await TMDB.get("/movie/popular", {
      params: withKey({ language: "en-US", page: 1 }),
    });
    res.json(data.results);
  } catch (err) {
    console.error("TMDB error:", err.response?.status, err.response?.data || err.message);
    res.status(err.response?.status || 502).json({ error: "TMDB upstream error" });
  }
}

export async function searchMovies(req, res) {
  try {
    if (!apiKey) return res.status(500).json({ error: "TMDB_API_KEY missing" });
    const q = String(req.query.q || "").trim();
    if (!q) return res.status(400).json({ error: "query param q required" });
    const { data } = await TMDB.get("/search/movie", {
      params: withKey({ query: q, language: "en-US", page: 1 }),
    });
    res.json(data.results);
  } catch (err) {
    console.error("TMDB error:", err.response?.status, err.response?.data || err.message);
    res.status(err.response?.status || 502).json({ error: "TMDB upstream error" });
  }
}
