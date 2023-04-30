"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/navbar/navbar.tsx + 1 modules
var navbar = __webpack_require__(683);
// EXTERNAL MODULE: ./components/navbar/layout.tsx
var layout = __webpack_require__(237);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(735);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/styles/svg.ts
var svg = __webpack_require__(86);
;// CONCATENATED MODULE: ./components/icons/CheckIcon.tsx



const CheckIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(svg/* Svg */.n, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "green",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ jsx_runtime_.jsx(svg/* Svg.Path */.n.Path, {
            css: {
                fill: "$green600"
            },
            d: "m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"
        })
    });
};

// EXTERNAL MODULE: ./components/styles/box.ts
var box = __webpack_require__(660);
;// CONCATENATED MODULE: ./components/styles/flex.ts

const Flex = (0,react_.styled)("div", {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    variants: {
        direction: {
            column: {
                flexDirection: "column"
            },
            row: {
                flexDirection: "row"
            }
        },
        justify: {
            center: {
                justifyContent: "center"
            },
            start: {
                justifyContent: "flex-start"
            },
            end: {
                justifyContent: "flex-end"
            },
            between: {
                justifyContent: "space-between"
            },
            around: {
                justifyContent: "space-around"
            }
        },
        align: {
            center: {
                alignItems: "center"
            },
            start: {
                alignItems: "flex-start"
            },
            end: {
                alignItems: "flex-end"
            },
            stretch: {
                alignItems: "stretch"
            }
        },
        wrap: {
            wrap: {
                flexWrap: "wrap"
            },
            nowrap: {
                flexWrap: "nowrap"
            }
        }
    }
});

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./components/hero/index.tsx







