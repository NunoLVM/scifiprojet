// assets/scripts/components/Movies.js
import { resolveApiBase } from "../utils/api.js";

const API_BASE = resolveApiBase();

let currentPage = 1;
let totalPages = 1;

function movieCard(m) {
  return `
    <li class="movie-card">
      <img src="https://image.tmdb.org/t/p/w185${m.poster_path || ""}" alt="${m.title}" />
      <h4>${m.title}</h4>
      <p>${m.release_date ? m.release_date.slice(0, 4) : ""}</p>
    </li>
  `;
}

async function loadSciFi(page = 1) {
  const list = document.querySelector("#movies-list");
  if (!list) return; // não estamos em movies.html

  list.setAttribute("aria-busy", "true");
  try {
    const res = await fetch(`${API_BASE}/api/movies/discover?page=${page}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    currentPage = data.page;
    totalPages = data.total_pages;

    list.innerHTML = (data.results || []).map(movieCard).join("") || `<li class="empty">No results.</li>`;
    updatePaginationUI();
  } catch (err) {
    console.error("loadSciFi error:", err);
    list.innerHTML = `<li class="error">Failed to load movies.</li>`;
  } finally {
    list.removeAttribute("aria-busy");
  }
}

function ensurePaginationControls() {
  let pager = document.getElementById("pager");
  if (!pager) {
    pager = document.createElement("div");
    pager.id = "pager";
    pager.className = "pager";
    pager.innerHTML = `
      <button id="prevPage" class="button outline" aria-label="Previous page">Prev</button>
      <span id="pageInfo" class="page-info"></span>
      <button id="nextPage" class="button" aria-label="Next page">Next</button>
    `;
    // coloca o pager após a lista
    const container = document.querySelector(".container") || document.body;
    container.appendChild(pager);

    document.getElementById("prevPage").addEventListener("click", () => {
      if (currentPage > 1) loadSciFi(currentPage - 1);
    });
    document.getElementById("nextPage").addEventListener("click", () => {
      if (currentPage < totalPages) loadSciFi(currentPage + 1);
    });
  }
}

function updatePaginationUI() {
  ensurePaginationControls();
  const prev = document.getElementById("prevPage");
  const next = document.getElementById("nextPage");
  const info = document.getElementById("pageInfo");

  prev.disabled = currentPage <= 1;
  next.disabled = currentPage >= totalPages;
  info.textContent = `Page ${currentPage} / ${Math.min(totalPages, 500)}`;
}

// arrancar só nesta página
document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("#movies-list");
  if (!list) return;
  loadSciFi(1);
});
