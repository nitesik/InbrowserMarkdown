exports.id = 664;
exports.ids = [664];
exports.modules = {

/***/ 3740:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

"use client";
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _extends = __webpack_require__(2741);
const _interop_require_default = __webpack_require__(167);
const _interop_require_wildcard = __webpack_require__(8760);
const _object_without_properties_loose = __webpack_require__(4547);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(6689));
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2636));
const _imageblursvg = __webpack_require__(4486);
const _imageconfig = __webpack_require__(5843);
const _imageconfigcontext = __webpack_require__(744);
const _warnonce = __webpack_require__(618);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(9552));
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false};
const allImgs = new Map();
let perfObserver;
if (true) {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
function getWidths({ deviceSizes , allSizes  }, width, sizes) {
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs({ config , src , unoptimized , width , quality , sizes , loader  }) {
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths , kind  } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>`${loader({
                config,
                src,
                quality,
                width: w
            })} ${kind === "w" ? w : i + 1}${kind}`).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getInt(x) {
    if (typeof x === "number" || typeof x === "undefined") {
        return x;
    }
    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, src, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder === "blur") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current(_extends._({}, event, {
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            }));
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
function getDynamicProps(fetchPriority) {
    const [majorStr, minorStr] = _react.version.split(".");
    const major = parseInt(majorStr, 10);
    const minor = parseInt(minorStr, 10);
    if (major > 18 || major === 18 && minor >= 3) {
        // In React 18.3.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)((_param, forwardedRef)=>{
    var { imgAttributes , heightInt , widthInt , qualityInt , className , imgStyle , blurStyle , isLazy , fetchPriority , fill , placeholder , loading , srcString , config , unoptimized , loader , onLoadRef , onLoadingCompleteRef , setBlurComplete , setShowAltText , onLoad , onError  } = _param, rest = _object_without_properties_loose._(_param, [
        "imgAttributes",
        "heightInt",
        "widthInt",
        "qualityInt",
        "className",
        "imgStyle",
        "blurStyle",
        "isLazy",
        "fetchPriority",
        "fill",
        "placeholder",
        "loading",
        "srcString",
        "config",
        "unoptimized",
        "loader",
        "onLoadRef",
        "onLoadingCompleteRef",
        "setBlurComplete",
        "setShowAltText",
        "onLoad",
        "onError"
    ]);
    loading = isLazy ? "lazy" : loading;
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("img", _extends._({}, rest, getDynamicProps(fetchPriority), {
        loading: loading,
        width: widthInt,
        height: heightInt,
        decoding: "async",
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: _extends._({}, imgStyle, blurStyle)
    }, imgAttributes, {
        ref: (0, _react.useCallback)((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
            }
        }, [
            srcString,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder === "blur") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    })));
});
const Image = /*#__PURE__*/ (0, _react.forwardRef)((_param, forwardedRef)=>{
    var { src , sizes , unoptimized =false , priority =false , loading , className , quality , width , height , fill , style , onLoad , onLoadingComplete , placeholder ="empty" , blurDataURL , fetchPriority , layout , objectFit , objectPosition , lazyBoundary , lazyRoot  } = _param, all = _object_without_properties_loose._(_param, [
        "src",
        "sizes",
        "unoptimized",
        "priority",
        "loading",
        "className",
        "quality",
        "width",
        "height",
        "fill",
        "style",
        "onLoad",
        "onLoadingComplete",
        "placeholder",
        "blurDataURL",
        "fetchPriority",
        "layout",
        "objectFit",
        "objectPosition",
        "lazyBoundary",
        "lazyRoot"
    ]);
    const configContext = (0, _react.useContext)(_imageconfigcontext.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return _extends._({}, c, {
            allSizes,
            deviceSizes
        });
    }, [
        configContext
    ]);
    let rest = all;
    let loader = rest.loader || _imageloader.default;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = "__next_img_default" in loader;
    if (isDefaultLoader) {
        if (config.loader === "custom") {
            throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        var _tmp;
        _tmp = (obj)=>{
            const { config: _  } = obj, opts = _object_without_properties_loose._(obj, [
                "config"
            ]);
            return customImageLoader(opts);
        }, loader = _tmp, _tmp;
    }
    if (layout) {
        if (layout === "fill") {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: "100%",
                height: "auto"
            },
            responsive: {
                width: "100%",
                height: "auto"
            }
        };
        const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = _extends._({}, style, layoutStyle);
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = "";
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    if (priority) {
        fetchPriority = "high";
    }
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: "transparent"
    }, style);
    const blurStyle = placeholder === "blur" && blurDataURL && !blurComplete ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("data:image/svg+xml;charset=utf-8,${(0, _imageblursvg.getImageBlurSvg)({
            widthInt,
            heightInt,
            blurWidth,
            blurHeight,
            blurDataURL,
            objectFit: imgStyle.objectFit
        })}")`
    } : {};
    if (false) {}
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    let srcString = src;
    if (false) {}
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const imgElementArgs = _extends._({
        isLazy,
        imgAttributes,
        heightInt,
        widthInt,
        qualityInt,
        className,
        imgStyle,
        blurStyle,
        loading,
        config,
        fetchPriority,
        fill,
        unoptimized,
        placeholder,
        loader,
        srcString,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        setShowAltText
    }, rest);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(ImageElement, _extends._({}, imgElementArgs, {
        ref: forwardedRef
    })), priority ? // for browsers that do not support `imagesrcset`, and in those cases
    // it would likely cause the incorrect image to be preloaded.
    //
    // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
    /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", _extends._({
        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        as: "image",
        href: imgAttributes.srcSet ? undefined : imgAttributes.src,
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: rest.crossOrigin
    }, getDynamicProps(fetchPriority)))) : null);
});
const _default = Image;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image.js.map


