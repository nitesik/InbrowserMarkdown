"use strict";
exports.id = 882;
exports.ids = [882];
exports.modules = {

/***/ 150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icon-document.9ed19b0b.svg","height":16,"width":14,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 7829:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var _trpc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(272);
/* harmony import */ var _trpc_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9989);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__]);
([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * This is the client-side entrypoint for your tRPC API. It is used to create the `api` object which
 * contains the Next.js App-wrapper, as well as your type-safe React Query hooks.
 *
 * We also create a few inference helpers for input and output types.
 */ 


const getBaseUrl = ()=>{
    if (false) {} // browser should use relative url
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
    return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};
/** A set of type-safe react-query hooks for your tRPC API. */ const api = (0,_trpc_next__WEBPACK_IMPORTED_MODULE_1__/* .createTRPCNext */ .t)({
    config () {
        return {
            /**
       * Transformer used for data de-serialization from the server.
       *
       * @see https://trpc.io/docs/data-transformers
       */ transformer: (superjson__WEBPACK_IMPORTED_MODULE_2___default()),
            /**
       * Links used to determine request flow from client to server.
       *
       * @see https://trpc.io/docs/links
       */ links: [
                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.loggerLink)({
                    enabled: (opts)=> false || opts.direction === "down" && opts.result instanceof Error
                }),
                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.httpBatchLink)({
                    url: `${getBaseUrl()}/api/trpc`
                })
            ]
        };
    },
    /**
   * Whether tRPC should await queries when server rendering pages.
   *
   * @see https://trpc.io/docs/nextjs#ssr-boolean-default-false
   */ ssr: false
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;