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

/***/ "./src/layouts/MobileHeader.js":
/*!*************************************!*\
  !*** ./src/layouts/MobileHeader.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/context */ \"./src/context/context.js\");\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar MobileHeader = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), toggle = ref[0], setToggle = ref[1];\n    var navContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.context);\n    var nav = navContext.nav, changeNav = navContext.changeNav;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), posts = ref1[0], setPosts = ref1[1];\n    var activeNav = function(value) {\n        return value == nav ? \"active\" : \"\";\n    };\n    var onClick = function(value) {\n        setToggle(false);\n        changeNav(value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@stephentalleyjr\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            setPosts(data.items);\n        });\n    }, []);\n    console.log(typeof posts === \"undefined\" ? \"undefined\" : _typeof(posts));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"edrea_tm_topbar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"topbar_inner\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"logo\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"img/logo.svg\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"trigger\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hamburger hamburger--slider \".concat(toggle ? \"is-active\" : \"\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"hamburger-box\",\n                                    onClick: function() {\n                                        return setToggle(!toggle);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"hamburger-inner\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"edrea_tm_mobile_menu \".concat(toggle ? \"opened\" : \"\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inner\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"menu_list\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"transition_link\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: activeNav(\"home\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#home\",\n                                        onClick: function() {\n                                            return onClick(\"home\");\n                                        },\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: activeNav(\"about\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#about\",\n                                        onClick: function() {\n                                            return onClick(\"about\");\n                                        },\n                                        children: \"About\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: activeNav(\"portfolio\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#portfolio\",\n                                        onClick: function() {\n                                            return onClick(\"portfolio\");\n                                        },\n                                        children: \"Portfolio\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: activeNav(\"news\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#news\",\n                                        onClick: function() {\n                                            return onClick(\"news\");\n                                        },\n                                        children: \"Blog\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: activeNav(\"contact\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#contact\",\n                                        onClick: function() {\n                                            return onClick(\"contact\");\n                                        },\n                                        children: \"Contact\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/layouts/MobileHeader.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(MobileHeader, \"RgkR8NU2lus1qy/SbHJg2FCKf7Y=\");\n_c = MobileHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileHeader);\nvar _c;\n$RefreshReg$(_c, \"MobileHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDWDtDQUNIO0dBNUVLVixZQUFZO0FBQVpBLEtBQUFBLFlBQVk7QUE2RWxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvTW9iaWxlSGVhZGVyLmpzPzJiZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2NvbnRleHRcIjtcclxuXHJcbmNvbnN0IE1vYmlsZUhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG5hdkNvbnRleHQgPSB1c2VDb250ZXh0KGNvbnRleHQpO1xyXG4gIGNvbnN0IHsgbmF2LCBjaGFuZ2VOYXYgfSA9IG5hdkNvbnRleHQ7XHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGFjdGl2ZU5hdiA9ICh2YWx1ZSkgPT4gKHZhbHVlID09IG5hdiA/IFwiYWN0aXZlXCIgOiBcIlwiKTtcclxuICBjb25zdCBvbkNsaWNrID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgY2hhbmdlTmF2KHZhbHVlKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaCgnaHR0cHM6Ly9hcGkucnNzMmpzb24uY29tL3YxL2FwaS5qc29uP3Jzc191cmw9aHR0cHM6Ly9tZWRpdW0uY29tL2ZlZWQvQHN0ZXBoZW50YWxsZXlqcicpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0UG9zdHMoZGF0YS5pdGVtcylcclxuICAgICAgfSlcclxuICB9LCBbXSlcclxuICBjb25zb2xlLmxvZyh0eXBlb2YgcG9zdHMpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRyZWFfdG1fdG9wYmFyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BiYXJfaW5uZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2xvZ28uc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyaWdnZXJcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhhbWJ1cmdlciBoYW1idXJnZXItLXNsaWRlciAke3RvZ2dsZSA/IFwiaXMtYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJveFwiIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZSghdG9nZ2xlKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlci1pbm5lclwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGVkcmVhX3RtX21vYmlsZV9tZW51ICR7dG9nZ2xlID8gXCJvcGVuZWRcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51X2xpc3RcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRyYW5zaXRpb25fbGlua1wiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2FjdGl2ZU5hdihcImhvbWVcIil9PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNob21lXCIgb25DbGljaz17KCkgPT4gb25DbGljayhcImhvbWVcIil9PlxyXG4gICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthY3RpdmVOYXYoXCJhYm91dFwiKX0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2Fib3V0XCIgb25DbGljaz17KCkgPT4gb25DbGljayhcImFib3V0XCIpfT5cclxuICAgICAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2FjdGl2ZU5hdihcInBvcnRmb2xpb1wiKX0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3BvcnRmb2xpb1wiIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soXCJwb3J0Zm9saW9cIil9PlxyXG4gICAgICAgICAgICAgICAgICBQb3J0Zm9saW9cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2FjdGl2ZU5hdihcIm5ld3NcIil9PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNuZXdzXCIgb25DbGljaz17KCkgPT4gb25DbGljayhcIm5ld3NcIil9PlxyXG4gICAgICAgICAgICAgICAgICBCbG9nXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthY3RpdmVOYXYoXCJjb250YWN0XCIpfT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soXCJjb250YWN0XCIpfT5cclxuICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZUhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29udGV4dCIsIk1vYmlsZUhlYWRlciIsInRvZ2dsZSIsInNldFRvZ2dsZSIsIm5hdkNvbnRleHQiLCJuYXYiLCJjaGFuZ2VOYXYiLCJwb3N0cyIsInNldFBvc3RzIiwiYWN0aXZlTmF2IiwidmFsdWUiLCJvbkNsaWNrIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJpdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsInVsIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layouts/MobileHeader.js\n");

/***/ })

});