// Dynamically import the Typewriter component
const Typewriter = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/hero/index.tsx -> " + "typewriter-effect"
        ]
    },
    ssr: false
});
const Hero = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                css: {
                    gap: "$3",
                    px: "$6",
                    flexDirection: "column",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    "@sm": {
                        flexDirection: "row",
                        mt: "$30"
                    }
                },
                justify: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(box/* Box */.x, {
                        css: {
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "$5"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(box/* Box */.x, {
                                css: {
                                    textAlign: "center",
                                    color: "transparent"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                        h1: true,
                                        css: {
                                            display: "inline"
                                        },
                                        children: [
                                            "Introducing",
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        h1: true,
                                        css: {
                                            display: "inline",
                                            //  linearGradient: "to right, $colors$blue900, $colors$primary",
                                            linearGradient: "to right, $colors$primary, $colors$secondary",
                                            backgroundClip: "text",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent"
                                        },
                                        children: "Metro NLP"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Flex, {
                                css: {
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    css: {
                                        fontFamily: "Menlo, monospace",
                                        fontSize: "1.0rem",
                                        color: "$accents8",
                                        animation: "typing 1.5s steps(40, end), blink-caret .75s step-end infinite"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Typewriter, {
                                        options: {
                                            strings: [
                                                "Where should I move?",
                                                "Ideal travel destinations?",
                                                "Cities with positive vibes?",
                                                "Safest cities to live in?", 
                                            ],
                                            deleteSpeed: 30,
                                            autoStart: true,
                                            loop: true,
                                            delay: 40
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                                css: {
                                    gap: "$8",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                        placeholder: "Enter email address",
                                        size: "lg"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        children: "Join Newsletter"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                                wrap: "wrap",
                                css: {
                                    gap: "$8",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                                        css: {
                                            color: "$accents7",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CheckIcon, {}),
                                            " Real-time data."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                                        css: {
                                            color: "$accents7",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CheckIcon, {}),
                                            " Natural language processing + deep learning."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                                        css: {
                                            color: "$accents7",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CheckIcon, {}),
                                            " 20 cities across NA."
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(box/* Box */.x, {
                        css: {
                            "& img": {
                                width: "775px",
                                objectFit: "contain"
                            }
                        }
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                css: {
                    position: "absolute",
                    inset: "0p",
                    left: "0",
                    mt: "$10"
                }
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/trusted/index.tsx




const Trusted = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                direction: "column",
                align: "center",
                css: {
                    "pt": "$20",
                    "px": "$6",
                    "@md": {
                        px: "$64"
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        css: {
                            color: "$accents8",
                            maxWidth: "800px",
                            textAlign: "center"
                        },
                        weight: "normal",
                        size: "$lg",
                        children: "Built with:"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid.Container, {
                        gap: 6,
                        alignItems: "center",
                        justify: "center",
                        css: {
                            "width": "100%",
                            "@sm": {
                                width: "100%"
                            },
                            "&  span": {
                                whiteSpace: "pre"
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                                justify: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                                    content: "Oracle Cloud Infrastructure",
                                    placement: "top",
                                    trigger: "hover",
                                    css: {
                                        "borderRadius": "10px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Flex, {
                                        align: "center",
                                        justify: "center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo-700x394.png",
                                            height: "50"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                                justify: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                                    content: "Ubuntu VM",
                                    placement: "top",
                                    trigger: "hover",
                                    css: {
                                        "borderRadius": "10px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Flex, {
                                        align: "center",
                                        justify: "center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
                                            height: "40"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                                justify: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                                    content: "Golang",
                                    placement: "top",
                                    trigger: "hover",
                                    css: {
                                        "borderRadius": "10px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Flex, {
                                        align: "center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://upload.wikimedia.org/wikipedia/commons/archive/0/05/20191207182211%21Go_Logo_Blue.svg",
                                            height: "40"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                                justify: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                                    content: "Python",
                                    placement: "top",
                                    trigger: "hover",
                                    css: {
                                        "borderRadius": "10px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Flex, {
                                        align: "center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/320px-Python-logo-notext.svg.png",
                                            height: "50"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                                justify: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                                    content: "Hugging Face Transformers",
                                    placement: "top",
                                    trigger: "hover",
                                    css: {
                                        "borderRadius": "10px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Flex, {
                                        align: "center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
                                            height: "50"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                                justify: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                                    content: "PostgreSQL",
                                    placement: "top",
                                    trigger: "hover",
                                    css: {
                                        "borderRadius": "10px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Flex, {
                                        align: "center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/320px-Postgresql_elephant.svg.png",
                                            height: "50"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                                justify: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                                    content: "ReactJS",
                                    placement: "top",
                                    trigger: "hover",
                                    css: {
                                        "borderRadius": "10px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Flex, {
                                        align: "center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
                                            height: "50"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                                justify: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                                    content: "TypeScript",
                                    placement: "top",
                                    trigger: "hover",
                                    css: {
                                        "borderRadius": "10px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Flex, {
                                        align: "center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
                                            height: "50"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                                justify: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                                    content: "Tailwind CSS",
                                    placement: "top",
                                    trigger: "hover",
                                    css: {
                                        "borderRadius": "10px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Flex, {
                                        align: "center",
                                        justify: "center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333",
                                            height: "50"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                css: {
                    position: "absolute",
                    inset: "0p",
                    left: "0",
                    mt: "$5"
                }
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/features1/index.tsx




const Features1 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                direction: "column",
                css: {
                    "gap": "1rem",
                    "pt": "$20",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "px": "$6",
                    "@sm": {
                        justifyContent: "space-around",
                        px: "$32",
                        flexDirection: "row"
                    },
                    "@md": {
                        px: "$64"
                    }
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                        direction: "column",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                span: true,
                                css: {
                                    color: "$blue600"
                                },
                                children: "Use Cases"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                h3: true,
                                children: "Case Studies"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                span: true,
                                css: {
                                    maxWidth: "400px",
                                    color: "$accents8"
                                },
                                children: "Our algorithm efficiently extracts, refines, and analyzes sentiment from city-specific text data on Reddit, presenting the results as easy-to-grasp figures. Discover how this innovative tool tackles real-world challenges."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Flex, {
                                css: {
                                    py: "$10",
                                    gap: "$5"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                                    direction: "column",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            h4: true,
                                            weight: "medium",
                                            children: "\uD83C\uDFDD️ Travel Destinations"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            span: true,
                                            css: {
                                                maxWidth: "400px",
                                                color: "$accents8"
                                            },
                                            children: "Leverage real-time sentiment metrics to enhance comparisons between travel destinations, providing a deeper insight into each location."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Flex, {
                                css: {
                                    py: "$10",
                                    gap: "$5"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                                    direction: "column",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            h4: true,
                                            weight: "medium",
                                            children: "\uD83D\uDCCD Moving To A New Location"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            span: true,
                                            css: {
                                                maxWidth: "400px",
                                                color: "$accents8"
                                            },
                                            children: "Utilize real-time sentiment metrics to gauge which cities project the most positive vibes. Our algorithm's aggregated sentiment score empowers the public to make informed decisions about relocating."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Flex, {
                                css: {
                                    py: "$10",
                                    gap: "$5"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                                    direction: "column",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            h4: true,
                                            weight: "medium",
                                            children: "\uD83D\uDCC8 Property Investment"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            span: true,
                                            css: {
                                                maxWidth: "400px",
                                                color: "$accents8"
                                            },
                                            children: "Track and assess sentiment across different cities to identify promising locations for property investment and acquisition."
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Flex, {
                        align: "center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("video", {
                            src: "https://cdn.discordapp.com/attachments/836704195674374164/1100959525936300092/Screen_Recording_2023-04-26_at_7.17.21_PM_online-video-cutter.com.mp4",
                            autoPlay: true,
                            loop: true,
                            muted: true,
                            playsInline: true,
                            style: {
                                width: "150%",
                                maxWidth: "500px"
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                css: {
                    position: "absolute",
                    inset: "0p",
                    left: "0",
                    mt: "$5"
                }
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/icons/BoxIcon.tsx




const BoxIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(box/* Box */.x, {
        css: {
            width: "auto",
            height: "fit-content"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(svg/* Svg */.n, {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            children: /*#__PURE__*/ jsx_runtime_.jsx(svg/* Svg.Path */.n.Path, {
                css: {
                    fill: "$accents9"
                },
                d: "M21.993 7.95a.96.96 0 0 0-.029-.214c-.007-.025-.021-.049-.03-.074-.021-.057-.04-.113-.07-.165-.016-.027-.038-.049-.057-.075-.032-.045-.063-.091-.102-.13-.023-.022-.053-.04-.078-.061-.039-.032-.075-.067-.12-.094-.004-.003-.009-.003-.014-.006l-.008-.006-8.979-4.99a1.002 1.002 0 0 0-.97-.001l-9.021 4.99c-.003.003-.006.007-.011.01l-.01.004c-.035.02-.061.049-.094.073-.036.027-.074.051-.106.082-.03.031-.053.067-.079.102-.027.035-.057.066-.079.104-.026.043-.04.092-.059.139-.014.033-.032.064-.041.1a.975.975 0 0 0-.029.21c-.001.017-.007.032-.007.05V16c0 .363.197.698.515.874l8.978 4.987.001.001.002.001.02.011c.043.024.09.037.135.054.032.013.063.03.097.039a1.013 1.013 0 0 0 .506 0c.033-.009.064-.026.097-.039.045-.017.092-.029.135-.054l.02-.011.002-.001.001-.001 8.978-4.987c.316-.176.513-.511.513-.874V7.998c0-.017-.006-.031-.007-.048zm-10.021 3.922L5.058 8.005 7.82 6.477l6.834 3.905-2.682 1.49zm.048-7.719L18.941 8l-2.244 1.247-6.83-3.903 2.153-1.191zM13 19.301l.002-5.679L16 11.944V15l2-1v-3.175l2-1.119v5.705l-7 3.89z"
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/faq/index.tsx





const Faq = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                css: {
                    py: "$20",
                    gap: "$18",
                    px: "$6"
                },
                direction: "column",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                        align: "center",
                        direction: "column",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                span: true,
                                css: {
                                    color: "$blue600"
                                },
                                children: "FAQ"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                h2: true,
                                children: "Learn More"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                span: true,
                                css: {
                                    maxWidth: "700px",
                                    color: "$accents8",
                                    textAlign: "center"
                                },
                                children: "Learn more about what AI tools like Metro NLP can do for you."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                        css: {
                            "gap": "$10",
                            "@lg": {
                                px: "$64"
                            }
                        },
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                                css: {
                                    gap: "$5"
                                },
                                justify: "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(BoxIcon, {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                                        direction: "column",
                                        css: {
                                            gap: "$3"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                h3: true,
                                                children: "What is the Metro NLP project all about?"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                span: true,
                                                css: {
                                                    color: "$accents8"
                                                },
                                                children: "The Metro NLP project aims to analyze Reddit posts to gauge the sentiment of various cities using deep learning and natural language processing. This helps users make informed decisions about where to move, travel, or invest."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                                css: {
                                    gap: "$5"
                                },
                                justify: "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(BoxIcon, {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                                        direction: "column",
                                        css: {
                                            gap: "$3"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                h3: true,
                                                children: "Can this tool be used to decide where to move or travel?"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                span: true,
                                                css: {
                                                    color: "$accents8"
                                                },
                                                children: "Absolutely! The project provides valuable insights into the general vibe of different cities. However, it is important to remember that this tool should only be one part of the decision-making process. Other factors, such as personal preferences, job opportunities, cost of living, and more, should also be considered."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                                css: {
                                    gap: "$5"
                                },
                                justify: "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(BoxIcon, {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                                        direction: "column",
                                        css: {
                                            gap: "$3"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                h3: true,
                                                children: "How does the sentiment analysis work?"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                                span: true,
                                                css: {
                                                    color: "$accents8"
                                                },
                                                children: [
                                                    "The system employs advanced techniques for web scraping and text preprocessing written in the Go programming language. Subsequently, a state-of-the-art deep learning model from the Hugging Face Transformers library, the ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment",
                                                        target: "_blank",
                                                        children: "twitter-roberta-base-sentiment model"
                                                    }),
                                                    " is applied to determine sentiment. This model has been fine-tuned on large-scale social media data to accurately classify and gauge sentiment. Further, the system aggregates and presents the sentiment data in easy-to-use dashboards, enabling users to quickly analyze the sentiment of Reddit posts on any topic."
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                                css: {
                                    gap: "$5"
                                },
                                justify: "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(BoxIcon, {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                                        direction: "column",
                                        css: {
                                            gap: "$3"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                h3: true,
                                                children: "Is there a cost associated with using this tool?"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                span: true,
                                                css: {
                                                    color: "$accents8"
                                                },
                                                children: "Metro AI is completely free to use. Access to this kind of information should be available to everyone, so users are free to explore and share it with others."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                css: {
                    position: "absolute",
                    inset: "0p",
                    left: "0",
                    mt: "$5"
                }
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/CustomButton.tsx
// components/CustomButton.tsx



const CustomButton = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
        ...props,
        ref: ref
    });
});
CustomButton.displayName = "CustomButton";
/* harmony default export */ const components_CustomButton = (CustomButton);

;// CONCATENATED MODULE: external "next/client"
const client_namespaceObject = require("next/client");
;// CONCATENATED MODULE: ./components/trial/index.tsx






const Trial = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                css: {
                    py: "$15",
                    px: "$6"
                },
                justify: "center",
                direction: "column",
                align: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_CustomButton, {
                        auto: true,
                        css: {
                            gap: "$15",
                            width: "250px"
                        },
                        onPressEnd: ()=>{
                            // Redirect to the /dashboard page
                            client_namespaceObject.router.push("/dashboard");
                        },
                        children: "Start Analyzing"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        span: true,
                        css: {
                            color: "$accents8",
                            textAlign: "center",
                            paddingTop: "10px"
                        },
                        children: "View real-time quantitative sentiments for cities across North America."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                css: {
                    position: "absolute",
                    inset: "0p",
                    left: "0"
                }
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/footer/index.tsx





const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Flex, {
        css: {
            py: "$20",
            px: "$6"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(box/* Box */.x, {
            as: "footer",
            css: {
                width: "100%"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                    justify: "center",
                    wrap: "wrap",
                    align: "center",
                    css: {
                        "gap": "$10",
                        "&  ul": {
                            margin: 0
                        },
                        "@sm": {}
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                            css: {
                                gap: "$5",
                                w: "250px"
                            },
                            direction: "column",
                            align: "center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    h5: true,
                                    children: "Resources"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(box/* Box */.x, {
                                    as: "ul",
                                    css: {
                                        gap: "$5",
                                        listStyle: "none"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(box/* Box */.x, {
                                        as: "li",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://github.com/jashdubal/metro-nlp",
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                span: true,
                                                css: {
                                                    color: "$accents8"
                                                },
                                                children: "Code"
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                            css: {
                                gap: "$5",
                                w: "250px"
                            },
                            direction: "column",
                            align: "center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    h5: true,
                                    children: "Contact"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(box/* Box */.x, {
                                    as: "ul",
                                    css: {
                                        gap: "$5",
                                        listStyle: "none"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(box/* Box */.x, {
                                        as: "li",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://github.com/jashdubal/metro-nlp",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                span: true,
                                                css: {
                                                    color: "$accents8"
                                                },
                                                children: "Founder"
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(box/* Box */.x, {
                    css: {
                        "px": "$10",
                        "@md": {
                            px: "$56"
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                            css: {
                                mt: "$14",
                                display: "flex",
                                justifyContent: "center"
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flex, {
                            //   justify={'between'}
                            align: "center",
                            wrap: "wrap",
                            css: {
                                "pt": "$8",
                                "gap": "$10",
                                "justifyContent": "center",
                                "@md": {
                                    justifyContent: "space-between"
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Flex, {
                                    css: {
                                        gap: "$10"
                                    },
                                    wrap: "wrap"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Flex, {
                                    css: {
                                        gap: "$6"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Flex, {
                                    css: {
                                        gap: "$6"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        span: true,
                                        css: {
                                            color: "$accents8"
                                        },
                                        children: "Built in \uD83C\uDDE8\uD83C\uDDE6"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/index.tsx











const Home = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Metro NLP"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* Layout */.A, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(navbar/* Nav */.J, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(box/* Box */.x, {
                        as: "main",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Hero, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Trial, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Features1, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Faq, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Trusted, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ 162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,112], () => (__webpack_exec__(425)));
module.exports = __webpack_exports__;

})();