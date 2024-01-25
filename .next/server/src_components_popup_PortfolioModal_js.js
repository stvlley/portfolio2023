"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_components_popup_PortfolioModal_js";
exports.ids = ["src_components_popup_PortfolioModal_js"];
exports.modules = {

/***/ "./src/components/popup/PortfolioModal.js":
/*!************************************************!*\
  !*** ./src/components/popup/PortfolioModal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ \"./src/components/popup/Modal.js\");\n\n\nconst PortfolioModal = ({ close , open , data  })=>{\n    console.log(\"modal: \", data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        open: open,\n        close: close,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"news_popup_details\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"news_main_title\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"portfolio_title_container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: data && data.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                                    lineNumber: 11,\n                                    columnNumber: 13\n                                }, undefined),\n                                data && data.technologies && data.technologies.map((tech, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"skills_container\",\n                                        children: tech.name\n                                    }, i, false, {\n                                        fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                                        lineNumber: 12,\n                                        columnNumber: 78\n                                    }, undefined)\n                                )\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"top_image\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: data.image_url,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"main\",\n                                    \"data-img-url\": data && data.image_url,\n                                    style: {\n                                        backgroundImage: `url(${data && data.image_url})`\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text\",\n                    children: data && data.description && data.description.map((des, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: des\n                        }, i, false, {\n                            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                            lineNumber: 24,\n                            columnNumber: 73\n                        }, undefined)\n                    )\n                }, void 0, false, {\n                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"edrea_tm_button portfolio_button_container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            target: \"_blank\",\n                            rel: \"noreferrer\",\n                            href: data.demo_url,\n                            children: \"Live\"\n                        }, void 0, false, {\n                            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/stvlley/Desktop/PORTFOLIO_2023/template/edreya/src/components/popup/PortfolioModal.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortfolioModal);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wb3B1cC9Qb3J0Zm9saW9Nb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBNEI7QUFFNUIsTUFBTUMsY0FBYyxHQUFHLENBQUMsRUFBRUMsS0FBSyxHQUFFQyxJQUFJLEdBQUVDLElBQUksR0FBRSxHQUFLO0lBRWhEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLEVBQUVGLElBQUksQ0FBQztJQUM1QixxQkFDRSw4REFBQ0osOENBQUs7UUFBQ0csSUFBSSxFQUFFQSxJQUFJO1FBQUVELEtBQUssRUFBRUEsS0FBSztrQkFDN0IsNEVBQUNLLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLG9CQUFvQjs7OEJBQ2pDLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsaUJBQWlCOztzQ0FDOUIsOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQywyQkFBMkI7OzhDQUN4Qyw4REFBQ0MsSUFBRTs4Q0FBRUwsSUFBSSxJQUFJQSxJQUFJLENBQUNNLEtBQUs7Ozs7OzZDQUFNO2dDQUM1Qk4sSUFBSSxJQUFJQSxJQUFJLENBQUNPLFlBQVksSUFBSVAsSUFBSSxDQUFDTyxZQUFZLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLEVBQUVDLENBQUMsaUJBQUssOERBQUNDLE1BQUk7d0NBQUNQLFNBQVMsRUFBQyxrQkFBa0I7a0RBQVVLLElBQUksQ0FBQ0csSUFBSTt1Q0FBYkYsQ0FBQzs7OztpREFBb0I7Z0NBQUEsQ0FBQzs7Ozs7O3FDQUMzSDtzQ0FDTiw4REFBQ1AsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLFdBQVc7OzhDQUN4Qiw4REFBQ1MsS0FBRztvQ0FBQ0MsR0FBRyxFQUFFZCxJQUFJLENBQUNlLFNBQVM7b0NBQUVDLEdBQUcsRUFBQyxFQUFFOzs7Ozs2Q0FBRzs4Q0FDbkMsOERBQUNiLEtBQUc7b0NBQ0ZDLFNBQVMsRUFBQyxNQUFNO29DQUNoQmEsY0FBWSxFQUFFakIsSUFBSSxJQUFJQSxJQUFJLENBQUNlLFNBQVM7b0NBQ3BDRyxLQUFLLEVBQUU7d0NBQUVDLGVBQWUsRUFBRSxDQUFDLElBQUksRUFBRW5CLElBQUksSUFBSUEsSUFBSSxDQUFDZSxTQUFTLENBQUMsQ0FBQyxDQUFDO3FDQUFFOzs7Ozs2Q0FDNUQ7Ozs7OztxQ0FDRTs7Ozs7OzZCQUNGOzhCQUNOLDhEQUFDWixLQUFHO29CQUFDQyxTQUFTLEVBQUMsTUFBTTs4QkFDbEJKLElBQUksSUFBSUEsSUFBSSxDQUFDb0IsV0FBVyxJQUFJcEIsSUFBSSxDQUFDb0IsV0FBVyxDQUFDWixHQUFHLENBQUMsQ0FBQ2EsR0FBRyxFQUFFWCxDQUFDLGlCQUFLLDhEQUFDWSxJQUFFO3NDQUFVRCxHQUFHOzJCQUFQWCxDQUFDOzs7O3FDQUFZO29CQUFBLENBQUM7Ozs7OzZCQUNqRjs4QkFHTiw4REFBQ1AsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLEVBQUU7OEJBQ2YsNEVBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyw0Q0FBNEM7a0NBQ3pELDRFQUFDbUIsR0FBQzs0QkFDQUMsTUFBTSxFQUFDLFFBQVE7NEJBQUNDLEdBQUcsRUFBQyxZQUFZOzRCQUNoQ0MsSUFBSSxFQUFFMUIsSUFBSSxDQUFDMkIsUUFBUTtzQ0FBRyxNQUV4Qjs7Ozs7cUNBQUk7Ozs7O2lDQUNBOzs7Ozs2QkFDRjs7Ozs7O3FCQUNGOzs7OztpQkFDQSxDQUNSO0NBQ0g7QUFDRCxpRUFBZTlCLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VkcmVhYS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL3BvcHVwL1BvcnRmb2xpb01vZGFsLmpzPzgyNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsXCI7XHJcblxyXG5jb25zdCBQb3J0Zm9saW9Nb2RhbCA9ICh7IGNsb3NlLCBvcGVuLCBkYXRhIH0pID0+IHtcclxuXHJcbiAgY29uc29sZS5sb2coXCJtb2RhbDogXCIsIGRhdGEpXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbCBvcGVuPXtvcGVufSBjbG9zZT17Y2xvc2V9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfcG9wdXBfZGV0YWlsc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19tYWluX3RpdGxlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpb190aXRsZV9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgzPntkYXRhICYmIGRhdGEudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAge2RhdGEgJiYgZGF0YS50ZWNobm9sb2dpZXMgJiYgZGF0YS50ZWNobm9sb2dpZXMubWFwKCh0ZWNoLCBpKSA9PiA8c3BhbiBjbGFzc05hbWU9XCJza2lsbHNfY29udGFpbmVyXCIga2V5PXtpfT57dGVjaC5uYW1lfTwvc3Bhbj4pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcF9pbWFnZVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWFnZV91cmx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluXCJcclxuICAgICAgICAgICAgICBkYXRhLWltZy11cmw9e2RhdGEgJiYgZGF0YS5pbWFnZV91cmx9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZGF0YSAmJiBkYXRhLmltYWdlX3VybH0pYCB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmRlc2NyaXB0aW9uICYmIGRhdGEuZGVzY3JpcHRpb24ubWFwKChkZXMsIGkpID0+IDxoNCBrZXk9e2l9PntkZXN9PC9oND4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRyZWFfdG1fYnV0dG9uIHBvcnRmb2xpb19idXR0b25fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgaHJlZj17ZGF0YS5kZW1vX3VybH0gPlxyXG4gICAgICAgICAgICAgIExpdmVcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW9Nb2RhbDtcclxuIl0sIm5hbWVzIjpbIk1vZGFsIiwiUG9ydGZvbGlvTW9kYWwiLCJjbG9zZSIsIm9wZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwidGl0bGUiLCJ0ZWNobm9sb2dpZXMiLCJtYXAiLCJ0ZWNoIiwiaSIsInNwYW4iLCJuYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2VfdXJsIiwiYWx0IiwiZGF0YS1pbWctdXJsIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkZXNjcmlwdGlvbiIsImRlcyIsImg0IiwiYSIsInRhcmdldCIsInJlbCIsImhyZWYiLCJkZW1vX3VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/popup/PortfolioModal.js\n");

/***/ })

};
;