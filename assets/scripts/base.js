import { buildMenu } from "./components/Menu.js";
import { buildFooterMenu } from "./components/FooterMenu.js";
import { LoginModal } from "./components/LoginModal.js";
import { resolveApiBase } from "./utils/api.js";
export { resolveApiOrigin } from "./utils/api.js";


let btnOpenMenu = document.getElementById("openMenu");
let btnCloseMenu = document.getElementById("closeMenu");
let mainMenu = document.querySelector(".header-right");
let layer = document.querySelector(".layer");



window.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("menu")) {
    let initMenu = new buildMenu();
    initMenu.renderMenu();
  } else {
    if (btnCloseMenu) {
      btnCloseMenu.addEventListener("click", () => {
        mainMenu.classList.add("loading");

        setTimeout(() => {
          mainMenu.classList.remove("visible");
          mainMenu.classList.remove("loading");
          layer.classList.remove("visible");
        }, 300);
      });
    }

    if (btnOpenMenu) {
      btnOpenMenu.addEventListener("click", () => {
        mainMenu.classList.add("visible");
        layer.classList.add("visible");
      });
    }
  }

  if (document.getElementById("footerMenu")) {
    // Inicializa e renderiza o menu do footer
    let initFooterMenu = new buildFooterMenu();
    initFooterMenu.renderFooterMenu();
  }

  document.addEventListener("click", (e) => {
    if (e.target.id === "logoutBtn") {
      localStorage.removeItem("user");
      location.reload();
    }

    if (window.location.pathname.includes("about.html")) {
      const easterTrigger = document.getElementById("popcorn-title");

      if (easterTrigger && easterTrigger.textContent.trim() === "About The Popcorn Awakens!") {
        easterTrigger.style.cursor = "pointer";
        easterTrigger.title = "👀 You found a hidden portal...";

        easterTrigger.addEventListener("click", () => {
          window.location.href = "easteregg.html";
        });
      }
    }

  });

  // Cria o modal de login dinamicamente
    const loginModal = new LoginModal();

    const shouldShowLogin = sessionStorage.getItem("showLoginAfterSignup");
    if (shouldShowLogin === "true") {
      sessionStorage.removeItem("showLoginAfterSignup");
      loginModal.openModal();
    }
});

// ====== Config da API (funciona se abrires pelo Live Server ou ficheiro) ======


// ====== helpers UI ======


// ====== lógica da página MOVIES ======
const API_BASE = resolveApiBase();


async function loadPopularMovies() {
  const r = await fetch(`${API_BASE}/api/movies/popular`);
  return r.json();
}

function renderMovies(list, movies) {
  // Garante que temos um array válido
  if (!Array.isArray(movies)) movies = [];

  // Se estiver vazio, mostra mensagem
  if (movies.length === 0) {
    list.innerHTML = `<li class="empty">No results.</li>`;
    return;
  }

  // Renderiza os filmes
  list.innerHTML = movies
    .map((m) => {
      const poster = m.poster_path ? `https://image.tmdb.org/t/p/w185${m.poster_path}` : "";
      const title = m.title || "Untitled";
      const year = m.release_date ? m.release_date.slice(0, 4) : "Unknown";

      return `
        <li class="movie-card">
          <img src="${poster}" alt="${title}" />
          <h4>${title}</h4>
          <p>${year}</p>
        </li>
      `;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  if (location.pathname.endsWith("movies.html")) {
    const list = document.querySelector("#movies-list");
    loadPopularMovies()
      .then((ms) => renderMovies(list, ms))
      .catch(() => {
        list.innerHTML = `<li>Failed to load movies.</li>`;
      });
  }
});

