"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_popup_PortfolioModal_js",{

/***/ "./src/components/popup/PortfolioModal.js":
/*!************************************************!*\
  !*** ./src/components/popup/PortfolioModal.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ \"./src/components/popup/Modal.js\");\nvar _this = undefined;\n\n\nvar PortfolioModal = function(param) {\n    var close = param.close, open = param.open, data = param.data;\n    var _this1 = _this;\n    console.log(\"modal: \", data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        open: open,\n        close: close,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"news_popup_details\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"top_image\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: data.image_url,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"main\",\n                            \"data-img-url\": data && data.image_url,\n                            style: {\n                                backgroundImage: \"url(\".concat(data && data.image_url, \")\")\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"news_main_title\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: data && data.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 11\n                                }, _this),\n                                data && data.technologies && data.technologies.map(function(tech, i) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: tech.name\n                                    }, i, false, {\n                                        fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                                        lineNumber: 18,\n                                        columnNumber: 76\n                                    }, _this1);\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                            lineNumber: 16,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text\",\n                    children: data && data.description && data.description.map(function(des, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: des\n                        }, i, false, {\n                            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                            lineNumber: 23,\n                            columnNumber: 73\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"edrea_tm_button portfolio_button_container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            target: \"_blank\",\n                            rel: \"noreferrer\",\n                            href: data.demo_url,\n                            children: \"Live\"\n                        }, void 0, false, {\n                            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_c = PortfolioModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PortfolioModal);\nvar _c;\n$RefreshReg$(_c, \"PortfolioModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wb3B1cC9Qb3J0Zm9saW9Nb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQTRCO0FBRTVCLElBQU1DLGNBQWMsR0FBRyxnQkFBMkI7UUFBeEJDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsSUFBSSxTQUFKQSxJQUFJOztJQUV6Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFRixJQUFJLENBQUM7SUFDNUIscUJBQ0UsOERBQUNKLDhDQUFLO1FBQUNHLElBQUksRUFBRUEsSUFBSTtRQUFFRCxLQUFLLEVBQUVBLEtBQUs7a0JBQzdCLDRFQUFDSyxLQUFHO1lBQUNDLFNBQVMsRUFBQyxvQkFBb0I7OzhCQUNqQyw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLFdBQVc7O3NDQUN4Qiw4REFBQ0MsS0FBRzs0QkFBQ0MsR0FBRyxFQUFFTixJQUFJLENBQUNPLFNBQVM7NEJBQUVDLEdBQUcsRUFBQyxFQUFFOzs7OztpQ0FBRztzQ0FDbkMsOERBQUNMLEtBQUc7NEJBQ0ZDLFNBQVMsRUFBQyxNQUFNOzRCQUNoQkssY0FBWSxFQUFFVCxJQUFJLElBQUlBLElBQUksQ0FBQ08sU0FBUzs0QkFDcENHLEtBQUssRUFBRTtnQ0FBRUMsZUFBZSxFQUFFLE1BQUssQ0FBeUIsTUFBQyxDQUF4QlgsSUFBSSxJQUFJQSxJQUFJLENBQUNPLFNBQVMsRUFBQyxHQUFDLENBQUM7NkJBQUU7Ozs7O2lDQUM1RDtzQ0FDSiw4REFBQ0osS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLGlCQUFpQjs7OENBQzlCLDhEQUFDUSxJQUFFOzhDQUFFWixJQUFJLElBQUlBLElBQUksQ0FBQ2EsS0FBSzs7Ozs7eUNBQU07Z0NBQzVCYixJQUFJLElBQUlBLElBQUksQ0FBQ2MsWUFBWSxJQUFJZCxJQUFJLENBQUNjLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsQ0FBQzt5REFBSyw4REFBQ0MsTUFBSTtrREFBVUYsSUFBSSxDQUFDRyxJQUFJO3VDQUFiRixDQUFDOzs7OzhDQUFvQjtpQ0FBQSxDQUFDOzhDQUNsRyw4REFBQ2QsS0FBRzs7Ozt5Q0FBRzs7Ozs7O2lDQUNIOzs7Ozs7eUJBQ0E7OEJBQ04sOERBQUNBLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxNQUFNOzhCQUNsQkosSUFBSSxJQUFJQSxJQUFJLENBQUNvQixXQUFXLElBQUlwQixJQUFJLENBQUNvQixXQUFXLENBQUNMLEdBQUcsQ0FBQyxTQUFDTSxHQUFHLEVBQUVKLENBQUM7NkNBQUssOERBQUNLLElBQUU7c0NBQVVELEdBQUc7MkJBQVBKLENBQUM7Ozs7a0NBQVk7cUJBQUEsQ0FBQzs7Ozs7eUJBQ2pGOzhCQUdOLDhEQUFDZCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsRUFBRTs4QkFDZiw0RUFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDRDQUE0QztrQ0FDekQsNEVBQUNtQixHQUFDOzRCQUNBQyxNQUFNLEVBQUMsUUFBUTs0QkFBQ0MsR0FBRyxFQUFDLFlBQVk7NEJBQ2hDQyxJQUFJLEVBQUUxQixJQUFJLENBQUMyQixRQUFRO3NDQUFHLE1BRXhCOzs7OztpQ0FBSTs7Ozs7NkJBQ0E7Ozs7O3lCQUNGOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0EsQ0FDUjtDQUNIO0FBcENLOUIsS0FBQUEsY0FBYztBQXFDcEIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wb3B1cC9Qb3J0Zm9saW9Nb2RhbC5qcz84MjQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RhbCBmcm9tIFwiLi9Nb2RhbFwiO1xyXG5cclxuY29uc3QgUG9ydGZvbGlvTW9kYWwgPSAoeyBjbG9zZSwgb3BlbiwgZGF0YSB9KSA9PiB7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwibW9kYWw6IFwiLCBkYXRhKVxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWwgb3Blbj17b3Blbn0gY2xvc2U9e2Nsb3NlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX3BvcHVwX2RldGFpbHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcF9pbWFnZVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2RhdGEuaW1hZ2VfdXJsfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluXCJcclxuICAgICAgICAgICAgZGF0YS1pbWctdXJsPXtkYXRhICYmIGRhdGEuaW1hZ2VfdXJsfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtkYXRhICYmIGRhdGEuaW1hZ2VfdXJsfSlgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19tYWluX3RpdGxlXCI+XHJcbiAgICAgICAgICA8aDM+e2RhdGEgJiYgZGF0YS50aXRsZX08L2gzPlxyXG4gICAgICAgICAge2RhdGEgJiYgZGF0YS50ZWNobm9sb2dpZXMgJiYgZGF0YS50ZWNobm9sb2dpZXMubWFwKCh0ZWNoLCBpKSA9PiA8c3BhbiBrZXk9e2l9Pnt0ZWNoLm5hbWV9PC9zcGFuPil9XHJcbiAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmRlc2NyaXB0aW9uICYmIGRhdGEuZGVzY3JpcHRpb24ubWFwKChkZXMsIGkpID0+IDxoNCBrZXk9e2l9PntkZXN9PC9oND4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRyZWFfdG1fYnV0dG9uIHBvcnRmb2xpb19idXR0b25fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgaHJlZj17ZGF0YS5kZW1vX3VybH0gPlxyXG4gICAgICAgICAgICAgIExpdmVcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW9Nb2RhbDtcclxuIl0sIm5hbWVzIjpbIk1vZGFsIiwiUG9ydGZvbGlvTW9kYWwiLCJjbG9zZSIsIm9wZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlX3VybCIsImFsdCIsImRhdGEtaW1nLXVybCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaDMiLCJ0aXRsZSIsInRlY2hub2xvZ2llcyIsIm1hcCIsInRlY2giLCJpIiwic3BhbiIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImRlcyIsImg0IiwiYSIsInRhcmdldCIsInJlbCIsImhyZWYiLCJkZW1vX3VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/popup/PortfolioModal.js\n");

/***/ })

});