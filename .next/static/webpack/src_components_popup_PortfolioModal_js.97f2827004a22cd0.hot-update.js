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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ \"./src/components/popup/Modal.js\");\nvar _this = undefined;\n\n\nvar PortfolioModal = function(param) {\n    var close = param.close, open = param.open, data = param.data;\n    var _this1 = _this;\n    console.log(\"modal: \", data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        open: open,\n        close: close,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"news_popup_details\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"news_main_title\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: data && data.title\n                        }, void 0, false, {\n                            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, _this),\n                        data && data.technologies && data.technologies.map(function(tech, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: tech.name\n                            }, i, false, {\n                                fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                                lineNumber: 12,\n                                columnNumber: 76\n                            }, _this1);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"top_image\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: data.image_url,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"main\",\n                            \"data-img-url\": data && data.image_url,\n                            style: {\n                                backgroundImage: \"url(\".concat(data && data.image_url, \")\")\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text\",\n                    children: data && data.description && data.description.map(function(des, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: des\n                        }, i, false, {\n                            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                            lineNumber: 25,\n                            columnNumber: 73\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"edrea_tm_button portfolio_button_container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            target: \"_blank\",\n                            rel: \"noreferrer\",\n                            href: data.demo_url,\n                            children: \"Live\"\n                        }, void 0, false, {\n                            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_c = PortfolioModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PortfolioModal);\nvar _c;\n$RefreshReg$(_c, \"PortfolioModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wb3B1cC9Qb3J0Zm9saW9Nb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQTRCO0FBRTVCLElBQU1DLGNBQWMsR0FBRyxnQkFBMkI7UUFBeEJDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsSUFBSSxTQUFKQSxJQUFJOztJQUV6Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFRixJQUFJLENBQUM7SUFDNUIscUJBQ0UsOERBQUNKLDhDQUFLO1FBQUNHLElBQUksRUFBRUEsSUFBSTtRQUFFRCxLQUFLLEVBQUVBLEtBQUs7a0JBQzdCLDRFQUFDSyxLQUFHO1lBQUNDLFNBQVMsRUFBQyxvQkFBb0I7OzhCQUVuQyw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGlCQUFpQjs7c0NBQzVCLDhEQUFDQyxJQUFFO3NDQUFFTCxJQUFJLElBQUlBLElBQUksQ0FBQ00sS0FBSzs7Ozs7aUNBQU07d0JBQzVCTixJQUFJLElBQUlBLElBQUksQ0FBQ08sWUFBWSxJQUFJUCxJQUFJLENBQUNPLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsQ0FBQztpREFBSyw4REFBQ0MsTUFBSTswQ0FBVUYsSUFBSSxDQUFDRyxJQUFJOytCQUFiRixDQUFDOzs7O3NDQUFvQjt5QkFBQSxDQUFDO3NDQUNsRyw4REFBQ1AsS0FBRzs7OztpQ0FBRzs7Ozs7O3lCQUNIOzhCQUNOLDhEQUFDQSxLQUFHO29CQUFDQyxTQUFTLEVBQUMsV0FBVzs7c0NBQ3hCLDhEQUFDUyxLQUFHOzRCQUFDQyxHQUFHLEVBQUVkLElBQUksQ0FBQ2UsU0FBUzs0QkFBRUMsR0FBRyxFQUFDLEVBQUU7Ozs7O2lDQUFHO3NDQUNuQyw4REFBQ2IsS0FBRzs0QkFDRkMsU0FBUyxFQUFDLE1BQU07NEJBQ2hCYSxjQUFZLEVBQUVqQixJQUFJLElBQUlBLElBQUksQ0FBQ2UsU0FBUzs0QkFDcENHLEtBQUssRUFBRTtnQ0FBRUMsZUFBZSxFQUFFLE1BQUssQ0FBeUIsTUFBQyxDQUF4Qm5CLElBQUksSUFBSUEsSUFBSSxDQUFDZSxTQUFTLEVBQUMsR0FBQyxDQUFDOzZCQUFFOzs7OztpQ0FDNUQ7Ozs7Ozt5QkFDRTs4QkFFTiw4REFBQ1osS0FBRztvQkFBQ0MsU0FBUyxFQUFDLE1BQU07OEJBQ2xCSixJQUFJLElBQUlBLElBQUksQ0FBQ29CLFdBQVcsSUFBSXBCLElBQUksQ0FBQ29CLFdBQVcsQ0FBQ1osR0FBRyxDQUFDLFNBQUNhLEdBQUcsRUFBRVgsQ0FBQzs2Q0FBSyw4REFBQ1ksSUFBRTtzQ0FBVUQsR0FBRzsyQkFBUFgsQ0FBQzs7OztrQ0FBWTtxQkFBQSxDQUFDOzs7Ozt5QkFDakY7OEJBR04sOERBQUNQLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxFQUFFOzhCQUNmLDRFQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsNENBQTRDO2tDQUN6RCw0RUFBQ21CLEdBQUM7NEJBQ0FDLE1BQU0sRUFBQyxRQUFROzRCQUFDQyxHQUFHLEVBQUMsWUFBWTs0QkFDaENDLElBQUksRUFBRTFCLElBQUksQ0FBQzJCLFFBQVE7c0NBQUcsTUFFeEI7Ozs7O2lDQUFJOzs7Ozs2QkFDQTs7Ozs7eUJBQ0Y7Ozs7OztpQkFDRjs7Ozs7YUFDQSxDQUNSO0NBQ0g7QUF0Q0s5QixLQUFBQSxjQUFjO0FBdUNwQiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3BvcHVwL1BvcnRmb2xpb01vZGFsLmpzPzgyNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsXCI7XHJcblxyXG5jb25zdCBQb3J0Zm9saW9Nb2RhbCA9ICh7IGNsb3NlLCBvcGVuLCBkYXRhIH0pID0+IHtcclxuXHJcbiAgY29uc29sZS5sb2coXCJtb2RhbDogXCIsIGRhdGEpXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbCBvcGVuPXtvcGVufSBjbG9zZT17Y2xvc2V9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfcG9wdXBfZGV0YWlsc1wiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX21haW5fdGl0bGVcIj5cclxuICAgICAgICAgIDxoMz57ZGF0YSAmJiBkYXRhLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnRlY2hub2xvZ2llcyAmJiBkYXRhLnRlY2hub2xvZ2llcy5tYXAoKHRlY2gsIGkpID0+IDxzcGFuIGtleT17aX0+e3RlY2gubmFtZX08L3NwYW4+KX1cclxuICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcF9pbWFnZVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2RhdGEuaW1hZ2VfdXJsfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluXCJcclxuICAgICAgICAgICAgZGF0YS1pbWctdXJsPXtkYXRhICYmIGRhdGEuaW1hZ2VfdXJsfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtkYXRhICYmIGRhdGEuaW1hZ2VfdXJsfSlgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAge2RhdGEgJiYgZGF0YS5kZXNjcmlwdGlvbiAmJiBkYXRhLmRlc2NyaXB0aW9uLm1hcCgoZGVzLCBpKSA9PiA8aDQga2V5PXtpfT57ZGVzfTwvaDQ+KX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkcmVhX3RtX2J1dHRvbiBwb3J0Zm9saW9fYnV0dG9uX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIGhyZWY9e2RhdGEuZGVtb191cmx9ID5cclxuICAgICAgICAgICAgICBMaXZlXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTW9kYWw+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvTW9kYWw7XHJcbiJdLCJuYW1lcyI6WyJNb2RhbCIsIlBvcnRmb2xpb01vZGFsIiwiY2xvc2UiLCJvcGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInRpdGxlIiwidGVjaG5vbG9naWVzIiwibWFwIiwidGVjaCIsImkiLCJzcGFuIiwibmFtZSIsImltZyIsInNyYyIsImltYWdlX3VybCIsImFsdCIsImRhdGEtaW1nLXVybCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiZGVzY3JpcHRpb24iLCJkZXMiLCJoNCIsImEiLCJ0YXJnZXQiLCJyZWwiLCJocmVmIiwiZGVtb191cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/popup/PortfolioModal.js\n");

/***/ })

});