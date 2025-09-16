const API_BASE = "http://localhost:3000"; // backend

async function loadPopular() {
  const list = document.querySelector("#movies-list");
  if (!list) return;

  try {
    const res = await fetch(`${API_BASE}/api/movies/popular`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const movies = await res.json();

    list.innerHTML =
      (movies || [])
        .map(
          (m) => `
        <li class="movie-card">
          <img src="https://image.tmdb.org/t/p/w185${m.poster_path || ""}" alt="${m.title}" />
          <h4>${m.title}</h4>
          <p>${m.release_date ? m.release_date.slice(0, 4) : ""}</p>
        </li>
      `
        )
        .join("") || `<li>No results.</li>`;
  } catch (err) {
    console.error("loadPopular error:", err);
    list.innerHTML = `<li class="error">Failed to load movies.</li>`;
  }
}

document.addEventListener("DOMContentLoaded", loadPopular);
