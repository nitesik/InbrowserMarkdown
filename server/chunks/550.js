"use strict";
exports.id = 550;
exports.ids = [550];
exports.modules = {

/***/ 7550:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ authOptions),
/* harmony export */   "W": () => (/* binding */ getServerAuthSession)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2104);
/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _server_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5495);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_db__WEBPACK_IMPORTED_MODULE_2__]);
_server_db__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */ const authOptions = {
    callbacks: {
        session: ({ session , user  })=>({
                ...session,
                user: {
                    ...session.user,
                    id: user.id
                }
            })
    },
    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_server_db__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ ._),
    providers: []
};
/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */ const getServerAuthSession = (ctx)=>{
    return (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(ctx.req, ctx.res, authOptions);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5495:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ prisma)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6205);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_env_mjs__WEBPACK_IMPORTED_MODULE_1__]);
_env_mjs__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({
    log: _env_mjs__WEBPACK_IMPORTED_MODULE_1__/* .env.NODE_ENV */ .O.NODE_ENV === "development" ? [
        "query",
        "error",
        "warn"
    ] : [
        "error"
    ]
});
if (_env_mjs__WEBPACK_IMPORTED_MODULE_1__/* .env.NODE_ENV */ .O.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6205:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ env)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6206);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__, _t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_1__]);
([zod__WEBPACK_IMPORTED_MODULE_0__, _t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const env = (0,_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_1__.createEnv)({
    /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */ server: {
        DATABASE_URL: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().url(),
        NODE_ENV: zod__WEBPACK_IMPORTED_MODULE_0__.z["enum"]([
            "development",
            "test",
            "production"
        ]),
        NEXTAUTH_SECRET:  true ? zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1) : 0,
        NEXTAUTH_URL: zod__WEBPACK_IMPORTED_MODULE_0__.z.preprocess(// This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
        // Since NextAuth.js automatically uses the VERCEL_URL if present.
        (str)=>process.env.VERCEL_URL ?? str, // VERCEL_URL doesn't include `https` so it cant be validated as a URL
        process.env.VERCEL ? zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1) : zod__WEBPACK_IMPORTED_MODULE_0__.z.string().url())
    },
    /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */ client: {
    },
    /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */ runtimeEnv: {
        DATABASE_URL: process.env.DATABASE_URL,
        NODE_ENV: "production",
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;