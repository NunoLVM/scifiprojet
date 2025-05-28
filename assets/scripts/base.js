import { buildMenu } from "./components/Menu.js";
import { buildFooterMenu } from "./components/FooterMenu.js";
import { LoginModal } from "./components/LoginModal.js";

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

  // Cria o modal de login dinamicamente
  new LoginModal();
});
