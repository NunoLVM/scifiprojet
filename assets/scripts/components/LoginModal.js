import { resolveApiBase } from "../utils/api.js";

const API_BASE = resolveApiBase();

export class LoginModal {
  constructor() {
    this.renderModal();
    this.attachEvents();
  }

  renderModal() {
    const modalContainer = document.createElement("div");
    modalContainer.id = "login-popup";
    modalContainer.className = "popup-container";
    modalContainer.style.display = "none";

    modalContainer.innerHTML = `
      <div class="popup-content">
        <span class="close-btn">&times;</span>
        <h2 class="login-title">Login Protocol: Only true sci-fi fans beyond this point.</h2>
        <form aria-label="Login Form">
          <label for="login-username">Pilot ID required</label>
          <input type="text" id="login-username" name="username" required placeholder="Input Galactic ID">
      
          <label for="login-password">Launch code</label>
          <input type="password" id="login-password" name="password" required placeholder="Enter access key">
      
          <button type="submit" class="button">Initiate Login</button>
      
          <div class="login-message">
            <p class="terminal-line line-1">Welcome back, commander.</p>
            <p class="terminal-line line-2">Authentication sequence initiated.</p>
          </div>
        </form>
      </div>
    `;
    document.body.appendChild(modalContainer);
    this.modalElement = modalContainer;
  }

  attachEvents() {
    const loginModal = this.modalElement;
    if (!loginModal) return;

    // Botão que abre o modal (deve ter id="loginBtn" no HTML)
    this.closeBtn = loginModal.querySelector(".close-btn");
    this.form = loginModal.querySelector("form");
    this.popupContent = loginModal.querySelector(".popup-content");

    const loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
      loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.openModal();
      });
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener("click", () => {
        this.closeModal();
      });
    }

    this.form?.addEventListener("submit", async (e) => {
      e.preventDefault();

      const username = this.form["username"].value.trim();
      const password = this.form["password"].value;

      try {
         const res = await fetch(`${API_BASE}/api/login`, {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({ email: username, password }),
         });

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await res.text();
          console.error("Resposta inesperada:", text);
          alert("Erro inesperado do servidor.");
          return;
        }

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Login falhou.");

        localStorage.setItem(
          "user",
          JSON.stringify({
            token: data.token,
            username: data.user.username,
            email: data.user.email,
            role: data.user.role,
          })
        );

        this.closeModal();
        alert("Login feito com sucesso!");
        location.reload(); // ou redireciona para dashboard
      } catch (err) {
        console.error("Erro no login:", err);
        alert(err.message || "Erro de rede ou servidor.");
      }
    });
  }

  openModal() {
    if (!this.modalElement) return;
    this.modalElement.style.display = "flex";
    document.body.style.overflow = "hidden";
    if (this.popupContent) {
      this.popupContent.style.animation = "fadeInUp 0.5s ease-out forwards";
    }
  }

  closeModal() {
    if (!this.modalElement) return;
    this.modalElement.style.display = "none";
    document.body.style.overflow = "";
  }
}
