export class LoginModal {
  constructor() {
    this.renderModal();
    this.attachEvents();
  }

  renderModal() {
    const modalContainer = document.createElement("div");
    modalContainer.id = "login-popup";
    modalContainer.className = "popup-container";

    // Começa oculto
    modalContainer.style.display = "none";
    modalContainer.innerHTML = `
        <div class="popup-content">
          <span class="close-btn">&times;</span>
          <h2 class="login-title">Login Protocol: Only true sci-fi fans beyond this point.</h2>
          <form action="#" method="post" aria-label="Login Form">
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
    const loginBtn = document.getElementById("loginBtn");
    const form = loginModal.querySelector("form");

    if (!loginBtn) return console.error("loginBtn not found");

    // 1) Abrir modal
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      loginModal.style.display = "flex";
    });

    // 2) Fechar modal
    closeBtn.addEventListener("click", () => {
      loginModal.style.display = "none";
    });

    // 3) Submeter formulário
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // recolhe valores
      const username = form["username"].value;
      const password = form["password"].value;

      try {
        const res = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: username, password }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);

        // 4) Guarda no localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: data.token,
            username: data.user.username,
          })
        );

        // Fecha modal + recarrega para atualizar navbar
        loginModal.style.display = "none";
        location.reload();
      } catch (err) {
        alert(err.message);
      }
    });
  }
}