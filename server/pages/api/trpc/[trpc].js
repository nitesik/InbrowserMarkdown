"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 2104:
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 9783:
/***/ ((module) => {

module.exports = require("next-auth/providers/discord");

/***/ }),

/***/ 72:
/***/ ((module) => {

module.exports = require("superjson");

/***/ }),

/***/ 6206:
/***/ ((module) => {

module.exports = import("@t3-oss/env-nextjs");;

/***/ }),

/***/ 2937:
/***/ ((module) => {

module.exports = import("@trpc/server");;

/***/ }),

/***/ 6282:
/***/ ((module) => {

module.exports = import("@trpc/server/adapters/next");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 2148:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6282);
/* harmony import */ var _env_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6205);
/* harmony import */ var _server_api_trpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7571);
/* harmony import */ var _server_api_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5025);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__, _env_mjs__WEBPACK_IMPORTED_MODULE_1__, _server_api_trpc__WEBPACK_IMPORTED_MODULE_2__, _server_api_root__WEBPACK_IMPORTED_MODULE_3__]);
([_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__, _env_mjs__WEBPACK_IMPORTED_MODULE_1__, _server_api_trpc__WEBPACK_IMPORTED_MODULE_2__, _server_api_root__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// export API handler
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__.createNextApiHandler)({
    router: _server_api_root__WEBPACK_IMPORTED_MODULE_3__/* .appRouter */ .q,
    createContext: _server_api_trpc__WEBPACK_IMPORTED_MODULE_2__/* .createTRPCContext */ .uw,
    onError: _env_mjs__WEBPACK_IMPORTED_MODULE_1__/* .env.NODE_ENV */ .O.NODE_ENV === "development" ? ({ path , error  })=>{
        console.error(`❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`);
    } : undefined
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5025:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ appRouter)
/* harmony export */ });
/* harmony import */ var _server_api_trpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7571);
/* harmony import */ var _server_api_routers_example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(660);
/* harmony import */ var _routers_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(811);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_api_trpc__WEBPACK_IMPORTED_MODULE_0__, _server_api_routers_example__WEBPACK_IMPORTED_MODULE_1__, _routers_document__WEBPACK_IMPORTED_MODULE_2__]);
([_server_api_trpc__WEBPACK_IMPORTED_MODULE_0__, _server_api_routers_example__WEBPACK_IMPORTED_MODULE_1__, _routers_document__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */ const appRouter = (0,_server_api_trpc__WEBPACK_IMPORTED_MODULE_0__/* .createTRPCRouter */ .hA)({
    example: _server_api_routers_example__WEBPACK_IMPORTED_MODULE_1__/* .exampleRouter */ .z,
    document: _routers_document__WEBPACK_IMPORTED_MODULE_2__/* .documentRouter */ .A
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 811:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ documentRouter)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7571);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__, _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__]);
([zod__WEBPACK_IMPORTED_MODULE_0__, _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const documentRouter = (0,_server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .createTRPCRouter */ .hA)({
    createDoc: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .publicProcedure.input */ .$y.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        documentName: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
        documentContent: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    })).mutation(({ ctx , input  })=>{
        return ctx.prisma.documents.create({
            data: {
                document_name: input.documentName,
                document_content: input.documentContent
            }
        });
    }),
    viewDocs: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .publicProcedure.query */ .$y.query(({ ctx  })=>{
        return ctx.prisma.documents.findMany({
            orderBy: {
                created_At: "desc"
            }
        });
    }),
    viewSingleDoc: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .publicProcedure.input */ .$y.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        docName: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    })).query(({ ctx , input  })=>{
        return ctx.prisma.documents.findFirst({
            where: {
                document_name: input.docName
            }
        });
    }),
    updateDoc: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .publicProcedure.input */ .$y.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        docName: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
        docContent: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    })).mutation(({ ctx , input  })=>{
        return ctx.prisma.documents.update({
            where: {
                document_name: input.docName
            },
            data: {
                document_content: input.docContent
            }
        });
    }),
    deleteDoc: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .publicProcedure.input */ .$y.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        id: zod__WEBPACK_IMPORTED_MODULE_0__.z.number()
    })).mutation(({ ctx , input  })=>{
        return ctx.prisma.documents.delete({
            where: {
                id: input.id
            }
        });
    })
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 660:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ exampleRouter)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7571);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__, _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__]);
([zod__WEBPACK_IMPORTED_MODULE_0__, _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const exampleRouter = (0,_server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .createTRPCRouter */ .hA)({
    hello: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .publicProcedure.input */ .$y.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        text: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    })).query(({ input  })=>{
        return {
            greeting: `Hello ${input.text}`
        };
    }),
    getAll: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .publicProcedure.query */ .$y.query(({ ctx  })=>{
        return ctx.prisma.example.findMany();
    }),
    getSecretMessage: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .protectedProcedure.query */ .U5.query(()=>{
        return "you can now see this secret message!";
    })
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7571:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$y": () => (/* binding */ publicProcedure),
/* harmony export */   "U5": () => (/* binding */ protectedProcedure),
/* harmony export */   "hA": () => (/* binding */ createTRPCRouter),
/* harmony export */   "uw": () => (/* binding */ createTRPCContext)
/* harmony export */ });
/* harmony import */ var _server_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7550);
/* harmony import */ var _server_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5495);
/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2937);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_auth__WEBPACK_IMPORTED_MODULE_0__, _server_db__WEBPACK_IMPORTED_MODULE_1__, _trpc_server__WEBPACK_IMPORTED_MODULE_2__, zod__WEBPACK_IMPORTED_MODULE_4__]);
([_server_auth__WEBPACK_IMPORTED_MODULE_0__, _server_db__WEBPACK_IMPORTED_MODULE_1__, _trpc_server__WEBPACK_IMPORTED_MODULE_2__, zod__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context (see Part 1).
 * 2. You want to create a new middleware or type of procedure (see Part 3).
 *
 * TL;DR - This is where all the tRPC server stuff is created and plugged in. The pieces you will
 * need to use are documented accordingly near the end.
 */ /**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * These allow you to access things when processing a request, like the database, the session, etc.
 */ 

/**
 * This helper generates the "internals" for a tRPC context. If you need to use it, you can export
 * it from here.
 *
 * Examples of things you may need it for:
 * - testing, so we don't have to mock Next.js' req/res
 * - tRPC's `createSSGHelpers`, where we don't have req/res
 *
 * @see https://create.t3.gg/en/usage/trpc#-serverapitrpcts
 */ const createInnerTRPCContext = (opts)=>{
    return {
        session: opts.session,
        prisma: _server_db__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ ._
    };
};
/**
 * This is the actual context you will use in your router. It will be used to process every request
 * that goes through your tRPC endpoint.
 *
 * @see https://trpc.io/docs/context
 */ const createTRPCContext = async (opts)=>{
    const { req , res  } = opts;
    // Get the session from the server using the getServerSession wrapper function
    const session = await (0,_server_auth__WEBPACK_IMPORTED_MODULE_0__/* .getServerAuthSession */ .W)({
        req,
        res
    });
    return createInnerTRPCContext({
        session
    });
};
/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer. We also parse
 * ZodErrors so that you get typesafety on the frontend if your procedure fails due to validation
 * errors on the backend.
 */ 


const t = _trpc_server__WEBPACK_IMPORTED_MODULE_2__.initTRPC.context().create({
    transformer: (superjson__WEBPACK_IMPORTED_MODULE_3___default()),
    errorFormatter ({ shape , error  }) {
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError: error.cause instanceof zod__WEBPACK_IMPORTED_MODULE_4__.ZodError ? error.cause.flatten() : null
            }
        };
    }
});
/**
 * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
 *
 * These are the pieces you use to build your tRPC API. You should import these a lot in the
 * "/src/server/api/routers" directory.
 */ /**
 * This is how you create new routers and sub-routers in your tRPC API.
 *
 * @see https://trpc.io/docs/router
 */ const createTRPCRouter = t.router;
/**
 * Public (unauthenticated) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API. It does not
 * guarantee that a user querying is authorized, but you can still access user session data if they
 * are logged in.
 */ const publicProcedure = t.procedure;
/** Reusable middleware that enforces users are logged in before running the procedure. */ const enforceUserIsAuthed = t.middleware(({ ctx , next  })=>{
    if (!ctx.session || !ctx.session.user) {
        throw new _trpc_server__WEBPACK_IMPORTED_MODULE_2__.TRPCError({
            code: "UNAUTHORIZED"
        });
    }
    return next({
        ctx: {
            // infers the `session` as non-nullable
            session: {
                ...ctx.session,
                user: ctx.session.user
            }
        }
    });
});
/**
 * Protected (authenticated) procedure
 *
 * If you want a query or mutation to ONLY be accessible to logged in users, use this. It verifies
 * the session is valid and guarantees `ctx.session.user` is not null.
 *
 * @see https://trpc.io/docs/procedures
 */ const protectedProcedure = t.procedure.use(enforceUserIsAuthed);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [550], () => (__webpack_exec__(2148)));
module.exports = __webpack_exports__;

})();