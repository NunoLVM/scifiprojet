/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/scripts/base.js":
/*!********************************!*\
  !*** ./assets/scripts/base.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Menu.js */ \"./assets/scripts/components/Menu.js\");\n/* harmony import */ var _components_FooterMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/FooterMenu.js */ \"./assets/scripts/components/FooterMenu.js\");\n/* harmony import */ var _components_LoginModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LoginModal.js */ \"./assets/scripts/components/LoginModal.js\");\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", function() {\n  let initMenu = new _components_Menu_js__WEBPACK_IMPORTED_MODULE_0__.buildMenu();\n  initMenu.renderMenu();\n  let initFooterMenu = new _components_FooterMenu_js__WEBPACK_IMPORTED_MODULE_1__.buildFooterMenu();\n  initFooterMenu.renderFooterMenu();\n  new _components_LoginModal_js__WEBPACK_IMPORTED_MODULE_2__.LoginModal();\n});\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/scripts/base.js?");

/***/ }),

/***/ "./assets/scripts/components/FooterMenu.js":
/*!*************************************************!*\
  !*** ./assets/scripts/components/FooterMenu.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildFooterMenu: () => (/* binding */ buildFooterMenu)\n/* harmony export */ });\n/* harmony import */ var _data_FooterMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/FooterMenu.js */ \"./assets/scripts/data/FooterMenu.js\");\n\nclass buildFooterMenu {\n  constructor() {\n    this.footerMenuContainer = document.getElementById(\"footerMenu\");\n  }\n  renderFooterMenu() {\n    if (!this.footerMenuContainer) return;\n    let menu = `<ul class=\"footer-navlist\">`;\n    _data_FooterMenu_js__WEBPACK_IMPORTED_MODULE_0__.footerLinks.forEach((item) => {\n      menu += `<li><a href=\"${item.url}\">${item.label}</a></li>`;\n    });\n    menu += `</ul>`;\n    this.footerMenuContainer.innerHTML = menu;\n  }\n}\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/scripts/components/FooterMenu.js?");

/***/ }),

/***/ "./assets/scripts/components/LoginModal.js":
/*!*************************************************!*\
  !*** ./assets/scripts/components/LoginModal.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoginModal: () => (/* binding */ LoginModal)\n/* harmony export */ });\nclass LoginModal {\n  constructor() {\n    this.renderModal();\n    this.attachEvents();\n  }\n  renderModal() {\n    const modalContainer = document.createElement(\"div\");\n    modalContainer.id = \"login-popup\";\n    modalContainer.className = \"popup-container\";\n    modalContainer.style.display = \"none\";\n    modalContainer.innerHTML = `\n        <div class=\"popup-content\">\n          <span class=\"close-btn\">&times;</span>\n          <h2 class=\"login-title\">Login Protocol: Only true sci-fi fans beyond this point.</h2>\n          <form action=\"#\" method=\"post\" aria-label=\"Login Form\">\n            <label for=\"login-username\">Pilot ID required</label>\n            <input type=\"text\" id=\"login-username\" name=\"username\" required placeholder=\"Input Galactic ID\">\n        \n            <label for=\"login-password\">Launch code</label>\n            <input type=\"password\" id=\"login-password\" name=\"password\" required placeholder=\"Enter access key\">\n        \n            <button type=\"submit\" class=\"button\">Initiate Login</button>\n        \n            <div class=\"login-message\">\n              <p class=\"terminal-line line-1\">Welcome back, commander.</p>\n              <p class=\"terminal-line line-2\">Authentication sequence initiated.</p>\n            </div>\n          </form>\n        </div>\n      `;\n    document.body.appendChild(modalContainer);\n  }\n  attachEvents() {\n    const loginModal = document.getElementById(\"login-popup\");\n    const closeBtn = loginModal.querySelector(\".close-btn\");\n    const loginBtn = document.getElementById(\"loginBtn\");\n    if (!loginBtn) {\n      console.error(\"Button with id 'loginBtn' not found.\");\n      return;\n    }\n    loginBtn.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n      loginModal.style.display = \"flex\";\n    });\n    closeBtn.addEventListener(\"click\", () => {\n      loginModal.style.display = \"none\";\n    });\n  }\n}\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/scripts/components/LoginModal.js?");

/***/ }),

