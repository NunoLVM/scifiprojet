
import { footerLinks } from "../data/FooterMenu.js";

export class buildFooterMenu {
  constructor() {

    // Captura o elemento do footer a partir do id "footerMenu"
    this.footerMenuContainer = document.getElementById("footerMenu");
  }

  renderFooterMenu() {

    // Se o footer não existir, não faz nada
    if (!this.footerMenuContainer) return; 
    
    // Cria a lista do menu do footer
    let menu = `<ul class="footer-navlist">`;

    // Percorre os itens do menu do footer e adiciona-os à lista
    footerLinks.forEach(item => {
      menu += `<li><a href="${item.url}">${item.label}</a></li>`;
    });

    menu += `</ul>`;

    // Insere o menu no container do footer
    this.footerMenuContainer.innerHTML = menu;
  }
}
