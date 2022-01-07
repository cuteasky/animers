(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 288:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"main": "Home_main__nLjiQ",
	"footer": "Home_footer____T7K",
	"title": "Home_title__T09hD",
	"description": "Home_description__41Owk",
	"code": "Home_code__suPER",
	"grid": "Home_grid__GxQ85",
	"card": "Home_card___LpL1",
	"logo": "Home_logo__27_tb"
};


/***/ }),

/***/ 304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./pages/index.js




async function getServerSideProps(ctx) {
    let search = ctx.query.search;
    if (ctx.query.search) {
        search = ctx.query.search;
    } else {
        search = 'haikyuu';
    }
    const api = await fetch('https://webraku.xyz/api/anime/kusonime?search=' + search + '&apikey=FIUkfHBi');
    const data = await api.json();
    return {
        props: {
            fApi: data
        }
    };
}
function Home({ fApi  }) {
    const res = fApi;
    const anime = res.result;
    const animelink = res.result.download;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Animers"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (Home_module_default()).main,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (Home_module_default()).title,
                        children: "Welcome to Animers"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            name: "search",
                            placeholder: "Insert name of Anime and then press Enter!",
                            className: "placeholder:text-purple-300 border-4 text-center rounded-full w-96 p-2 text-lg border-purple-600 focus:ring-pink-500 focus:ring-2 focus:outline-none"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-2xl mt-3",
                        children: anime.title_jp
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            className: "rounded-lg",
                            src: anime.thumbs,
                            width: 1000,
                            height: 536,
                            alt: anime.title
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "mt-10 text-lg",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    "Title : ",
                                    anime.title
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    "Title JP : ",
                                    anime.title_jp
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    "Genre : ",
                                    anime.genre
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    "Season : ",
                                    anime.season
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    "Producer : ",
                                    anime.producer
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    "Episode Counts : ",
                                    anime.total_episode
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    "Rating : ",
                                    anime.score
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    "Released at : ",
                                    anime.released_on
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    "Description : ",
                                    anime.description
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        className: "text-2xl mt-10",
                        children: "Download Links"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "px-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "mt-2",
                            children: animelink.map((item)=>('', /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: item.download_list.map((dw)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: dw.download_link,
                                                children: [
                                                    "Download ",
                                                    anime.title,
                                                    " ",
                                                    item.resolution,
                                                    " from",
                                                    ' ',
                                                    dw.downloader
                                                ]
                                            })
                                        }, dw.download_list)
                                    )
                                }))
                            )
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: (Home_module_default()).footer,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        "Powered by",
                        ' ',
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Home_module_default()).logo,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: "/vercel.svg",
                                alt: "Vercel Logo",
                                width: 72,
                                height: 16
                            })
                        })
                    ]
                })
            })
        ]
    }));
};


/***/ }),

/***/ 28:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 18:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(304)));
module.exports = __webpack_exports__;

})();