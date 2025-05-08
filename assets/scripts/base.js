import { buildMenu } from "./components/Menu.js";

window.addEventListener("DOMContentLoaded", function () {
  let initMenu = new buildMenu();

  initMenu.renderMenu();
});
