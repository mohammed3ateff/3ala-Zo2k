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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody{\r\n    font-family: Arial, sans-serif;\r\n    background-color: #f4f4f9;\r\n    color: #333;\r\n    line-height: 1.6;}\r\nheader{\r\n    /* background-color: red;\r\n    width:100%;\r\n    height: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 30px 20px; */\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background-color: #333;\r\n    color: #fff;\r\n    padding: 10px 20px;\r\n}\r\n@media (max-width:500px) {\r\n    header{\r\n        flex-direction: column;\r\n        gap: 8px;\r\n    }\r\n    \r\n}\r\nheader .logo {\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n}\r\n\r\nheader nav{\r\n    display: flex;\r\n}\r\n\r\nnav button {\r\n    background-color: #444;\r\n    color: #fff;\r\n    border: none;\r\n    padding: 10px 20px;\r\n    margin: 0 5px;\r\n    cursor: pointer;\r\n    border-radius: 8px;\r\n    transition: 0.3s ease;\r\n}\r\n\r\nnav button:hover {\r\n    background-color: #555;\r\n    transform: scale(1.1);\r\n}\r\n\r\n#content {\r\n    max-width: 800px;\r\n    margin: 20px auto;\r\n    padding: 20px;\r\n    background-color: #fff;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n    text-align: center;\r\n}\r\n\r\n#content h1 {\r\n    margin-bottom: 20px;\r\n    font-size: 2em;\r\n}\r\n\r\n#content img {\r\n    width: 100%;\r\n    height: auto;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#content p {\r\n    font-size: 1.2em;\r\n}\r\n\r\n/* CSS styles for the menu items */\r\n\r\n.menu-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .menu-item {\r\n    width: calc(33.33% - 20px);\r\n    margin: 10px;\r\n    padding: 20px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n    background-color: #fff;\r\n    transition: all 0.3s ease;\r\n  }\r\n  \r\n  .menu-item:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\r\n  }\r\n  \r\n  .menu-image {\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .menu-name {\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    margin-bottom: 5px;\r\n  }\r\n  \r\n  .menu-description {\r\n    font-size: 14px;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .menu-price {\r\n    font-size: 16px;\r\n    color: #007bff;\r\n  }\r\n  \r\n  /* Responsive styles */\r\n  @media screen and (max-width: 768px) {\r\n    .menu-item {\r\n      width: calc(50% - 20px);\r\n    }\r\n  }\r\n  \r\n  @media screen and (max-width: 480px) {\r\n    .menu-item {\r\n      width: calc(100% - 20px);\r\n    }\r\n  }\r\n  \r\n\r\n/* CSS styles for the contact form */\r\n\r\n/* CSS styles for the contact tab */\r\n\r\n.contact-container {\r\n    text-align: center;\r\n    padding: 20px;\r\n  }\r\n  \r\n  .restaurant-logo {\r\n    margin-left: auto;\r\n    margin-bottom: 20px;\r\n    background-color: #444;\r\n    padding: 15px;\r\n    color: #ccc;\r\n  }\r\n  \r\n  .contact-info p {\r\n    font-size: 16px;\r\n    margin: 10px 0;\r\n  }\r\n  \r\n  /* Form styles */\r\n  .form-label {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .form-input,\r\n  .form-textarea {\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin-bottom: 15px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  .form-textarea {\r\n    resize: vertical;\r\n  }\r\n  \r\n  .form-button {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 10px;\r\n    background-color: #007bff;\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .form-button:hover {\r\n    background-color: #0056b3;\r\n  }\r\n  \r\n  /* Responsive styles */\r\n  @media screen and (max-width: 768px) {\r\n    .restaurant-logo {\r\n      width: 80px;\r\n      margin-bottom: 10px;\r\n    }\r\n  \r\n    .contact-info p {\r\n      font-size: 14px;\r\n    }\r\n  \r\n    .form-input,\r\n    .form-textarea {\r\n      padding: 8px;\r\n    }\r\n  }\r\n  \r\n  @media screen and (max-width: 480px) {\r\n    .restaurant-logo {\r\n      width: 60px;\r\n      margin-bottom: 5px;\r\n    }\r\n  \r\n    .contact-info p {\r\n      font-size: 12px;\r\n    }\r\n  \r\n    .form-input,\r\n    .form-textarea {\r\n      padding: 6px;\r\n    }\r\n  }\r\n  \r\n  `, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/css/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contactTab.js":
/*!***************************!*\
  !*** ./src/contactTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contactTab() {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = ''; \r\n\r\n    const contact = document.createElement('div');\r\n    contact.classList.add('contact-container'); \r\n\r\n    const logo = document.createElement('h1');\r\n    logo.textContent = \"3ala Zo2ak\"\r\n    logo.classList.add('restaurant-logo');\r\n    contact.appendChild(logo);\r\n\r\n    const contactInfo = document.createElement('div');\r\n    contactInfo.classList.add('contact-info'); \r\n\r\n    const phoneNumber = document.createElement('p');\r\n    phoneNumber.textContent = 'Phone: 01203388446'; \r\n    contactInfo.appendChild(phoneNumber);\r\n\r\n    const email = document.createElement('p');\r\n    email.textContent = 'Email: muhammedatef57@gmail.com'; \r\n    contactInfo.appendChild(email);\r\n\r\n    contact.appendChild(contactInfo);\r\n\r\n    const form = document.createElement('form');\r\n\r\n    const nameLabel = document.createElement('label');\r\n    nameLabel.textContent = 'Name:';\r\n    nameLabel.classList.add('form-label');\r\n    const nameInput = document.createElement('input');\r\n    nameInput.setAttribute('type', 'text');\r\n    nameInput.setAttribute('placeholder', 'Enter your name');\r\n    nameInput.classList.add('form-input');\r\n    nameLabel.appendChild(nameInput);\r\n\r\n    const emailLabel = document.createElement('label');\r\n    emailLabel.textContent = 'Email:';\r\n    emailLabel.classList.add('form-label');\r\n    const emailInput = document.createElement('input');\r\n    emailInput.setAttribute('type', 'email');\r\n    emailInput.setAttribute('placeholder', 'Enter your email');\r\n    emailInput.classList.add('form-input');\r\n    emailLabel.appendChild(emailInput);\r\n\r\n    const messageLabel = document.createElement('label');\r\n    messageLabel.textContent = 'Message:';\r\n    messageLabel.classList.add('form-label');\r\n    const messageTextarea = document.createElement('textarea');\r\n    messageTextarea.setAttribute('rows', '4');\r\n    messageTextarea.setAttribute('placeholder', 'Enter your message');\r\n    messageTextarea.classList.add('form-textarea');\r\n    messageLabel.appendChild(messageTextarea);\r\n\r\n    const submitButton = document.createElement('button');\r\n    submitButton.textContent = 'Submit';\r\n    submitButton.setAttribute('type', 'submit');\r\n    submitButton.classList.add('form-button');\r\n\r\n    form.appendChild(nameLabel);\r\n    form.appendChild(emailLabel);\r\n    form.appendChild(messageLabel);\r\n    form.appendChild(submitButton);\r\n\r\n    contact.appendChild(form);\r\n\r\n    content.appendChild(contact);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactTab);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contactTab.js?");

/***/ }),

