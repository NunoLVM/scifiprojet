console.log("LoginModal atualizado");

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
  }

  attachEvents() {
    const loginModal = document.getElementById("login-popup");
    const closeBtn = loginModal.querySelector(".close-btn");
    const form = loginModal.querySelector("form");

    // Botão que abre o modal (deve ter id="loginBtn" no HTML)
    const loginBtn = document.getElementById("loginBtn");
    if (!loginBtn) return console.error("loginBtn not found");

    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      loginModal.style.display = "flex";
      document.body.style.overflow = "hidden";
      loginModal.querySelector(".popup-content").style.animation = "fadeInUp 0.5s ease-out forwards";
    });

    closeBtn.addEventListener("click", () => {
      loginModal.style.display = "none";
      document.body.style.overflow = "";
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const username = form["username"].value.trim();
      const password = form["password"].value;

      try {
        const res = await fetch("http://localhost:3000/api/login", {
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

        loginModal.style.display = "none";
        document.body.style.overflow = "";
        alert("Login feito com sucesso!");
        location.reload(); // ou redireciona para dashboard
      } catch (err) {
        console.error("Erro no login:", err);
        alert(err.message || "Erro de rede ou servidor.");
      }
    });
  }
}
