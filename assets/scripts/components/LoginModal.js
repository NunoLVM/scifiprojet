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

      // Certifica-se de que o botão de login (gerado na navbar) tenha id="loginBtn"
      const loginBtn = document.getElementById("loginBtn");
  
      if (!loginBtn) {
        console.error("Button with id 'loginBtn' not found.");
        return;
      }
  
      loginBtn.addEventListener("click", (e) => {
        e.preventDefault(); // 
        loginModal.style.display = "flex"; // 
      });
  
      closeBtn.addEventListener("click", () => {
        loginModal.style.display = "none";
      });
    }
  }