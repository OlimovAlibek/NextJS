"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"72257225eb05\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NWMzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjcyMjU3MjI1ZWIwNVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Navbar.jsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavLink */ \"(app-pages-browser)/./src/components/NavLink.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst links = [\n    {\n        url: \"/\",\n        title: \"Home\"\n    },\n    {\n        url: \"/about\",\n        title: \"About\"\n    },\n    {\n        url: \"/portfolio\",\n        title: \"Portfolio\"\n    },\n    {\n        url: \"/contact\",\n        title: \"Contact\"\n    }\n];\nconst Navbar = ()=>{\n    _s();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const topVariants = {\n        closed: {\n            rotate: 0\n        },\n        opened: {\n            rotate: 45,\n            backgroundColor: \"rgb(255,255,255)\"\n        }\n    };\n    const centerVariants = {\n        closed: {\n            rotate: 1\n        },\n        opened: {\n            opacity: 0,\n            backgroundColor: \"rgb(255,255,255)\"\n        }\n    };\n    const bottomVariants = {\n        closed: {\n            rotate: 0\n        },\n        opened: {\n            rotate: -45,\n            backgroundColor: \"rgb(255,255,255)\"\n        }\n    };\n    const listVariants = {\n        closed: {\n            x: \"100vw\"\n        },\n        opened: {\n            x: 0\n        }\n    };\n    const listItemVariants = {\n        closed: {\n            x: -10,\n            opacity: 0\n        },\n        opened: {\n            x: 0,\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:flex gap-4 w-1/3\",\n                children: links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        link: link\n                    }, link.title, false, {\n                        fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:hidden lg:flex xl:w-1/3 xl:justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"/\",\n                    className: \"bg-black p-1 text-sm rounded-md font-semibold flex justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-white mr-1\",\n                            children: \"ALI\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"w-8 h-6 rounded bg-white text-black flex justify-center items-center\",\n                            children: \".dev\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:flex items-center gap-4 w-1/3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            src: \"/github.png\",\n                            alt: \"github\",\n                            width: 24,\n                            height: 24\n                        }, void 0, false, {\n                            fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            src: \"/facebook.png\",\n                            alt: \"github\",\n                            width: 24,\n                            height: 24\n                        }, void 0, false, {\n                            fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            src: \"/instagram.png\",\n                            alt: \"github\",\n                            width: 24,\n                            height: 24\n                        }, void 0, false, {\n                            fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                            lineNumber: 95,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            src: \"/linkedin.png\",\n                            alt: \"github\",\n                            width: 24,\n                            height: 24\n                        }, void 0, false, {\n                            fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            src: \"/pinterest.png\",\n                            alt: \"github\",\n                            width: 24,\n                            height: 24\n                        }, void 0, false, {\n                            fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-10 h-8 flex flex-col justify-between z-20 relative\",\n                        onClick: ()=>setMenuOpen(!menuOpen),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                variants: topVariants,\n                                animate: menuOpen ? \"opened\" : \"closed\",\n                                className: \"w-10 h-1 bg-blue-400 rounded origin-left\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                variants: centerVariants,\n                                animate: menuOpen ? \"opened\" : \"closed\",\n                                className: \"w-10 h-1 bg-blue-400 rounded origin-left\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                variants: bottomVariants,\n                                animate: menuOpen ? \"opened\" : \"closed\",\n                                className: \"w-10 h-1 bg-blue-400 rounded origin-left\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                                lineNumber: 109,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 13\n                    }, undefined),\n                    menuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        variants: listVariants,\n                        initial: \"closed\",\n                        animate: \"opened\",\n                        className: \"absolute top-0 left-0 bg-black w-screen h-screen text-white flex items-center justify-center flex-col gap-8 text-4xl z-10\",\n                        children: links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                variants: listItemVariants,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: link.url,\n                                    children: link.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, link.title, false, {\n                                fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                                lineNumber: 116,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                        lineNumber: 114,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pc/Desktop/Portfolio/NextJS/src/components/Navbar.jsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"K77eQVFAaxZgbvGoNWFAiCE7OTY=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV1QztBQUNWO0FBQ0U7QUFDQztBQUNPO0FBRXZDLE1BQU1NLFFBQVE7SUFDVjtRQUFDQyxLQUFLO1FBQUtDLE9BQU87SUFBTTtJQUN4QjtRQUFDRCxLQUFJO1FBQVVDLE9BQU87SUFBTztJQUM3QjtRQUFDRCxLQUFJO1FBQWNDLE9BQU87SUFBVztJQUNyQztRQUFDRCxLQUFJO1FBQVlDLE9BQU87SUFBUztDQUNwQztBQUVELE1BQU1DLFNBQVM7O0lBRVgsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1XLGNBQWM7UUFDaEJDLFFBQU87WUFDSEMsUUFBTztRQUNYO1FBQ0FDLFFBQU87WUFDSEQsUUFBTztZQUNQRSxpQkFBZ0I7UUFDcEI7SUFDSjtJQUVBLE1BQU1DLGlCQUFpQjtRQUNuQkosUUFBTztZQUNIQyxRQUFPO1FBQ1g7UUFDQUMsUUFBTztZQUNIRyxTQUFRO1lBQ1JGLGlCQUFnQjtRQUNwQjtJQUNKO0lBRUEsTUFBTUcsaUJBQWlCO1FBQ25CTixRQUFPO1lBQ0hDLFFBQU87UUFDWDtRQUNBQyxRQUFPO1lBQ0hELFFBQU8sQ0FBQztZQUNSRSxpQkFBZ0I7UUFDcEI7SUFDSjtJQUVBLE1BQU1JLGVBQWU7UUFDakJQLFFBQVE7WUFDSlEsR0FBRztRQUNQO1FBQ0FOLFFBQVE7WUFDSk0sR0FBRTtRQUNOO0lBQ0o7SUFFQSxNQUFNQyxtQkFBbUI7UUFDckJULFFBQVE7WUFDSlEsR0FBRyxDQUFDO1lBQ0pILFNBQVM7UUFDYjtRQUNBSCxRQUFRO1lBQ0pNLEdBQUU7WUFDRkgsU0FBUztRQUNiO0lBQ0o7SUFFRixxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBRVgsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNWbEIsTUFBTW1CLEdBQUcsQ0FBRUMsQ0FBQUEscUJBQ1IsOERBQUN0QixnREFBT0E7d0JBQUNzQixNQUFNQTt1QkFBV0EsS0FBS2xCLEtBQUs7Ozs7Ozs7Ozs7MEJBSzVDLDhEQUFDZTtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ3RCLGlEQUFJQTtvQkFBQ3lCLE1BQUs7b0JBQUlILFdBQVU7O3NDQUNyQiw4REFBQ0k7NEJBQUtKLFdBQVU7c0NBQWtCOzs7Ozs7c0NBQ2xDLDhEQUFDSTs0QkFBS0osV0FBVTtzQ0FBdUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkvRiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDdEIsaURBQUlBO3dCQUFDeUIsTUFBTTtrQ0FDUiw0RUFBQ3hCLGtEQUFLQTs0QkFBQzBCLEtBQUk7NEJBQWNDLEtBQUk7NEJBQVNDLE9BQU87NEJBQUlDLFFBQVE7Ozs7Ozs7Ozs7O2tDQUU3RCw4REFBQzlCLGlEQUFJQTt3QkFBQ3lCLE1BQU07a0NBQ1IsNEVBQUN4QixrREFBS0E7NEJBQUMwQixLQUFJOzRCQUFnQkMsS0FBSTs0QkFBU0MsT0FBTzs0QkFBSUMsUUFBUTs7Ozs7Ozs7Ozs7a0NBRS9ELDhEQUFDOUIsaURBQUlBO3dCQUFDeUIsTUFBTTtrQ0FDUiw0RUFBQ3hCLGtEQUFLQTs0QkFBQzBCLEtBQUk7NEJBQWlCQyxLQUFJOzRCQUFTQyxPQUFPOzRCQUFJQyxRQUFROzs7Ozs7Ozs7OztrQ0FFaEUsOERBQUM5QixpREFBSUE7d0JBQUN5QixNQUFNO2tDQUNSLDRFQUFDeEIsa0RBQUtBOzRCQUFDMEIsS0FBSTs0QkFBZ0JDLEtBQUk7NEJBQVNDLE9BQU87NEJBQUlDLFFBQVE7Ozs7Ozs7Ozs7O2tDQUUvRCw4REFBQzlCLGlEQUFJQTt3QkFBQ3lCLE1BQU07a0NBQ1IsNEVBQUN4QixrREFBS0E7NEJBQUMwQixLQUFJOzRCQUFpQkMsS0FBSTs0QkFBU0MsT0FBTzs0QkFBSUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXBFLDhEQUFDVDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNTO3dCQUFPVCxXQUFVO3dCQUF1RFUsU0FBUyxJQUFNdkIsWUFBWSxDQUFDRDs7MENBQ2pHLDhEQUFDTCxpREFBTUEsQ0FBQ2tCLEdBQUc7Z0NBQUNZLFVBQVV2QjtnQ0FBYXdCLFNBQVMxQixXQUFXLFdBQVc7Z0NBQVVjLFdBQVU7Ozs7OzswQ0FDdEYsOERBQUNuQixpREFBTUEsQ0FBQ2tCLEdBQUc7Z0NBQUNZLFVBQVVsQjtnQ0FBZ0JtQixTQUFTMUIsV0FBVyxXQUFXO2dDQUFVYyxXQUFVOzs7Ozs7MENBQ3pGLDhEQUFDbkIsaURBQU1BLENBQUNrQixHQUFHO2dDQUFDWSxVQUFVaEI7Z0NBQWdCaUIsU0FBUzFCLFdBQVcsV0FBVztnQ0FBVWMsV0FBVTs7Ozs7Ozs7Ozs7O29CQUczRmQsMEJBRUUsOERBQUNMLGlEQUFNQSxDQUFDa0IsR0FBRzt3QkFBQ1ksVUFBVWY7d0JBQWNpQixTQUFRO3dCQUFTRCxTQUFRO3dCQUFTWixXQUFVO2tDQUMzRWxCLE1BQU1tQixHQUFHLENBQUVDLENBQUFBLHFCQUNSLDhEQUFDckIsaURBQU1BLENBQUNrQixHQUFHO2dDQUFDWSxVQUFVYjswQ0FDbEIsNEVBQUNwQixpREFBSUE7b0NBQUN5QixNQUFNRCxLQUFLbkIsR0FBRzs4Q0FBR21CLEtBQUtsQixLQUFLOzs7Ozs7K0JBRFFrQixLQUFLbEIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVcvRTtHQS9HTUM7S0FBQUE7QUFpSE4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLmpzeD85MGZmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBOYXZMaW5rIGZyb20gJy4vTmF2TGluayc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgbGlua3MgPSBbXG4gICAge3VybDogJy8nLCB0aXRsZTogJ0hvbWUnfSxcbiAgICB7dXJsOicvYWJvdXQnLCB0aXRsZTogJ0Fib3V0J30sXG4gICAge3VybDonL3BvcnRmb2xpbycsIHRpdGxlOiAnUG9ydGZvbGlvJ30sXG4gICAge3VybDonL2NvbnRhY3QnLCB0aXRsZTogJ0NvbnRhY3QnfVxuXVxuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgdG9wVmFyaWFudHMgPSB7XG4gICAgICAgIGNsb3NlZDp7XG4gICAgICAgICAgICByb3RhdGU6MFxuICAgICAgICB9LFxuICAgICAgICBvcGVuZWQ6e1xuICAgICAgICAgICAgcm90YXRlOjQ1LFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlwicmdiKDI1NSwyNTUsMjU1KVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjZW50ZXJWYXJpYW50cyA9IHtcbiAgICAgICAgY2xvc2VkOntcbiAgICAgICAgICAgIHJvdGF0ZToxXG4gICAgICAgIH0sXG4gICAgICAgIG9wZW5lZDp7XG4gICAgICAgICAgICBvcGFjaXR5OjAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJyZ2IoMjU1LDI1NSwyNTUpXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJvdHRvbVZhcmlhbnRzID0ge1xuICAgICAgICBjbG9zZWQ6e1xuICAgICAgICAgICAgcm90YXRlOjBcbiAgICAgICAgfSxcbiAgICAgICAgb3BlbmVkOntcbiAgICAgICAgICAgIHJvdGF0ZTotNDUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJyZ2IoMjU1LDI1NSwyNTUpXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxpc3RWYXJpYW50cyA9IHtcbiAgICAgICAgY2xvc2VkOiB7XG4gICAgICAgICAgICB4OiBcIjEwMHZ3XCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9wZW5lZDoge1xuICAgICAgICAgICAgeDowXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsaXN0SXRlbVZhcmlhbnRzID0ge1xuICAgICAgICBjbG9zZWQ6IHtcbiAgICAgICAgICAgIHg6IC0xMCxcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSxcbiAgICAgICAgb3BlbmVkOiB7XG4gICAgICAgICAgICB4OjAsXG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH1cbiAgICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0naC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC00IHNtOnB4LTggbWQ6cHgtMTIgbGc6cHgtMjAgeGw6cHgtNDggdGV4dC14bCc+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpZGRlbiBtZDpmbGV4IGdhcC00IHctMS8zJz5cbiAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmsgPT4gKFxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGxpbms9e2xpbmt9IGtleT17bGluay50aXRsZX0vPlxuICAgICAgICAgICAgKSkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kOmhpZGRlbiBsZzpmbGV4IHhsOnctMS8zIHhsOmp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIGNsYXNzTmFtZT0nYmctYmxhY2sgcC0xIHRleHQtc20gcm91bmRlZC1tZCBmb250LXNlbWlib2xkIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtd2hpdGUgbXItMSc+QUxJPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndy04IGgtNiByb3VuZGVkIGJnLXdoaXRlIHRleHQtYmxhY2sgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPi5kZXY8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaWRkZW4gbWQ6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgdy0xLzMnPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvZ2l0aHViLnBuZ1wiIGFsdD0nZ2l0aHViJyB3aWR0aD17MjR9IGhlaWdodD17MjR9Lz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ZhY2Vib29rLnBuZ1wiIGFsdD0nZ2l0aHViJyB3aWR0aD17MjR9IGhlaWdodD17MjR9Lz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2luc3RhZ3JhbS5wbmdcIiBhbHQ9J2dpdGh1Yicgd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fS8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9saW5rZWRpbi5wbmdcIiBhbHQ9J2dpdGh1Yicgd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fS8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9waW50ZXJlc3QucG5nXCIgYWx0PSdnaXRodWInIHdpZHRoPXsyNH0gaGVpZ2h0PXsyNH0vPlxuICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6aGlkZGVuJz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3LTEwIGgtOCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiB6LTIwIHJlbGF0aXZlJyBvbkNsaWNrPXsoKSA9PiBzZXRNZW51T3BlbighbWVudU9wZW4pfT5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17dG9wVmFyaWFudHN9IGFuaW1hdGU9e21lbnVPcGVuID8gXCJvcGVuZWRcIiA6IFwiY2xvc2VkXCJ9IGNsYXNzTmFtZT0ndy0xMCBoLTEgYmctYmx1ZS00MDAgcm91bmRlZCBvcmlnaW4tbGVmdCc+PC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtjZW50ZXJWYXJpYW50c30gYW5pbWF0ZT17bWVudU9wZW4gPyBcIm9wZW5lZFwiIDogXCJjbG9zZWRcIn0gY2xhc3NOYW1lPSd3LTEwIGgtMSBiZy1ibHVlLTQwMCByb3VuZGVkIG9yaWdpbi1sZWZ0Jz48L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e2JvdHRvbVZhcmlhbnRzfSBhbmltYXRlPXttZW51T3BlbiA/IFwib3BlbmVkXCIgOiBcImNsb3NlZFwifSBjbGFzc05hbWU9J3ctMTAgaC0xIGJnLWJsdWUtNDAwIHJvdW5kZWQgb3JpZ2luLWxlZnQnPjwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICB7IG1lbnVPcGVuICYmXG5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17bGlzdFZhcmlhbnRzfSBpbml0aWFsPVwiY2xvc2VkXCIgYW5pbWF0ZT1cIm9wZW5lZFwiIGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGJnLWJsYWNrIHctc2NyZWVuIGgtc2NyZWVuIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgZ2FwLTggdGV4dC00eGwgei0xMCc+XG4gICAgICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmsgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e2xpc3RJdGVtVmFyaWFudHN9IGtleT17bGluay50aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGluay51cmx9PntsaW5rLnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgKSkpfVxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiSW1hZ2UiLCJOYXZMaW5rIiwibW90aW9uIiwibGlua3MiLCJ1cmwiLCJ0aXRsZSIsIk5hdmJhciIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJ0b3BWYXJpYW50cyIsImNsb3NlZCIsInJvdGF0ZSIsIm9wZW5lZCIsImJhY2tncm91bmRDb2xvciIsImNlbnRlclZhcmlhbnRzIiwib3BhY2l0eSIsImJvdHRvbVZhcmlhbnRzIiwibGlzdFZhcmlhbnRzIiwieCIsImxpc3RJdGVtVmFyaWFudHMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJsaW5rIiwiaHJlZiIsInNwYW4iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ2YXJpYW50cyIsImFuaW1hdGUiLCJpbml0aWFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar.jsx\n"));

/***/ })

});