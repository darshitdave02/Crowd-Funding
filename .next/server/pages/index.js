/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/home/darshit/minor-project/pages/index.js\";\n\n\n\n\n\n\n\nclass projectIndex extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n  static async getInitialProps() {\n    const projects = await _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__.default.methods.getDeployedprojects().call();\n    console.log(projects);\n    return {\n      projects\n    };\n  }\n\n  renderprojects() {\n    const items = this.props.projects.map(address => {\n      return {\n        header: address,\n        description: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_6__.Link, {\n          route: `/projects/${address}`,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: \" View project\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 17\n        }, this),\n        fluid: true\n      };\n    });\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Group, {\n      items: items\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 16\n    }, this);\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n          children: \"Open Projects\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_6__.Link, {\n          route: \"/projects/new\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n              floated: \"right\",\n              content: \"Create project\",\n              icon: \"add circle\",\n              primary: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 19\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 15\n        }, this), this.renderprojects()]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (projectIndex);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJwcm9qZWN0SW5kZXgiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJwcm9qZWN0cyIsImZhY3RvcnkiLCJjYWxsIiwiY29uc29sZSIsImxvZyIsInJlbmRlcnByb2plY3RzIiwiaXRlbXMiLCJwcm9wcyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUEsWUFBTixTQUEyQkMsNENBQTNCLENBQW9DO0FBR2hDLGVBQWFDLGVBQWIsR0FBOEI7QUFDMUIsVUFBTUMsUUFBUSxHQUFDLE1BQU1DLGtGQUFBLEdBQXNDQyxJQUF0QyxFQUFyQjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjtBQUNBLFdBQU87QUFBQ0E7QUFBRCxLQUFQO0FBQ0g7O0FBRURLLGdCQUFjLEdBQUU7QUFDWixVQUFNQyxLQUFLLEdBQUMsS0FBS0MsS0FBTCxDQUFXUCxRQUFYLENBQW9CUSxHQUFwQixDQUF3QkMsT0FBTyxJQUMzQztBQUNHLGFBQU07QUFDRkMsY0FBTSxFQUFDRCxPQURMO0FBRUZFLG1CQUFXLGVBRVYsOERBQUMseUNBQUQ7QUFBTSxlQUFLLEVBQUcsYUFBWUYsT0FBUSxFQUFsQztBQUFBLGlDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKQztBQVFGRyxhQUFLLEVBQUM7QUFSSixPQUFOO0FBVUYsS0FaVyxDQUFaO0FBY0Esd0JBQU8sOERBQUMseURBQUQ7QUFBWSxXQUFLLEVBQUVOO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNIOztBQUVETyxRQUFNLEdBQUU7QUFDSix3QkFDSSw4REFBQyx1REFBRDtBQUFBLDZCQUNBO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFRSw4REFBQyx5Q0FBRDtBQUFNLGVBQUssRUFBQyxlQUFaO0FBQUEsaUNBQ0k7QUFBQSxtQ0FDRiw4REFBQyxxREFBRDtBQUFRLHFCQUFPLEVBQUMsT0FBaEI7QUFDRSxxQkFBTyxFQUFDLGdCQURWO0FBRUksa0JBQUksRUFBQyxZQUZUO0FBR0kscUJBQU8sRUFBRTtBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixFQVdPLEtBQUtSLGNBQUwsRUFYUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFpQkg7O0FBN0MrQjs7QUFnRHBDLCtEQUFlUixZQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDYXJkLEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnOyAgIFxyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7TGlua30gZnJvbSAnLi4vcm91dGVzJ1xyXG5cclxuXHJcbmNsYXNzIHByb2plY3RJbmRleCBleHRlbmRzIENvbXBvbmVudHtcclxuIFxyXG4gICBcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKXtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cz1hd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRwcm9qZWN0cygpLmNhbGwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgICAgICAgcmV0dXJuIHtwcm9qZWN0c307XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcnByb2plY3RzKCl7XHJcbiAgICAgICAgY29uc3QgaXRlbXM9dGhpcy5wcm9wcy5wcm9qZWN0cy5tYXAoYWRkcmVzcz0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgaGVhZGVyOmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17YC9wcm9qZWN0cy8ke2FkZHJlc3N9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSA+IFZpZXcgcHJvamVjdDwvYT4gXHJcbiAgICAgICAgICAgICAgIDwvTGluaz4gXHJcbiAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgIGZsdWlkOnRydWVcclxuICAgICAgICAgICB9OyAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9Lz5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDM+T3BlbiBQcm9qZWN0czwvaDM+XHJcbiAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvcHJvamVjdHMvbmV3XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBmbG9hdGVkPSdyaWdodCdcclxuICAgICAgICAgICAgICAgICAgY29udGVudD1cIkNyZWF0ZSBwcm9qZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRkIGNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcnByb2plY3RzKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js-ethereum_web3_js","ethereum_factory_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();