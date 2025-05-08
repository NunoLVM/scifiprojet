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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Menu.js */ \"./assets/scripts/components/Menu.js\");\n\nwindow.addEventListener(\"DOMContentLoaded\", function() {\n  let initMenu = new _components_Menu_js__WEBPACK_IMPORTED_MODULE_0__.buildMenu();\n  initMenu.renderMenu();\n});\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/scripts/base.js?");

/***/ }),

/***/ "./assets/scripts/components/Menu.js":
/*!*******************************************!*\
  !*** ./assets/scripts/components/Menu.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildMenu: () => (/* binding */ buildMenu)\n/* harmony export */ });\n/* harmony import */ var _data_Menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/Menu.js */ \"./assets/scripts/data/Menu.js\");\n\nclass buildMenu {\n  constructor() {\n    this.menuContainer = document.getElementById(\"menu\");\n    this.btnOpenMenu = document.getElementById(\"openMenu\");\n    this.btnCloseMenu = document.getElementById(\"closeMenu\");\n    this.mainMenu = document.querySelector(\".header-right\");\n    this.layer = document.querySelector(\".layer\");\n    this.clickEvents();\n  }\n  renderMenu() {\n    let menu = `<ul class=\"navlist\">`;\n    _data_Menu_js__WEBPACK_IMPORTED_MODULE_0__.links.forEach(function(link) {\n      menu += `<li><a href=\"${link.url}\" class=\"button\">${link.label}</a></li>`;\n    });\n    menu += `</ul>`;\n    this.appendMenu(menu);\n  }\n  appendMenu(menu) {\n    this.menuContainer.innerHTML = menu;\n  }\n  openMenuMobile() {\n    this.mainMenu.classList.add(\"visible\");\n    this.layer.classList.add(\"visible\");\n  }\n  closeMenuMobile() {\n    this.mainMenu.classList.add(\"loading\");\n    setTimeout(() => {\n      this.mainMenu.classList.remove(\"visible\");\n      this.mainMenu.classList.remove(\"loading\");\n      this.layer.classList.remove(\"visible\");\n    }, 300);\n  }\n  clickEvents() {\n    if (this.btnCloseMenu) {\n      this.btnCloseMenu.addEventListener(\"click\", () => {\n        this.closeMenuMobile();\n      });\n    }\n    if (this.btnOpenMenu) {\n      this.btnOpenMenu.addEventListener(\"click\", () => {\n        this.openMenuMobile();\n      });\n    }\n  }\n}\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/scripts/components/Menu.js?");

/***/ }),

/***/ "./assets/scripts/data/Menu.js":
/*!*************************************!*\
  !*** ./assets/scripts/data/Menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   links: () => (/* binding */ links)\n/* harmony export */ });\nlet links = [\n  {\n    label: \"Homepage\",\n    url: \"index.html\"\n  },\n  //@todo Login in modal box\n  {\n    label: \"Login\",\n    url: \"login.html\"\n  },\n  {\n    label: \"Sign Up\",\n    url: \"signup.html\"\n  },\n  {\n    label: \"Catalog\",\n    url: \"catalog.html\"\n  },\n  {\n    label: \"News\",\n    url: \"news.html\"\n  }\n];\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/scripts/data/Menu.js?");

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