/***/ "./assets/scripts/components/Menu.js":
/*!*******************************************!*\
  !*** ./assets/scripts/components/Menu.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildMenu: () => (/* binding */ buildMenu)\n/* harmony export */ });\n/* harmony import */ var _data_Menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/Menu.js */ \"./assets/scripts/data/Menu.js\");\n\nclass buildMenu {\n  constructor() {\n    this.menuContainer = document.getElementById(\"menu\");\n    this.btnOpenMenu = document.getElementById(\"openMenu\");\n    this.btnCloseMenu = document.getElementById(\"closeMenu\");\n    this.mainMenu = document.querySelector(\".header-right\");\n    this.layer = document.querySelector(\".layer\");\n    this.clickEvents();\n  }\n  renderMenu() {\n    let menu = `<ul class=\"navlist\">`;\n    _data_Menu_js__WEBPACK_IMPORTED_MODULE_0__.links.forEach(function(link) {\n      const idAttribute = link.id ? 'id=\"' + link.id + '\"' : \"\";\n      menu += `<li><a href=\"${link.url}\" class=\"button\" ${idAttribute}>${link.label}</a></li>`;\n    });\n    menu += `</ul>`;\n    this.appendMenu(menu);\n  }\n  appendMenu(menu) {\n    this.menuContainer.innerHTML = menu;\n  }\n  openMenuMobile() {\n    this.mainMenu.classList.add(\"visible\");\n    this.layer.classList.add(\"visible\");\n  }\n  closeMenuMobile() {\n    this.mainMenu.classList.add(\"loading\");\n    setTimeout(() => {\n      this.mainMenu.classList.remove(\"visible\");\n      this.mainMenu.classList.remove(\"loading\");\n      this.layer.classList.remove(\"visible\");\n    }, 300);\n  }\n  clickEvents() {\n    if (this.btnCloseMenu) {\n      this.btnCloseMenu.addEventListener(\"click\", () => {\n        this.closeMenuMobile();\n      });\n    }\n    if (this.btnOpenMenu) {\n      this.btnOpenMenu.addEventListener(\"click\", () => {\n        this.openMenuMobile();\n      });\n    }\n  }\n}\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/scripts/components/Menu.js?");

/***/ }),

/***/ "./assets/scripts/data/FooterMenu.js":
/*!*******************************************!*\
  !*** ./assets/scripts/data/FooterMenu.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   footerLinks: () => (/* binding */ footerLinks)\n/* harmony export */ });\nlet footerLinks = [\n  {\n    label: \"About Us\",\n    url: \"about.html\"\n  },\n  {\n    label: \"Contact\",\n    url: \"contact.html\"\n  },\n  {\n    label: \"Legal Notice\",\n    url: \"legal_notice.html\"\n  }\n];\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/scripts/data/FooterMenu.js?");

/***/ }),

/***/ "./assets/scripts/data/Menu.js":
/*!*************************************!*\
  !*** ./assets/scripts/data/Menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   links: () => (/* binding */ links)\n/* harmony export */ });\nlet links = [\n  {\n    label: \"Homepage\",\n    url: \"index.html\"\n  },\n  {\n    label: \"Login\",\n    url: \"#\",\n    id: \"loginBtn\"\n  },\n  {\n    label: \"Sign Up\",\n    url: \"signup.html\"\n  },\n  {\n    label: \"Catalog\",\n    url: \"catalog.html\"\n  },\n  {\n    label: \"News\",\n    url: \"news.html\"\n  }\n];\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/scripts/data/Menu.js?");

/***/ }),

/***/ "./assets/styles/base.scss":
/*!*********************************!*\
  !*** ./assets/styles/base.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/styles/base.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./assets/scripts/base.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/styles/base.scss");
/******/ 	
/******/ })()
;