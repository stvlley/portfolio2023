"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/AnimatedText.js":
/*!****************************************!*\
  !*** ./src/components/AnimatedText.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar homeData = {\n    skills: [\n        \"Developer\",\n        \"Analyst\",\n        \"Designer\"\n    ]\n};\nvar AnimatedText = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), text = ref[0], setText = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var interval = setInterval(function() {\n            setText(text < homeData.skills.length - 1 ? text + 1 : 0);\n            console.log(homeData.skills.length - 1, text);\n        }, 5000);\n        return function() {\n            return clearInterval(interval);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"cd-headline rotate-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"blc\",\n                children: \"Creative \"\n            }, void 0, false, {\n                fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/AnimatedText.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"cd-words-wrapper\",\n                children: homeData.skills.map(function(skill, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        className: text === i ? \"is-visible\" : \"is-hidden\",\n                        children: skill\n                    }, i, false, {\n                        fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/AnimatedText.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/AnimatedText.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/AnimatedText.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_s(AnimatedText, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = AnimatedText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimatedText);\nvar _c;\n$RefreshReg$(_c, \"AnimatedText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBNEM7O0FBRTVDLElBQU1FLFFBQVEsR0FBRztJQUNmQyxNQUFNLEVBQUU7UUFBQyxXQUFXO1FBQUUsU0FBUztRQUFFLFVBQVU7S0FBQztDQUM3QztBQUNELElBQU1DLFlBQVksR0FBRyxXQUFNOzs7SUFDekIsSUFBd0JILEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFOckMsSUFNYSxHQUFhQSxHQUFXLEdBQXhCLEVBTmIsT0FNc0IsR0FBSUEsR0FBVyxHQUFmO0lBQ3BCRCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNTyxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxXQUFNO1lBQ2pDRixPQUFPLENBQUNELElBQUksR0FBR0gsUUFBUSxDQUFDQyxNQUFNLENBQUNNLE1BQU0sR0FBRyxDQUFDLEdBQUdKLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMURLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxRQUFRLENBQUNDLE1BQU0sQ0FBQ00sTUFBTSxHQUFHLENBQUMsRUFBRUosSUFBSSxDQUFDLENBQUM7U0FDL0MsRUFBRSxJQUFJLENBQUM7UUFDUixPQUFPO21CQUFNTyxhQUFhLENBQUNMLFFBQVEsQ0FBQztTQUFBLENBQUM7S0FDdEMsQ0FBQyxDQUFDO0lBQ0gscUJBQ0UsOERBQUNNLE1BQUk7UUFBQ0MsU0FBUyxFQUFDLHNCQUFzQjs7MEJBQ3BDLDhEQUFDRCxNQUFJO2dCQUFDQyxTQUFTLEVBQUMsS0FBSzswQkFBQyxXQUFTOzs7OztxQkFBTzswQkFDdEMsOERBQUNELE1BQUk7Z0JBQUNDLFNBQVMsRUFBQyxrQkFBa0I7MEJBQy9CWixRQUFRLENBQUNDLE1BQU0sQ0FBQ1ksR0FBRyxDQUFDLFNBQUNDLEtBQUssRUFBRUMsQ0FBQzt5Q0FDNUIsOERBQUNDLEdBQUM7d0JBQVNKLFNBQVMsRUFBRVQsSUFBSSxLQUFLWSxDQUFDLEdBQUcsWUFBWSxHQUFHLFdBQVc7a0NBQzFERCxLQUFLO3VCQURBQyxDQUFDOzs7OzhCQUVMO2lCQUNMLENBQUM7Ozs7O3FCQUNHOzs7Ozs7YUFDRixDQUNQO0NBQ0g7R0FyQktiLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQXNCbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanM/NGMxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBob21lRGF0YSA9IHtcclxuICBza2lsbHM6IFtcIkRldmVsb3BlclwiLCBcIkFuYWx5c3RcIiwgXCJEZXNpZ25lclwiXSxcclxufTtcclxuY29uc3QgQW5pbWF0ZWRUZXh0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKDApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0VGV4dCh0ZXh0IDwgaG9tZURhdGEuc2tpbGxzLmxlbmd0aCAtIDEgPyB0ZXh0ICsgMSA6IDApO1xyXG4gICAgICBjb25zb2xlLmxvZyhob21lRGF0YS5za2lsbHMubGVuZ3RoIC0gMSwgdGV4dCk7XHJcbiAgICB9LCA1MDAwKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiY2QtaGVhZGxpbmUgcm90YXRlLTFcIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxjXCI+Q3JlYXRpdmUgPC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJjZC13b3Jkcy13cmFwcGVyXCI+XHJcbiAgICAgICAge2hvbWVEYXRhLnNraWxscy5tYXAoKHNraWxsLCBpKSA9PiAoXHJcbiAgICAgICAgICA8YiBrZXk9e2l9IGNsYXNzTmFtZT17dGV4dCA9PT0gaSA/IFwiaXMtdmlzaWJsZVwiIDogXCJpcy1oaWRkZW5cIn0+XHJcbiAgICAgICAgICAgIHtza2lsbH1cclxuICAgICAgICAgIDwvYj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVkVGV4dDtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaG9tZURhdGEiLCJza2lsbHMiLCJBbmltYXRlZFRleHQiLCJ0ZXh0Iiwic2V0VGV4dCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJJbnRlcnZhbCIsInNwYW4iLCJjbGFzc05hbWUiLCJtYXAiLCJza2lsbCIsImkiLCJiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AnimatedText.js\n");

/***/ })

});