/***/ "./src/homeTab.js":
/*!************************!*\
  !*** ./src/homeTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction homeTab() {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = '';\r\n\r\n     const headline = document.createElement('h1');\r\n     headline.textContent = 'Welcome to 3la Zo2k';\r\n     content.appendChild(headline);\r\n \r\n     const image = document.createElement('img');\r\n     image.src = 'https://graphicsfamily.com/wp-content/uploads/edd/2023/02/Restaurant-Logo-Design-2-1180x664.jpg';\r\n     content.appendChild(image);\r\n \r\n     const paragraph = document.createElement('p');\r\n     paragraph.textContent = 'Welcome to 3la zo2k, where we serve the most delightful and exquisite dishes that tantalize your taste buds. Our chefs use the freshest ingredients to create culinary masterpieces that will leave you craving for more. Come and experience a dining adventure like no other in a cozy and elegant setting. We look forward to serving you!';\r\n     content.appendChild(paragraph);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeTab);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/homeTab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _homeTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeTab */ \"./src/homeTab.js\");\n/* harmony import */ var _menuTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuTab */ \"./src/menuTab.js\");\n/* harmony import */ var _contactTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactTab */ \"./src/contactTab.js\");\n// src/index.js\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const homeButton = document.getElementById('home');\r\n    const menuButton = document.getElementById('menu');\r\n    const contactButton = document.getElementById('contact');\r\n\r\n    // Event listeners for each button\r\n    homeButton.addEventListener('click', () => {\r\n        (0,_homeTab__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    });\r\n\r\n    menuButton.addEventListener('click', () => {\r\n        (0,_menuTab__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    });\r\n\r\n    contactButton.addEventListener('click', () => {\r\n        (0,_contactTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    });\r\n\r\n    // Load the home tab by default\r\n    (0,_homeTab__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menuTab() {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = ''; \r\n\r\n    const menuItems = [\r\n        {\r\n            name: 'Pizza',\r\n            description: 'Delicious pizza.',\r\n            price: '$10',\r\n            imageUrl: 'https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg'\r\n        },\r\n        {\r\n            name: 'Pasta',\r\n            description: 'Italian pasta.',\r\n            price: '$12',\r\n            imageUrl: 'https://www.washingtonpost.com/resizer/E4Zygqr-5dBR09mfDV1WZ2TVioc=/arc-anglerfish-washpost-prod-washpost/public/HJRCQ6AIMT54I3ONNQLAPOZA2Y.jpg'\r\n        },\r\n        {\r\n            name: 'Koshari',\r\n            description: 'a7la tb2 koshari.',\r\n            price: '$20',\r\n            imageUrl: 'https://media-cdn2.greatbritishchefs.com/media/sdsfw0wt/gbc_chickpeas-15.whqc_768x512q80.jpg'\r\n        },\r\n        {\r\n            name: 'Pizza',\r\n            description: 'Delicious pizza.',\r\n            price: '$10',\r\n            imageUrl: 'https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg'\r\n        },\r\n        {\r\n            name: 'Pasta',\r\n            description: 'Italian pasta.',\r\n            price: '$12',\r\n            imageUrl: 'https://www.washingtonpost.com/resizer/E4Zygqr-5dBR09mfDV1WZ2TVioc=/arc-anglerfish-washpost-prod-washpost/public/HJRCQ6AIMT54I3ONNQLAPOZA2Y.jpg'\r\n        },\r\n        {\r\n            name: 'Koshari',\r\n            description: 'a7la tb2 koshari.',\r\n            price: '$20',\r\n            imageUrl: 'https://media-cdn2.greatbritishchefs.com/media/sdsfw0wt/gbc_chickpeas-15.whqc_768x512q80.jpg'\r\n        }\r\n    ];\r\n\r\n    const menuContainer = document.createElement('div');\r\n    menuContainer.classList.add('menu-container'); \r\n\r\n    menuItems.forEach(item => {\r\n        const menuItem = document.createElement('div');\r\n        menuItem.classList.add('menu-item'); \r\n\r\n        const img = document.createElement('img');\r\n        img.src = item.imageUrl;\r\n        img.classList.add('menu-image'); \r\n        menuItem.appendChild(img);\r\n\r\n        const name = document.createElement('div');\r\n        name.textContent = item.name;\r\n        name.classList.add('menu-name'); \r\n        menuItem.appendChild(name);\r\n\r\n        const description = document.createElement('div');\r\n        description.textContent = item.description;\r\n        description.classList.add('menu-description')\r\n        menuItem.appendChild(description);\r\n\r\n        const price = document.createElement('div');\r\n        price.textContent = `Price: ${item.price}`;\r\n        price.classList.add('menu-price'); \r\n        menuItem.appendChild(price);\r\n\r\n        menuContainer.appendChild(menuItem);\r\n    });\r\n\r\n    content.appendChild(menuContainer);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuTab);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuTab.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;