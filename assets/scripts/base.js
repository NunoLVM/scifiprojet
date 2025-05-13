import { buildMenu } from "./components/Menu.js";
import { buildFooterMenu } from "./components/FooterMenu.js";
import { LoginModal } from "./components/LoginModal.js";


window.addEventListener("DOMContentLoaded", function () {
  let initMenu = new buildMenu();

  initMenu.renderMenu();

  // Inicializa e renderiza o menu do footer
  let initFooterMenu = new buildFooterMenu();
  
  initFooterMenu.renderFooterMenu();

  // Cria o modal de login dinamicamente
  new LoginModal();
});
