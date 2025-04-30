import "./components/MainNav.js";
import { links } from "./Menu.js";
// import "./components/Blackh.js";

let menu = `<ul class="navlist">`;
let menuContainer = document.getElementById("menu");

links.forEach(function (link) {
  menu += `<li><a href="${link.url}" class="button">${link.label}</a></li>`;
});
menu += `</ul>`;

menuContainer.innerHTML = menu;
