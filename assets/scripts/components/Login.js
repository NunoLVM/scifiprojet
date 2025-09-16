// window.addEventListener("load", function () {

//     // Seleciona o botão de login (deve ter id="loginBtn")
//     const loginBtn = document.getElementById("loginBtn");
    
//     // Seleciona o contêiner do modal (deve ter id="login-popup")
//     const loginModal = document.getElementById("login-popup");
    
//     // Seleciona o botão de fechar (X)
//     const closeBtn = loginModal.querySelector(".close-btn");
  
//     // Verifica se os elementos existem e registra mensagens de erro se necessário
//     if (!loginBtn) {
//       console.error("Element with id 'loginBtn' not found.");
//     }
//     if (!loginModal) {
//       console.error("Element with id 'login-popup' not found.");
//     }
//     if (!closeBtn) {
//       console.error("Element with class 'close-btn' not found inside modal.");
//     }
  
//     // Evento para abrir o modal ao clicar no botão de login
//     if (loginBtn) {
//       loginBtn.addEventListener("click", function (e) {
    
//         // Previne o redirecionamento padrão do link  
//         e.preventDefault(); 

//         // Exibe o modal (conforme o CSS)
//         loginModal.style.display = "flex"; 
//       });
//     }
  
//     // Evento para fechar o modal ao clicar na cruz
//     if (closeBtn) {
//       closeBtn.addEventListener("click", function () {

//         // Esconde o modal
//         loginModal.style.display = "none"; 
//       });
//     }
//   });