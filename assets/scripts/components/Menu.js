import { links } from "../data/Menu.js";


export class buildMenu {
  constructor() {
    this.menuContainer = document.getElementById("menu");

    this.btnOpenMenu = document.getElementById("openMenu");
    this.btnCloseMenu = document.getElementById("closeMenu");
    this.mainMenu = document.querySelector(".header-right");
    this.layer = document.querySelector(".layer");

    this.clickEvents();
  }

  renderMenu() {
    let menu = `<ul class="navlist">`;

    links.forEach(function (link) {
      const idAttribute = link.id ? 'id="' + link.id + '"' : "";
      menu += `<li><a href="${link.url}" class="button" ${idAttribute}>${link.label}</a></li>`;
    });

    menu += `</ul>`;

    this.appendMenu(menu);
  }

  appendMenu(menu) {
    this.menuContainer.innerHTML = menu;
  }

  openMenuMobile() {
    this.mainMenu.classList.add("visible");
    this.layer.classList.add("visible");
  }

  closeMenuMobile() {
    this.mainMenu.classList.add("loading");

    setTimeout(() => {
      this.mainMenu.classList.remove("visible");
      this.mainMenu.classList.remove("loading");
      this.layer.classList.remove("visible");
    }, 300);
  }

  clickEvents() {
    if (this.btnCloseMenu) {
      this.btnCloseMenu.addEventListener("click", () => {
        this.closeMenuMobile();
      });
    }

    if (this.btnOpenMenu) {
      this.btnOpenMenu.addEventListener("click", () => {
        this.openMenuMobile();
      });
    }
  }
}
