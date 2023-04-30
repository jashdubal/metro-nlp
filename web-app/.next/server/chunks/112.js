"use strict";
exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(660);


const Layout = ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles_box__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .x, {
        css: {
            maxW: "100%",
            background: "$background"
        },
        children: children
    });


/***/ }),

/***/ 683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ Nav)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(735);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(162);
// EXTERNAL MODULE: ./components/styles/svg.ts
var svg = __webpack_require__(86);
;// CONCATENATED MODULE: ./components/icons/GithubIcon.tsx



const GithubIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(svg/* Svg */.n, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        children: /*#__PURE__*/ jsx_runtime_.jsx(svg/* Svg.Path */.n.Path, {
            css: {
                fill: "$accents9"
            },
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        })
    });
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./components/navbar/navbar.tsx







const Nav = ()=>{
    const { setTheme  } = (0,external_next_themes_.useTheme)();
    const { isDark , type  } = (0,react_.useTheme)();
    const collapseItems = [
        "Try now", 
    ];
    const router = (0,router_.useRouter)();
    const { pathname  } = router;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Navbar, {
        variant: "sticky",
        css: {
            "overflow": "hidden",
            "& .nextui-navbar-container": {
                opacity: 0.95,
                backdropFilter: "blur(70px)",
                bgBlur: "70px",
                borderBottom: "1px solid $colors$border",
                "@sm": {
                    opacity: 0.95,
                    backdropFilter: "blur(70px)",
                    bgBlur: "70px",
                    borderBottom: "1px solid $colors$border"
                }
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Brand, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "https://cdn.discordapp.com/attachments/836704195674374164/1102091549086580736/DALLE_2023-04-29_22.35.24_-_perfectly_symmetrical_abstract_logo_balanced_centered_deep_BLUE_PURPLE_colors_aesthetic_Silicon_Valley_NLP_startup_innovative_structure.png",
                        alt: "logo",
                        width: "50",
                        height: "50"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Navbar.Collapse, {
                children: [
                    collapseItems.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.CollapseItem, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                color: "inherit",
                                css: {
                                    minWidth: "100%"
                                },
                                href: "#",
                                children: item
                            })
                        }, item)),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.CollapseItem, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                            color: "inherit",
                            css: {
                                minWidth: "100%"
                            },
                            target: "_blank",
                            href: "https://github.com/jashdubal/metro-nlp",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(GithubIcon, {})
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.CollapseItem, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Switch, {
                            checked: isDark,
                            onChange: (e)=>setTheme(e.target.checked ? "dark" : "light")
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Navbar.Content, {
                children: [
                    pathname !== "/dashboard" && /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Item, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                            auto: true,
                            flat: true,
                            href: "#",
                            onPressEnd: ()=>{
                                // Go to the /dashboard page
                                window.location.href = "/dashboard";
                            },
                            children: "Try now"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Item, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                            color: "inherit",
                            css: {
                                minWidth: "100%"
                            },
                            target: "_blank",
                            href: "https://github.com/jashdubal/metro-nlp",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(GithubIcon, {})
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Item, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Switch, {
                            checked: isDark,
                            onChange: (e)=>setTheme(e.target.checked ? "dark" : "light"),
                            css: {
                                mr: "$3"
                            }
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Box)
/* harmony export */ });
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__);

const Box = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.styled)("div", {
    boxSizing: "border-box"
});


/***/ }),

/***/ 86:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ Svg)
/* harmony export */ });
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__);

const UnstyledSvg = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.styled)("svg", {});
const UnstyledPath = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.styled)("path", {});
const Svg = Object.assign(UnstyledSvg, {
    Path: UnstyledPath
});


/***/ })

};
;