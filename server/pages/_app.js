(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icon-dark-mode.1380930b.svg","height":16,"width":17,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 2732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icon-light-mode.cb685803.svg","height":18,"width":18,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7829);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Images_icon_document_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(150);
/* harmony import */ var _Images_icon_dark_mode_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5318);
/* harmony import */ var _Images_icon_light_mode_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2732);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3590);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_9__]);
([_utils_api__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const CustomToggle = _emotion_styled__WEBPACK_IMPORTED_MODULE_11___default()(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Switch)({
    padding: ".1px",
    borderRadius: "500px",
    "& .Mui-checked + .MuiSwitch-track": {
        backgroundColor: "#E46643 !important"
    },
    "& .MuiSwitch-thumb": {
        backgroundColor: "white",
        width: 20,
        height: 20
    },
    "& .MuiSwitch-track": {
        backgroundColor: "white"
    }
});
const MyApp = ({ Component , pageProps: { session , ...pageProps }  })=>{
    const [leftNav, setLeftNav] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { data: viewDocs , refetch: fetchDocs  } = _utils_api__WEBPACK_IMPORTED_MODULE_2__/* .api.document.viewDocs.useQuery */ .h.document.viewDocs.useQuery();
    const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [newFile, setNewFile] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [lightMode, setLightMode] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [docId, setDocId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const [doc_name, setDoc_name] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("welcome.md");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {
        session: session,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_9__.ToastContainer, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                newestOnTop: false,
                closeOnClick: true,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true,
                theme: lightMode ? "light" : "dark"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `App ${lightMode ? "light" : "dark"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                        className: leftNav ? `left-nav` : `left-nav-disabled`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "inner-nav",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "top",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "title",
                                            children: "MY DOCUMENTS"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>{
                                                setDoc_name("NewDocument.md");
                                                setNewFile(true);
                                            },
                                            children: "+ New Document"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "recentDocs",
                                            children: viewDocs?.map((doc)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `innerDocs ${doc_name === doc.document_name && "selected"}`,
                                                    onClick: (e)=>{
                                                        setDocId(doc.id);
                                                        setLoaded(false);
                                                        setDoc_name(doc.document_name);
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            src: _Images_icon_document_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                                            width: 13,
                                                            height: 16,
                                                            alt: "doc"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "header",
                                                                    children: doc.created_At.toDateString()
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "text",
                                                                    children: doc.document_name
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, doc.id))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "bottom",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            src: _Images_icon_dark_mode_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                            height: 18,
                                            width: 18,
                                            alt: "dark"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomToggle, {
                                            checked: lightMode,
                                            onChange: (e)=>setLightMode(e.target.checked)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            src: _Images_icon_light_mode_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                            height: 18,
                                            width: 18,
                                            alt: "light"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps,
                        doc_content: "",
                        setDoc_name: setDoc_name,
                        newFile: newFile,
                        setNewFile: setNewFile,
                        leftNav: leftNav,
                        doc_name: doc_name,
                        setLeftNav: setLeftNav,
                        fetchDocs: fetchDocs,
                        setDocId: setDocId,
                        docId: docId,
                        loaded: loaded,
                        setLoaded: setLoaded
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_utils_api__WEBPACK_IMPORTED_MODULE_2__/* .api.withTRPC */ .h.withTRPC(MyApp));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 1480:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/styled");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7583:
/***/ ((module) => {

"use strict";
module.exports = require("react-ssr-prepass");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 72:
/***/ ((module) => {

"use strict";
module.exports = require("superjson");

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 272:
/***/ ((module) => {

"use strict";
module.exports = import("@trpc/client");;

/***/ }),

/***/ 9740:
/***/ ((module) => {

"use strict";
module.exports = import("@trpc/react-query");;

/***/ }),

/***/ 8794:
/***/ ((module) => {

"use strict";
module.exports = import("@trpc/react-query/shared");;

/***/ }),

/***/ 3558:
/***/ ((module) => {

"use strict";
module.exports = import("@trpc/server/shared");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,664,882], () => (__webpack_exec__(9212)));
module.exports = __webpack_exports__;

})();