/***/ }),

/***/ 5675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3740)


/***/ }),

/***/ 4547:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._object_without_properties_loose = _object_without_properties_loose;
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};

    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }

    return target;
}


/***/ }),

/***/ 9989:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ createTRPCNext)
/* harmony export */ });
/* unused harmony export withTRPC */
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var _trpc_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9740);
/* harmony import */ var _trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8794);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react_ssr_prepass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7583);
/* harmony import */ var _trpc_server_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3558);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _trpc_react_query__WEBPACK_IMPORTED_MODULE_1__, _trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__, _trpc_server_shared__WEBPACK_IMPORTED_MODULE_5__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _trpc_react_query__WEBPACK_IMPORTED_MODULE_1__, _trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__, _trpc_server_shared__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function transformQueryOrMutationCacheErrors(result) {
    const error = result.state.error;
    if (error instanceof Error && error.name === 'TRPCClientError') {
        const newError = {
            message: error.message,
            data: error.data,
            shape: error.shape
        };
        return {
            ...result,
            state: {
                ...result.state,
                error: newError
            }
        };
    }
    return result;
}
function withTRPC(opts) {
    const { config: getClientConfig  } = opts;
    return (AppOrPage)=>{
        const trpc = (0,_trpc_react_query__WEBPACK_IMPORTED_MODULE_1__.createReactQueryHooks)(opts);
        const WithTRPC = (props)=>{
            const [prepassProps] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>{
                if (props.trpc) {
                    return props.trpc;
                }
                const config = getClientConfig({});
                const queryClient = (0,_trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__.getQueryClient)(config);
                const trpcClient = trpc.createClient(config);
                return {
                    abortOnUnmount: config.abortOnUnmount,
                    queryClient,
                    trpcClient,
                    ssrState: opts.ssr ? 'mounting' : false,
                    ssrContext: null
                };
            });
            const { queryClient , trpcClient , ssrState , ssrContext  } = prepassProps;
            // allow normal components to be wrapped, not just app/pages
            let hydratedState;
            if (props.pageProps) {
                hydratedState = trpc.useDehydratedState(trpcClient, props.pageProps.trpcState);
            }
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3__.createElement(trpc.Provider, {
                abortOnUnmount: prepassProps.abortOnUnmount ?? false,
                client: trpcClient,
                queryClient: queryClient,
                ssrState: ssrState,
                ssrContext: ssrContext
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClientProvider, {
                client: queryClient
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.Hydrate, {
                state: hydratedState
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3__.createElement(AppOrPage, Object.assign({}, props)))));
        };
        if (AppOrPage.getInitialProps || opts.ssr) {
            WithTRPC.getInitialProps = async (appOrPageCtx)=>{
                const AppTree = appOrPageCtx.AppTree;
                // Determine if we are wrapping an App component or a Page component.
                const isApp = !!appOrPageCtx.Component;
                const ctx = isApp ? appOrPageCtx.ctx : appOrPageCtx;
                // Run the wrapped component's getInitialProps function.
                let pageProps = {};
                if (AppOrPage.getInitialProps) {
                    const originalProps = await AppOrPage.getInitialProps(appOrPageCtx);
                    const originalPageProps = isApp ? originalProps.pageProps ?? {} : originalProps;
                    pageProps = {
                        ...originalPageProps,
                        ...pageProps
                    };
                }
                const getAppTreeProps = (props)=>isApp ? {
                        pageProps: props
                    } : props;
                if (typeof window !== 'undefined' || !opts.ssr) {
                    return getAppTreeProps(pageProps);
                }
                const config = getClientConfig({
                    ctx
                });
                const trpcClient = (0,_trpc_react_query__WEBPACK_IMPORTED_MODULE_1__.createTRPCClient)(config);
                const queryClient = (0,_trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__.getQueryClient)(config);
                const trpcProp = {
                    config,
                    trpcClient,
                    queryClient,
                    ssrState: 'prepass',
                    ssrContext: ctx
                };
                const prepassProps = {
                    pageProps,
                    trpc: trpcProp
                };
                // Run the prepass step on AppTree. This will run all trpc queries on the server.
                // multiple prepass ensures that we can do batching on the server
                while(true){
                    // render full tree
                    await react_ssr_prepass__WEBPACK_IMPORTED_MODULE_4__(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(AppTree, prepassProps));
                    if (!queryClient.isFetching()) {
                        break;
                    }
                    // wait until the query cache has settled it's promises
                    await new Promise((resolve)=>{
                        const unsub = queryClient.getQueryCache().subscribe((event)=>{
                            if (event?.query.getObserversCount() === 0) {
                                resolve();
                                unsub();
                            }
                        });
                    });
                }
                const dehydratedCache = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.dehydrate)(queryClient, {
                    shouldDehydrateQuery () {
                        // makes sure errors are also dehydrated
                        return true;
                    }
                });
                // since error instances can't be serialized, let's make them into `TRPCClientErrorLike`-objects
                const dehydratedCacheWithErrors = {
                    ...dehydratedCache,
                    queries: dehydratedCache.queries.map(transformQueryOrMutationCacheErrors),
                    mutations: dehydratedCache.mutations.map(transformQueryOrMutationCacheErrors)
                };
                // dehydrate query client's state and add it to the props
                pageProps.trpcState = trpcClient.runtime.combinedTransformer.output.serialize(dehydratedCacheWithErrors);
                const appTreeProps = getAppTreeProps(pageProps);
                const meta = opts.responseMeta?.({
                    ctx,
                    clientErrors: [
                        ...dehydratedCache.queries,
                        ...dehydratedCache.mutations
                    ].map((v)=>v.state.error).flatMap((err)=>err instanceof Error && err.name === 'TRPCClientError' ? [
                            err
                        ] : [])
                }) || {};
                for (const [key, value] of Object.entries(meta.headers || {})){
                    if (typeof value === 'string') {
                        ctx.res?.setHeader(key, value);
                    }
                }
                if (meta.status && ctx.res) {
                    ctx.res.statusCode = meta.status;
                }
                return appTreeProps;
            };
        }
        const displayName = AppOrPage.displayName || AppOrPage.name || 'Component';
        WithTRPC.displayName = `withTRPC(${displayName})`;
        return WithTRPC;
    };
}

/* istanbul ignore file -- @preserve */ // We're testing this through E2E-testing
function createTRPCNext(opts) {
    const hooks = (0,_trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__.createHooksInternal)(opts);
    // TODO: maybe set TSSRContext to `never` when using `WithTRPCNoSSROptions`
    const _withTRPC = withTRPC(opts);
    return (0,_trpc_server_shared__WEBPACK_IMPORTED_MODULE_5__.createFlatProxy)((key)=>{
        if (key === 'useContext') {
            return ()=>{
                const context = hooks.useContext();
                // create a stable reference of the utils context
                return (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
                    return (0,_trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__.createReactQueryUtilsProxy)(context);
                }, [
                    context
                ]);
            };
        }
        if (key === 'useQueries') {
            return hooks.useQueries;
        }
        if (key === 'withTRPC') {
            return _withTRPC;
        }
        return (0,_trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__.createReactProxyDecoration)(key, hooks);
    });
}



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;