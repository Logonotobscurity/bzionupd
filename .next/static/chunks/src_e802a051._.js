(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/breadcrumb.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumbs",
    ()=>Breadcrumbs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const Breadcrumbs = (param)=>{
    let { items, className, lightText = true } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Breadcrumb",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center space-x-2', className),
        children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: [
                    index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", lightText ? "text-slate-400" : "text-slate-500")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/breadcrumb.tsx",
                        lineNumber: 25,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm font-medium transition-colors', index === items.length - 1 ? lightText ? 'text-white pointer-events-none' : 'text-primary pointer-events-none' : lightText ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-primary'),
                        "aria-current": index === items.length - 1 ? 'page' : undefined,
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/breadcrumb.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, "".concat(item.href, "-").concat(item.label), true, {
                fileName: "[project]/src/components/ui/breadcrumb.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/breadcrumb.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Breadcrumbs;
var _c;
__turbopack_context__.k.register(_c, "Breadcrumbs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/PageHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHero",
    ()=>PageHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/breadcrumb.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animated$2d$div$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animated-div.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function PageHero(param) {
    let { preamble, title, description, breadcrumbs, primaryCta, secondaryCta, imageUrl, stats } = param;
    const hasImage = !!imageUrl;
    const containerClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative container-constrained', {
        'grid lg:grid-cols-3 gap-12 items-center': hasImage
    });
    const textContainerClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('max-w-3xl mx-auto text-center', {
        'lg:col-span-2 lg:text-left lg:mx-0': hasImage
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "relative flex flex-col justify-center py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary to-primary/95 text-primary-foreground overflow-hidden",
        role: "banner",
        "aria-labelledby": "hero-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-grid-slate-100/[0.08] [mask-image:linear-gradient(0deg,transparent,black)]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/PageHero.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-40 -right-40 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/PageHero.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-40 -left-40 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/PageHero.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 w-72 h-72 bg-white/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-4000"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/PageHero.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/PageHero.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/PageHero.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: containerClasses,
                children: [
                    hasImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animated$2d$div$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedDiv"], {
                        className: "relative hidden lg:flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl sm:rounded-3xl blur-2xl opacity-40"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/PageHero.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 bg-gradient-to-br from-white to-slate-50 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/30 backdrop-blur-md transform hover:scale-105 transition-transform duration-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl sm:rounded-3xl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/PageHero.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: imageUrl,
                                        alt: "".concat(title, " logo"),
                                        fill: true,
                                        className: "object-contain p-4 sm:p-6 md:p-8 relative z-10",
                                        sizes: "288px",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/PageHero.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/PageHero.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/PageHero.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: textContainerClasses,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animated$2d$div$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedDiv"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-1.5 bg-gradient-to-r from-secondary via-white to-accent mb-6 rounded-full', {
                                        'mx-auto w-1/3': !hasImage,
                                        'mx-0 w-24': hasImage
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/PageHero.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/PageHero.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            breadcrumbs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Breadcrumbs"], {
                                items: breadcrumbs,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mb-6', {
                                    'justify-center': !hasImage,
                                    'justify-start': hasImage
                                }),
                                lightText: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/PageHero.tsx",
                                lineNumber: 99,
                                columnNumber: 27
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animated$2d$div$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedDiv"], {
                                children: [
                                    preamble && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs md:text-sm font-bold tracking-widest text-secondary/90 uppercase mb-4", {
                                            'text-center': !hasImage,
                                            'text-left': hasImage
                                        }),
                                        children: preamble
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/PageHero.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        id: "hero-heading",
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight", {
                                            'text-center': !hasImage,
                                            'text-left': hasImage
                                        }),
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/PageHero.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/PageHero.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animated$2d$div$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedDiv"], {
                                delay: 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm sm:text-base md:text-lg text-slate-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl text-justify', {
                                        'mx-auto px-2 sm:px-0': !hasImage,
                                        'mx-0 px-0': hasImage
                                    }),
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/PageHero.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/PageHero.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            stats && stats.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animated$2d$div$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedDiv"], {
                                delay: 0.2,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-8 sm:mb-10 px-2 sm:px-0', {
                                        'lg:text-left': hasImage
                                    }),
                                    children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 rounded-lg sm:rounded-2xl border border-white/30 group-hover:border-white/60 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-white/25 group-hover:to-white/10 backdrop-blur-md shadow-lg group-hover:shadow-2xl transform group-hover:scale-110"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/PageHero.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative z-10 p-3 sm:p-5 md:p-7",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-baseline gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",
                                                                    children: stat.value.toLocaleString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/PageHero.tsx",
                                                                    lineNumber: 141,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs md:text-sm font-bold text-secondary/70",
                                                                    children: "+"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/PageHero.tsx",
                                                                    lineNumber: 142,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/layout/PageHero.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs sm:text-sm md:text-base text-slate-100 mt-1 sm:mt-2 font-medium tracking-wide group-hover:text-white transition-colors",
                                                            children: stat.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/PageHero.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/PageHero.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-secondary to-accent group-hover:w-full transition-all duration-500 rounded-br-lg sm:rounded-br-2xl rounded-bl-lg sm:rounded-bl-2xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/PageHero.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/layout/PageHero.tsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/PageHero.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/PageHero.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animated$2d$div$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedDiv"], {
                                delay: 0.3,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col sm:flex-row gap-4 px-2 sm:px-0', {
                                        'justify-center': !hasImage,
                                        'justify-start': hasImage
                                    }),
                                    children: [
                                        primaryCta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            size: "lg",
                                            variant: "outline",
                                            className: "bg-transparent text-white border-white hover:bg-white hover:text-primary font-bold",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: primaryCta.href,
                                                children: primaryCta.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/PageHero.tsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/PageHero.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this),
                                        secondaryCta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            size: "lg",
                                            variant: "secondary",
                                            className: "font-bold",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: secondaryCta.href,
                                                children: secondaryCta.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/PageHero.tsx",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/PageHero.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/PageHero.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/PageHero.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/PageHero.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/PageHero.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/PageHero.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = PageHero;
var _c;
__turbopack_context__.k.register(_c, "PageHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cta-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTASection",
    ()=>CTASection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function CTASection(param) {
    let { title = "Still Need Help?", description = "Our team is ready to assist you. Reach out with any questions about our products, services, or how we can help grow your business.", ctaText = "Get in Touch", ctaHref = "/contact", customContent, variant = 'default', className } = param;
    const variantStyles = {
        default: 'bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20',
        minimal: 'bg-slate-50 border border-slate-200',
        dark: 'bg-gradient-to-r from-primary to-secondary text-white'
    };
    const textColor = variant === 'dark' ? 'text-white' : 'text-primary';
    const descriptionColor = variant === 'dark' ? 'text-white/90' : 'text-slate-600';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(variantStyles[variant], 'rounded-lg p-8 text-center', className),
        children: customContent ? customContent : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-2xl font-bold mb-3', textColor),
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/cta-section.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('max-w-2xl mx-auto mb-6', descriptionColor),
                    children: description
                }, void 0, false, {
                    fileName: "[project]/src/components/cta-section.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    asChild: true,
                    size: "lg",
                    variant: variant === 'dark' ? 'secondary' : 'default',
                    className: "font-semibold",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: ctaHref,
                        children: ctaText
                    }, void 0, false, {
                        fileName: "[project]/src/components/cta-section.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/cta-section.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/cta-section.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = CTASection;
var _c;
__turbopack_context__.k.register(_c, "CTASection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>Section,
    "SectionDescription",
    ()=>SectionDescription,
    "SectionHeading",
    ()=>SectionHeading,
    "SectionPreamble",
    ()=>SectionPreamble,
    "SectionTitle",
    ()=>SectionTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Section = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c = (param, ref)=>{
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('py-section-md', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-container-px",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/section.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/section.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Section;
Section.displayName = 'Section';
const SectionHeading = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c2 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-center max-w-3xl mx-auto', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/section.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c3 = SectionHeading;
SectionHeading.displayName = 'SectionHeading';
const SectionPreamble = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c4 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-base font-semibold leading-7 text-primary', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/section.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c5 = SectionPreamble;
SectionPreamble.displayName = 'SectionPreamble';
const SectionTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c6 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mt-2 font-bold tracking-tight text-foreground text-3xl sm:text-4xl md:text-5xl', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/section.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c7 = SectionTitle;
SectionTitle.displayName = 'SectionTitle';
const SectionDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c8 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/section.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c9 = SectionDescription;
SectionDescription.displayName = 'SectionDescription';
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Section$React.forwardRef");
__turbopack_context__.k.register(_c1, "Section");
__turbopack_context__.k.register(_c2, "SectionHeading$React.forwardRef");
__turbopack_context__.k.register(_c3, "SectionHeading");
__turbopack_context__.k.register(_c4, "SectionPreamble$React.forwardRef");
__turbopack_context__.k.register(_c5, "SectionPreamble");
__turbopack_context__.k.register(_c6, "SectionTitle$React.forwardRef");
__turbopack_context__.k.register(_c7, "SectionTitle");
__turbopack_context__.k.register(_c8, "SectionDescription$React.forwardRef");
__turbopack_context__.k.register(_c9, "SectionDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/fmcg-banner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FmcgBanner",
    ()=>FmcgBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/section.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const FmcgBanner = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-zinc-100 py-8 sm:py-12 md:py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-constrained grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 order-2 md:order-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-md text-left w-full px-2 sm:px-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionTitle"], {
                                className: "leading-tight text-2xl sm:text-3xl md:text-4xl",
                                children: "The Foundation of Culinary Excellence: Cooking Oils & Fats"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fmcg-banner.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base leading-relaxed",
                                children: "From high-stability frying oils to versatile vegetable oils and premium spreads, our curated selection is engineered for consistency, quality, and performance in professional kitchens."
                            }, void 0, false, {
                                fileName: "[project]/src/components/fmcg-banner.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 sm:mt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    variant: "secondary",
                                    size: "lg",
                                    className: "w-full sm:w-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/products",
                                        children: "Explore Cooking Oils"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fmcg-banner.tsx",
                                        lineNumber: 22,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fmcg-banner.tsx",
                                    lineNumber: 21,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/fmcg-banner.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fmcg-banner.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/fmcg-banner.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-[250px] sm:h-[350px] md:h-[500px] order-1 md:order-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "https://i.ibb.co/SDcHPffB/banner3.png",
                        alt: "A variety of cooking oils",
                        fill: true,
                        className: "object-cover",
                        sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw",
                        priority: false,
                        "data-ai-hint": "cooking oils"
                    }, void 0, false, {
                        fileName: "[project]/src/components/fmcg-banner.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/fmcg-banner.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/fmcg-banner.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/fmcg-banner.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FmcgBanner;
var _c;
__turbopack_context__.k.register(_c, "FmcgBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/success-notification.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SuccessNotification",
    ()=>SuccessNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const SuccessNotification = (param)=>{
    let { message, subMessage, duration = 4000, onClose, isVisible: initialVisible = false } = param;
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialVisible);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SuccessNotification.useEffect": ()=>{
            if (isVisible && duration > 0) {
                const timer = setTimeout({
                    "SuccessNotification.useEffect.timer": ()=>{
                        setIsVisible(false);
                        onClose === null || onClose === void 0 ? void 0 : onClose();
                    }
                }["SuccessNotification.useEffect.timer"], duration);
                return ({
                    "SuccessNotification.useEffect": ()=>clearTimeout(timer)
                })["SuccessNotification.useEffect"];
            }
        }
    }["SuccessNotification.useEffect"], [
        isVisible,
        duration,
        onClose
    ]);
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-9be1197ea283b877" + " " + "fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-right-4 duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "9be1197ea283b877",
                children: ".card.jsx-9be1197ea283b877{box-sizing:border-box;background-color:#fff;border-radius:8px;justify-content:space-around;align-items:center;gap:15px;width:330px;height:80px;padding:10px 15px;display:flex;position:relative;overflow:hidden;box-shadow:0 8px 24px rgba(149,157,165,.2)}.wave.jsx-9be1197ea283b877{fill:rgba(4,228,0,.227);width:80px;position:absolute;top:32px;left:-31px;transform:rotate(90deg)}.icon-container.jsx-9be1197ea283b877{background-color:rgba(4,228,0,.282);border-radius:50%;justify-content:center;align-items:center;width:35px;height:35px;margin-left:8px;display:flex}.icon.jsx-9be1197ea283b877{color:#269b24;width:17px;height:17px}.message-text-container.jsx-9be1197ea283b877{flex-direction:column;flex-grow:1;justify-content:center;align-items:flex-start;display:flex}.message-text.jsx-9be1197ea283b877,.sub-text.jsx-9be1197ea283b877{cursor:default;margin:0}.message-text.jsx-9be1197ea283b877{color:#269b24;font-size:17px;font-weight:700}.sub-text.jsx-9be1197ea283b877{color:#555;font-size:14px}.cross-icon.jsx-9be1197ea283b877{color:#555;cursor:pointer;width:18px;height:18px}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-9be1197ea283b877" + " " + "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 1440 320",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "jsx-9be1197ea283b877" + " " + "wave",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z",
                            fillOpacity: "1",
                            className: "jsx-9be1197ea283b877"
                        }, void 0, false, {
                            fileName: "[project]/src/components/success-notification.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/success-notification.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-9be1197ea283b877" + " " + "icon-container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512 512",
                            strokeWidth: "0",
                            fill: "currentColor",
                            stroke: "currentColor",
                            className: "jsx-9be1197ea283b877" + " " + "icon",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z",
                                className: "jsx-9be1197ea283b877"
                            }, void 0, false, {
                                fileName: "[project]/src/components/success-notification.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/success-notification.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/success-notification.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-9be1197ea283b877" + " " + "message-text-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-9be1197ea283b877" + " " + "message-text",
                                children: message
                            }, void 0, false, {
                                fileName: "[project]/src/components/success-notification.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            subMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-9be1197ea283b877" + " " + "sub-text",
                                children: subMessage
                            }, void 0, false, {
                                fileName: "[project]/src/components/success-notification.tsx",
                                lineNumber: 132,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/success-notification.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 15 15",
                        strokeWidth: "0",
                        fill: "currentColor",
                        stroke: "currentColor",
                        onClick: ()=>setIsVisible(false),
                        className: "jsx-9be1197ea283b877" + " " + "cross-icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
                            clipRule: "evenodd",
                            fillRule: "evenodd",
                            className: "jsx-9be1197ea283b877"
                        }, void 0, false, {
                            fileName: "[project]/src/components/success-notification.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/success-notification.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/success-notification.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/success-notification.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SuccessNotification, "CRjRfACxJNcCbPGkXfAhI47Qzoo=");
_c = SuccessNotification;
var _c;
__turbopack_context__.k.register(_c, "SuccessNotification");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/add-to-quote-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddToQuoteButton",
    ()=>AddToQuoteButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quote$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quote-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$success$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/success-notification.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const AddToQuoteButton = (param)=>{
    let { product } = param;
    _s();
    const { addProduct, items } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quote$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuoteStore"])();
    const [isAdded, setIsAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showNotification, setShowNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddToQuoteButton.useEffect": ()=>{
            const alreadyInQuote = items.some({
                "AddToQuoteButton.useEffect.alreadyInQuote": (item)=>item.id === product.id
            }["AddToQuoteButton.useEffect.alreadyInQuote"]);
            setIsAdded(alreadyInQuote);
        }
    }["AddToQuoteButton.useEffect"], [
        items,
        product.id
    ]);
    const handleAddToQuote = ()=>{
        addProduct(product, 1);
        setIsAdded(true);
        setShowNotification(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: handleAddToQuote,
                disabled: isAdded,
                className: "w-full min-h-11 h-auto py-2 text-xs sm:text-sm",
                children: isAdded ? 'Added to Quote List' : 'Add to Quote List'
            }, void 0, false, {
                fileName: "[project]/src/components/add-to-quote-button.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$success$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SuccessNotification"], {
                isVisible: showNotification,
                message: "Added to Quote",
                subMessage: "".concat(product.name, " has been added successfully"),
                duration: 4000,
                onClose: ()=>setShowNotification(false)
            }, void 0, false, {
                fileName: "[project]/src/components/add-to-quote-button.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(AddToQuoteButton, "/H/u3qKAlKd38ZqsxTFQo/FJ444=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quote$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuoteStore"]
    ];
});
_c = AddToQuoteButton;
var _c;
__turbopack_context__.k.register(_c, "AddToQuoteButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(param) {
    let { className, variant, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/placeholder-images.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"placeholderImages\":[{\"id\":\"hero\",\"description\":\"A modern warehouse with goods on shelves.\",\"imageUrl\":\"https://i.ibb.co/zh8DKv5F/b.png\",\"imageHint\":\"warehouse logistics\"},{\"id\":\"hero-2\",\"description\":\"A cargo ship with containers.\",\"imageUrl\":\"https://i.ibb.co/d02nnZV0/c.png\",\"imageHint\":\"cargo ship\"},{\"id\":\"hero-3\",\"description\":\"Supermarket aisle with shelves of products.\",\"imageUrl\":\"https://i.ibb.co/k64syFCN/f.png\",\"imageHint\":\"supermarket aisle\"},{\"id\":\"product-1\",\"description\":\"Packaged rice on a store shelf.\",\"imageUrl\":\"https://images.unsplash.com/photo-1757845301558-e8e7dd41bc64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwYWNrYWdlZCUyMHJpY2V8ZW58MHx8fHwxNzY0MTE1ODMyfDA&ixlib.rb-4.1.0&q=80&w=1080\",\"imageHint\":\"packaged rice\"},{\"id\":\"product-2\",\"description\":\"Bottles of cooking oil.\",\"imageUrl\":\"https://images.unsplash.com/photo-1720468750623-39e9a09f5067?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjb29raW5nJTIwb2lsfGVufDB8fHx8MTc2NDExNTgzMnww&ixlib.rb-4.1.0&q=80&w=1080\",\"imageHint\":\"cooking oil\"},{\"id\":\"product-3\",\"description\":\"Cans of soft drinks.\",\"imageUrl\":\"https://images.unsplash.com/photo-1700156148937-06565844f6ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjYW5uZWQlMjBkcmlua3N8ZW58MHx8fHwxNzY0MTE1ODMyfDA&ixlib.rb-4.1.0&q=80&w=1080\",\"imageHint\":\"canned drinks\"},{\"id\":\"product-4\",\"description\":\"Boxes of breakfast cereal.\",\"imageUrl\":\"https://images.unsplash.com/photo-1741521641204-e93a2f028316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjZXJlYWwlMjBib3h8ZW58MHx8fHwxNzY0MDg3Mzk4fDA&ixlib.rb-4.1.0&q=80&w=1080\",\"imageHint\":\"cereal box\"},{\"id\":\"product-5\",\"description\":\"Jars of jam and preserves.\",\"imageUrl\":\"https://images.unsplash.com/photo-1707092009843-2b5a919d17b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxqYW0lMjBqYXJzfGVufDB8fHx8MTc2NDExNTgzMnww&ixlib.rb-4.1.0&q=80&w=1080\",\"imageHint\":\"jam jars\"},{\"id\":\"product-6\",\"description\":\"Packets of instant noodles.\",\"imageUrl\":\"https://images.unsplash.com/photo-1641736495436-921e490112e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxpbnN0YW50JTIwbm9vZGxlc3xlbnwwfHx8fDE3NjQxMTU4MzJ8MA&ixlib.rb-4.1.0&q=80&w=1080\",\"imageHint\":\"instant noodles\"},{\"id\":\"about-us\",\"description\":\"A team of professionals in a meeting.\",\"imageUrl\":\"https://images.unsplash.com/photo-1616587656977-ac36a5a430bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MHx8fHwxNzY0MDQwNDI2fDA&ixlib.rb-4.1.0&q=80&w=1080\",\"imageHint\":\"business meeting\"},{\"id\":\"login-bg\",\"description\":\"Abstract geometric pattern with blue and gold colors.\",\"imageUrl\":\"https://images.unsplash.com/photo-1605106702842-01a887a31122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxhYnN0cmFjdCUyMHBhdHRlcm58ZW58MHx8fHwxNzYzOTk1MjIwfDA&ixlib.rb-4.1.0&q=80&w=1080\",\"imageHint\":\"abstract pattern\"},{\"id\":\"leadership-bg\",\"description\":\"Portrait of a business professional.\",\"imageUrl\":\"https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDB8fHx8MTc2NDExNTgzMnww&ixlib.rb-4.1.0&q=80&w=1080\",\"imageHint\":\"business portrait\"},{\"id\":\"customer-retail\",\"description\":\"A bustling supermarket with customers.\",\"imageUrl\":\"https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzdXBlcm1hcmtldHxlbnwwfHx8fDE3NjQxMTU4MzJ8MA&ixlib.rb-4.1.0&q=80&w=1080\",\"imageHint\":\"supermarket customers\"},{\"id\":\"customer-wholesalers\",\"description\":\"A large warehouse with stacks of boxes.\",\"imageUrl\":\"https://images.unsplash.com/photo-1586528116311-06924151d159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3aG9sZXNhbGUlMjB3YXJlaG91c2V8ZW58MHx8fHwxNzY0MTE1ODMyfDA&ixlib.rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wholesale warehouse\"},{\"id\":\"customer-institutions\",\"description\":\"A school cafeteria with students eating.\",\"imageUrl\":\"https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpbnN0aXR1dGlvbmFsJTIwY2FmZXRlcmlhfGVufDB8fHx8MTc2NDExNTgzMnww&ixlib.rb-4.1.0&q=80&w=1080\",\"imageHint\":\"institutional cafeteria\"},{\"id\":\"customer-events\",\"description\":\"A catered event with food platters.\",\"imageUrl\":\"https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjYXRlcmVkJTIwZXZlbnR8ZW58MHx8fHwxNzY0MjAzNDM0fDA&ixlib.rb-4.1.0&q=80&w=1080\",\"imageHint\":\"catered event\"},{\"id\":\"customer-export\",\"description\":\"A cargo ship being loaded with containers for export.\",\"imageUrl\":\"https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBsb2FkaW5nfGVufDB8fHx8MTc2NDIwMzQzNHww&ixlib.rb-4.1.0&q=80&w=1080\",\"imageHint\":\"cargo ship loading\"},{\"id\":\"customer-hospitality\",\"description\":\"A chef preparing a gourmet meal in a hotel kitchen.\",\"imageUrl\":\"https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGtpdGNoZW58ZW58MHx8fHwxNzY0MjAzNDM0fDA&ixlib.rb-4.1.0&q=80&w=1080\",\"imageHint\":\"hotel kitchen\"},{\"id\":\"bzion-story\",\"description\":\"ceomadam full headshot\",\"imageUrl\":\"https://i.ibb.co/KxCZG4qJ/ceomadam.png\",\"imageHint\":\"ceo message\"},{\"id\":\"bukola-atinsola\",\"description\":\"A professional headshot of Bukola Atinsola, the founder and CEO.\",\"imageUrl\":\"https://i.ibb.co/tMBGJwR5/CEO.png\",\"imageHint\":\"business portrait\"},{\"id\":\"bua-foods-logo\",\"description\":\"BUA Foods company logo.\",\"imageUrl\":\"https://images.unsplash.com/photo-1622465911368-72162f8da3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NjQxNjAwMzB8MA&ixlib.rb-4.1.0&q=80&w=1080\",\"imageHint\":\"company logo\"},{\"id\":\"contact-hq\",\"description\":\"BZION's modern headquarters building in Ogun State.\",\"imageUrl\":\"https://images.unsplash.com/photo-1560179707-f14e90ef3623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBwYXJrfGVufDB8fHx8MTc2NDIzODk3N3ww&ixlib.rb-4.1.0&q=80&w=1080\",\"imageHint\":\"modern office\"}]}"));}),
"[project]/src/lib/products.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":\"activa-2ltr\",\"name\":\"Activa Oil 2L\",\"images\":[\"https://i.ibb.co/67nsgy8z/activa-2ltr.png\",\"https://i.ibb.co/2rgnG84/activa-2ltrs.png\"],\"companyId\":27,\"brand\":\"Activa\"},{\"id\":\"activa-3ltr\",\"name\":\"Activa Oil 3L\",\"images\":[\"https://i.ibb.co/YByHxngk/activa-3ltrs-2.png\"],\"companyId\":27,\"brand\":\"Activa\"},{\"id\":\"activa-5ltr\",\"name\":\"Activa Oil 5L\",\"images\":[\"https://i.ibb.co/2TmQrfM/activa-5ltrs.png\"],\"companyId\":27,\"brand\":\"Activa\"},{\"id\":\"activa-25ltr\",\"name\":\"Activa Oil 25L\",\"images\":[\"https://i.ibb.co/Kj4V9LMs/activa-25l.png\",\"https://i.ibb.co/JwMBcGNm/activa-25ltrs.png\"],\"companyId\":27,\"brand\":\"Activa\"},{\"id\":\"activa-sachet-45ml\",\"name\":\"Activa Oil Sachet 45ml\",\"images\":[\"https://i.ibb.co/LD8ySSm3/activa-sachet-45ml-2.png\",\"https://i.ibb.co/whC60vkZ/activa-sachet-45ml.png\"],\"companyId\":27,\"brand\":\"Activa\"},{\"id\":\"activa-1ltr\",\"name\":\"Activa Oil 1L\",\"images\":[\"https://i.ibb.co/jPrrdnmy/activa-1lt-2.png\",\"https://i.ibb.co/wrNbxF6B/activa-1lt.png\"],\"companyId\":27,\"brand\":\"Activa\"},{\"id\":\"crown-premiumpasta\",\"name\":\"Crown Premium Pasta\",\"images\":[\"https://i.ibb.co/B2NX7dMm/Crown-premiumpasta.jpg\"],\"companyId\":24,\"brand\":\"Crown Flour Mills\"},{\"id\":\"dangote-sugar-1kg\",\"name\":\"Dangote Sugar 1kg\",\"images\":[\"https://i.ibb.co/VY07nMWV/Dangote-1kg-sugar-x10.png\"],\"brand\":\"Dangote Sugar\"},{\"id\":\"dangote-sugar-250g\",\"name\":\"Dangote Sugar 250g\",\"images\":[\"https://i.ibb.co/0jh98sP7/Dangote-250g-sugar-x40.png\"],\"brand\":\"Dangote Sugar\"},{\"id\":\"dangote-sugar-500g\",\"name\":\"Dangote Sugar 500g\",\"images\":[\"https://i.ibb.co/ccPgpV1L/Dangote-500g-sugar-x20.png\"],\"brand\":\"Dangote Sugar\"},{\"id\":\"dano-cool-cow-sachet\",\"name\":\"Dano Cool Cow Sachet\",\"images\":[\"https://i.ibb.co/ksr6PWs4/Dano-cool-cow-sachet.png\"],\"brand\":\"Dano\"},{\"id\":\"dano-cool-cow-refill-320g\",\"name\":\"Dano Cool Cow Refill 320g\",\"images\":[\"https://i.ibb.co/wFfhXJdn/Dano-Cool-Cow-Refill-Milk-Powder-320g.png\"],\"brand\":\"Dano\"},{\"id\":\"golden-penny-prime-flour-50kg\",\"name\":\"Golden Penny Prime Flour 50kg\",\"images\":[\"https://i.ibb.co/4wtcjvk6/Golden-penny-prime-flour-50kg.jpg\"],\"brand\":\"Golden Penny\"},{\"id\":\"auntie-b-spaghetti-slim\",\"name\":\"Auntie B Spaghetti Slim\",\"images\":[\"https://i.ibb.co/DDrkVs4b/Auntie-B-Spaghetti-Slim.jpg\"],\"brand\":\"Auntie B\"},{\"id\":\"golden-penny-amaizing-day-600g\",\"name\":\"Golden Penny Amaizing Day 600g\",\"images\":[\"https://i.ibb.co/s97wRMNX/Goldenpenny-AMAIZING-DAY-600-G.png\"],\"brand\":\"Golden Penny\"},{\"id\":\"auntie-b-semovita\",\"name\":\"Auntie B Semovita\",\"images\":[\"https://i.ibb.co/cc1QXFLv/Auntie-B-Semovita.jpg\"],\"brand\":\"Auntie B\"},{\"id\":\"auntie-b-spaghetti\",\"name\":\"Auntie B Spaghetti\",\"images\":[\"https://i.ibb.co/wNby9CK3/Auntie-B-Spaghetti.jpg\"],\"brand\":\"Auntie B\"},{\"id\":\"auntie-b-twist\",\"name\":\"Auntie B Twist\",\"images\":[\"https://i.ibb.co/p6VpV1Q3/Auntie-B-Twist.jpg\"],\"brand\":\"Auntie B\"},{\"id\":\"golden-penny-chicken-noodles-70g\",\"name\":\"Golden Penny Chicken Noodles 70g\",\"images\":[\"https://i.ibb.co/QjvYg14P/goldenpenny-chicken-noodles-70g.jpg\"],\"brand\":\"Golden Penny\"},{\"id\":\"golden-penny-golden-bites\",\"name\":\"Golden Penny Golden Bites\",\"images\":[\"https://i.ibb.co/5grpGxpK/Goldenpenny-golden-bites.jpg\",\"https://i.ibb.co/Q7L7YXTZ/Goldenpenny-golden-bites.png\"],\"brand\":\"Golden Penny\"},{\"id\":\"golden-penny-mayonnaise\",\"name\":\"Golden Penny Mayonnaise\",\"images\":[\"https://i.ibb.co/wrcXypzy/goldenpenny-mayonnaise.png\"],\"brand\":\"Golden Penny\"},{\"id\":\"golden-penny-noodle-goatmeat\",\"name\":\"Golden Penny Noodle Goatmeat\",\"images\":[\"https://i.ibb.co/ccKGD249/Goldenpenny-noodle-goatmeat.jpg\"],\"brand\":\"Golden Penny\"},{\"id\":\"golden-penny-noodles-jollof-chicken\",\"name\":\"Golden Penny Noodles Jollof Chicken\",\"images\":[\"https://i.ibb.co/ZzfVzB1j/Goldenpenny-noodles-jollof-chicken.jpg\"],\"brand\":\"Golden Penny\"},{\"id\":\"golden-penny-wheatmeal-goldenvita\",\"name\":\"Golden Penny Wheatmeal Goldenvita\",\"images\":[\"https://i.ibb.co/mnhsCwf/Goldenpenny-wheatmeal-goldenvita.jpg\"],\"brand\":\"Golden Penny\"},{\"id\":\"golden-penny-confectionary-flour-50kg\",\"name\":\"Golden Penny Confectionary Flour 50kg\",\"images\":[\"https://i.ibb.co/qYW7KnkJ/Golden-Penny-Confectionary-Flour-50kg.jpg\"],\"brand\":\"Golden Penny\"},{\"id\":\"golden-penny-cube-sugar\",\"name\":\"Golden Penny Cube Sugar\",\"images\":[\"https://i.ibb.co/6RSXZNwQ/Golden-Penny-Cube-Sugar.jpg\"],\"brand\":\"Golden Penny\"},{\"id\":\"golden-penny-garri\",\"name\":\"Golden Penny Garri\",\"images\":[\"https://i.ibb.co/23K3dK5c/Golden-Penny-Garri.jpg\"],\"brand\":\"Golden Penny\"},{\"id\":\"golden-penny-semovita-2kg\",\"name\":\"Golden Penny Semovita 2kg\",\"images\":[\"https://i.ibb.co/1txXstSf/Golden-Penny-Semovita-2kg.jpg\"],\"brand\":\"Golden Penny\"},{\"id\":\"golden-penny-spaghetti-500g\",\"name\":\"Golden Penny Spaghetti 500g\",\"images\":[\"https://i.ibb.co/Wv1C38Cf/Golden-Penny-Spaghetti-500g.png\"],\"brand\":\"Golden Penny\"},{\"id\":\"golden-penny-spaghettini-500g\",\"name\":\"Golden Penny Spaghettini 500g\",\"images\":[\"https://i.ibb.co/Nn3wN6Hw/Golden-Penny-Spaghettini-500g.png\"],\"brand\":\"Golden Penny\"},{\"id\":\"golden-penny-spread\",\"name\":\"Golden Penny Spread\",\"images\":[\"https://i.ibb.co/rKRn7jpJ/Golden-Penny-Spread.jpg\"],\"brand\":\"Golden Penny\"},{\"id\":\"golden-penny-twist-200g\",\"name\":\"Golden Penny Twist 200g\",\"images\":[\"https://i.ibb.co/93NdXbdn/Golden-Penny-Twist-200g.png\"],\"brand\":\"Golden Penny\"},{\"id\":\"honeywell-noodles-chicken\",\"name\":\"Honeywell Noodles Chicken\",\"images\":[\"https://i.ibb.co/Qvz6mNSc/Honeywell-Noodles-Chicken.png\",\"https://i.ibb.co/v68MNnmB/Honeywell-noodles-chicken.webp\"],\"brand\":\"Honeywell\"},{\"id\":\"honeywell-semo\",\"name\":\"Honeywell Semo\",\"images\":[\"https://i.ibb.co/SwcJFm7d/Honeywell-semo.webp\"],\"brand\":\"Honeywell\"},{\"id\":\"honeywell-slim-spaghetti\",\"name\":\"Honeywell Slim Spaghetti\",\"images\":[\"https://i.ibb.co/Mk1dRSnw/Honeywell-Slim-Spaghetti.webp\"],\"brand\":\"Honeywell\"},{\"id\":\"honeywell-spaghetti\",\"name\":\"Honeywell Spaghetti\",\"images\":[\"https://i.ibb.co/JRH99jTv/Honeywell-Spaghetti.webp\"],\"brand\":\"Honeywell\"},{\"id\":\"honeywell-cavatto\",\"name\":\"Honeywell Cavatto\",\"images\":[\"https://i.ibb.co/d02CzXLp/Honeywell-cavatto.webp\"],\"brand\":\"Honeywell\"},{\"id\":\"indomie-belleful-noodles\",\"name\":\"Indomie Belleful Noodles\",\"images\":[\"https://i.ibb.co/35pBDwmp/Indomie-Belleful-Noodles.png\"],\"brand\":\"Indomie\"},{\"id\":\"indomie-chicken-hungryman-noodles\",\"name\":\"Indomie Chicken Hungryman Noodles\",\"images\":[\"https://i.ibb.co/chtwWQzx/Indomie-Chicken-Hungryman-Noodles.png\"],\"brand\":\"Indomie\"},{\"id\":\"indomie-chicken-noodles-70g\",\"name\":\"Indomie Chicken Noodles 70g\",\"images\":[\"https://i.ibb.co/DHrY3r6D/Indomie-Chicken-Noodles-70g.png\"],\"brand\":\"Indomie\"},{\"id\":\"indomie-onion-chicken-noodles-70g\",\"name\":\"Indomie Onion Chicken Noodles 70g\",\"images\":[\"https://i.ibb.co/qq0dGGT/Indomie-Onion-Chicken-noodles-70g.png\"],\"brand\":\"Indomie\"},{\"id\":\"indomie-super-pack-noodles\",\"name\":\"Indomie Super Pack Noodles\",\"images\":[\"https://i.ibb.co/9HhJLqcy/Indomie-Super-pack-noodles.png\"],\"brand\":\"Indomie\"},{\"id\":\"irs-flour-50kg\",\"name\":\"IRS Flour 50kg\",\"images\":[\"https://i.ibb.co/3mkWJjHg/IRS-Flour-50kg.png\"],\"brand\":\"IRS\"},{\"id\":\"irs-pasta-slim\",\"name\":\"IRS Pasta Slim\",\"images\":[\"https://i.ibb.co/Q3DnxFHc/IRS-Pasta-Slim.png\"],\"brand\":\"IRS\"},{\"id\":\"irs-slim-spaghetti\",\"name\":\"IRS Slim Spaghetti\",\"images\":[\"https://i.ibb.co/qL23c1xZ/IRS-Slim-Spaghetti.png\"],\"brand\":\"IRS\"},{\"id\":\"kings-oil\",\"name\":\"Kings Oil\",\"images\":[\"https://i.ibb.co/8D3pxNrd/kings-oil.webp\",\"https://i.ibb.co/hR8r3hsm/kings-oil.webp\",\"https://i.ibb.co/d4vW2KL3/kings-oil1-2.webp\",\"https://i.ibb.co/yFyVnQ3R/kings1-3-jpg.webp\"],\"companyId\":27,\"brand\":\"Kings\"},{\"id\":\"laziz-chocolate-drink\",\"name\":\"Laziz Chocolate Drink\",\"images\":[\"https://i.ibb.co/nqS8nkXc/Laziz-Chocolate-Drink.jpg\"],\"companyId\":24,\"brand\":\"Laziz\"},{\"id\":\"mamador-oil\",\"name\":\"Mamador Oil\",\"images\":[\"https://i.ibb.co/VY7f7rk9/mamador-oil.png\"],\"companyId\":27,\"brand\":\"Mamador\"},{\"id\":\"mamador-seasoning-chickencube\",\"name\":\"Mamador Seasoning Chickencube\",\"images\":[\"https://i.ibb.co/yFvPgrxZ/mamador-seasoning-chickencube-2.png\",\"https://i.ibb.co/1tgXWP3r/mamador-seasoning-chickencube.png\"],\"companyId\":27,\"brand\":\"Mamador\"},{\"id\":\"mamador-spread\",\"name\":\"Mamador Spread\",\"images\":[\"https://i.ibb.co/1GbP1Bg4/mamador-spread.png\"],\"companyId\":27,\"brand\":\"Mamador\"},{\"id\":\"mama-gold-flour-50kg\",\"name\":\"Mama Gold Flour 50kg\",\"images\":[\"https://i.ibb.co/PZ9gxtMB/Mama-Gold-Flour-50kg.webp\"],\"brand\":\"Mamagold\"},{\"id\":\"mimee-noodles\",\"name\":\"Mimee Noodles\",\"images\":[\"https://i.ibb.co/60jkmq0r/MIMEE-NOODLES.png\"],\"brand\":\"Mimee\"},{\"id\":\"minimie-chinchin-sachet\",\"name\":\"Minimie Chinchin Sachet\",\"images\":[\"https://i.ibb.co/zWzSGztZ/Minimie-Chinchin-Sachet.png\"],\"brand\":\"Minimie\"},{\"id\":\"mrchef-salt-500g\",\"name\":\"MrChef Salt 500g\",\"images\":[\"https://i.ibb.co/Gf8Vd2mf/mrchef-salt-500g.png\"],\"brand\":\"Mr Chef\"},{\"id\":\"power-oil-1.5l\",\"name\":\"Power Oil 1.5L\",\"images\":[\"https://i.ibb.co/B2BcXLkv/power-oil-1-5-L.png\"],\"companyId\":27,\"brand\":\"Power Oil\"},{\"id\":\"power-oil-2.6l\",\"name\":\"Power Oil 2.6L\",\"images\":[\"https://i.ibb.co/X1xCnQY/power-oil-2-6-L.png\"],\"companyId\":27,\"brand\":\"Power Oil\"},{\"id\":\"power-oil-75cl\",\"name\":\"Power Oil 75cl\",\"images\":[\"https://i.ibb.co/KkYY49Q/power-oil-75cl.png\"],\"companyId\":27,\"brand\":\"Power Oil\"},{\"id\":\"power-oil-150ml\",\"name\":\"Power Oil 150ml\",\"images\":[\"https.i.ibb.co/Dsw1VLb/power-oil-150ml.png\",\"https://i.ibb.co/LXykxK5t/poweroil-150ml-1.png\"],\"companyId\":27,\"brand\":\"Power Oil\"},{\"id\":\"sonia-210g-tomato\",\"name\":\"Sonia 210g Tomato\",\"images\":[\"https://i.ibb.co/jZ4cWQ6V/Sonia-210g-tomato.jpg\"],\"brand\":\"Sonia\"},{\"id\":\"sonia-tomato-2.2\",\"name\":\"Sonia Tomato 2.2\",\"images\":[\"https://i.ibb.co/21YmbQSc/Sonia-tomato-2-2.jpg\"],\"brand\":\"Sonia\"},{\"id\":\"sonia-tomato-400g\",\"name\":\"Sonia Tomato 400g\",\"images\":[\"https://i.ibb.co/wNZRzWsK/Sonia-tomato-400g.jpg\"],\"brand\":\"Sonia\"},{\"id\":\"sonia-70g-tomato-sachet\",\"name\":\"Sonia 70g Tomato Sachet\",\"images\":[\"https://i.ibb.co/j9kyLGch/Sonia-70g-tomato-Sachet.jpg\"],\"brand\":\"Sonia\"},{\"id\":\"terra-beef-1cube\",\"name\":\"Terra Beef 1 Cube\",\"images\":[\"https://i.ibb.co/fYSwD5Fq/Terra-beef-1cube.webp\"],\"companyId\":26,\"brand\":\"Terra\"},{\"id\":\"terra-chicken-seasoning-1cube\",\"name\":\"Terra Chicken Seasoning 1 Cube\",\"images\":[\"https://i.ibb.co/Ps6zN7jp/Terra-chicken-seasoning-1cube.webp\"],\"companyId\":26,\"brand\":\"Terra\"},{\"id\":\"terra-gold-seasoning-1cube\",\"name\":\"Terra Gold Seasoning 1 Cube\",\"images\":[\"https://i.ibb.co/KjzBgT4g/Terra-Gold-Seasoning-1cube.webp\"],\"companyId\":26,\"brand\":\"Terra\"},{\"id\":\"terra-oil-1.4l\",\"name\":\"Terra Oil 1.4L\",\"images\":[\"https://i.ibb.co/8LMKBtJ4/Terra-oil-1-4-L.png\"],\"companyId\":26,\"brand\":\"Terra\"},{\"id\":\"terra-oil-2.5l\",\"name\":\"Terra Oil 2.5L\",\"images\":[\"https://i.ibb.co/nMzz084d/terra-oil-2-5-L.png\"],\"companyId\":26,\"brand\":\"Terra\"},{\"id\":\"terra-oil-25l\",\"name\":\"Terra Oil 25L\",\"images\":[\"https://i.ibb.co/7dcZWvkr/terra-oil-25-L.png\",\"https://i.ibb.co/VYC7kQ7j/terra-oil-25-Ltr.png\"],\"companyId\":26,\"brand\":\"Terra\"},{\"id\":\"terra-oil-45ml\",\"name\":\"Terra Oil 45ml\",\"images\":[\"https://i.ibb.co/21QyKb9h/Terra-oil-45ml.png\"],\"companyId\":26,\"brand\":\"Terra\"},{\"id\":\"terra-oil-700ml\",\"name\":\"Terra Oil 700ml\",\"images\":[\"https://i.ibb.co/C559NLC7/Terra-oil-700ml.png\"],\"companyId\":26,\"brand\":\"Terra\"},{\"id\":\"terra-shrimp-seasoning-1cube\",\"name\":\"Terra Shrimp Seasoning 1 Cube\",\"images\":[\"https://i.ibb.co/B2hQFVSp/Terra-shrimp-seasoning-1cube.webp\"],\"companyId\":26,\"brand\":\"Terra\"},{\"id\":\"terra-beef-saver-pack\",\"name\":\"Terra Beef Saver Pack\",\"images\":[\"https://i.ibb.co/RGSKzN89/Terra-Beef-Saver-Pack.png\"],\"companyId\":26,\"brand\":\"Terra\"},{\"id\":\"terra-chicken-super-saver-pack\",\"name\":\"Terra Chicken Super Saver Pack\",\"images\":[\"https://i.ibb.co/wts1vYN/Terra-Chicken-Super-Saver-Pack.png\"],\"companyId\":26,\"brand\":\"Terra\"},{\"id\":\"terra-gold-20-cubes\",\"name\":\"Terra Gold 20 Cubes\",\"images\":[\"https://i.ibb.co/Cs1sC5Q4/Terra-Gold-20-cubes.png\"],\"companyId\":26,\"brand\":\"Terra\"},{\"id\":\"terra-gold-100cubes-seasoning\",\"name\":\"Terra Gold 100 Cubes Seasoning\",\"images\":[\"https://i.ibb.co/FbYB9pVg/Terra-Gold-100cubes-Seasoning.png\"],\"companyId\":26,\"brand\":\"Terra\"},{\"id\":\"terra-saver-pack\",\"name\":\"Terra Saver Pack\",\"images\":[\"https://i.ibb.co/PZvWJWzV/Terra-Saver-Pack.png\"],\"companyId\":26,\"brand\":\"Terra\"},{\"id\":\"terra-shrimp-seasoning-24-cubes\",\"name\":\"Terra Shrimp Seasoning 24 Cubes\",\"images\":[\"https://i.ibb.co/TxZFVn9n/Terra-Shrimp-Seasoning-24-cubes.webp\"],\"companyId\":26,\"brand\":\"Terra\"},{\"id\":\"vitali-margerine\",\"name\":\"Vitali Margerine\",\"images\":[\"https://i.ibb.co/67VdJ4dF/vitali-margerine.png\"],\"companyId\":24,\"brand\":\"Vitali\"},{\"id\":\"whippy-mayonnaise\",\"name\":\"Whippy Mayonnaise\",\"images\":[\"https://i.ibb.co/DgVcVN31/whippy-mayonnaise.png\"],\"companyId\":27,\"brand\":\"Whippy\"}]"));}),
"[project]/src/lib/placeholder-images.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlaceHolderImages",
    ()=>PlaceHolderImages,
    "findImage",
    ()=>findImage,
    "getProductImages",
    ()=>getProductImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/products.json (json)");
;
;
const PlaceHolderImages = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__["default"].placeholderImages;
function findImage(id) {
    const image = PlaceHolderImages.find((img)=>img.id === id);
    if (!image) {
        // Return a default/fallback image if not found
        return {
            id: 'fallback',
            description: 'Placeholder Image',
            imageUrl: 'https://picsum.photos/seed/fallback/800/600',
            imageHint: 'placeholder'
        };
    }
    return image;
}
function getProductImages(slug) {
    if (!slug) return [];
    const slugPrefix = slug.split('-')[0];
    const imageInfo = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$json__$28$json$29$__["default"].products.find((p)=>p.id.startsWith(slugPrefix));
    return imageInfo ? imageInfo.images : [];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/product-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$add$2d$to$2d$quote$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/add-to-quote-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
'use client';
;
;
;
;
;
;
;
;
const cardStyles = {
    container: "group h-full flex flex-col overflow-hidden rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 relative bg-white border border-slate-200/50 will-change-transform",
    imageContainer: "relative bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100 overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:from-slate-100 group-hover:to-slate-200",
    imageWrapper: "relative w-full h-full flex items-center justify-center",
    image: "object-contain transition-transform duration-500 group-hover:scale-110",
    contentWrapper: "flex-grow flex flex-col gap-2.5 p-3 sm:p-4 md:p-3.5",
    brand: "text-xs font-semibold text-secondary/80 uppercase tracking-widest truncate",
    title: "font-bold text-primary text-sm sm:text-base leading-snug line-clamp-2 break-words group-hover:text-primary/90 transition-colors duration-200",
    description: "text-xs text-slate-500 line-clamp-1 mt-0.5",
    badgeContainer: "flex gap-1.5 flex-wrap mt-2",
    badge: "inline-flex items-center gap-1",
    buttonWrapper: "px-3 sm:px-4 pb-3 sm:pb-4 pt-2 transition-opacity duration-200 group-hover:opacity-100",
    overlayGradient: "absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
};
const variantStyles = {
    default: {
        imageContainerHeight: "h-[160px] sm:h-[200px] md:h-[220px]"
    },
    compact: {
        imageContainerHeight: "h-[120px] sm:h-[140px] md:h-[160px]"
    },
    featured: {
        imageContainerHeight: "h-[240px] sm:h-[280px] md:h-[320px]"
    }
};
const ProductCard = (param)=>{
    let { product, priority = false, variant = 'default' } = param;
    const href = product.slug ? "/products/".concat(product.slug) : '#';
    const fallbackImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findImage"])('fallback');
    const currentVariant = variantStyles[variant];
    const getProductImage = ()=>{
        if (product.imageUrl && product.imageUrl !== '/images/placeholder.jpg') {
            return product.imageUrl;
        }
        if (Array.isArray(product.images) && product.images.length > 0) {
            return product.images[0];
        }
        return fallbackImage.imageUrl;
    };
    const imageUrl = getProductImage();
    const isFeatured = product.isFeatured;
    const isNew = product.createdAt && new Date(product.createdAt).getTime() > Date.now() - 30 * 24 * 60 * 60 * 1000;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl sm:rounded-2xl transition-all",
        "aria-label": "View ".concat(product.name, " by ").concat(product.brand),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: cardStyles.container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "".concat(cardStyles.imageContainer, " ").concat(currentVariant.imageContainerHeight),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: cardStyles.imageWrapper,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: imageUrl,
                                alt: product.name,
                                fill: true,
                                className: cardStyles.image,
                                sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
                                priority: priority,
                                quality: 80,
                                loading: priority ? 'eager' : 'lazy',
                                onError: (e)=>{
                                    const target = e.target;
                                    target.src = fallbackImage.imageUrl;
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/product-card.tsx",
                                lineNumber: 79,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/product-card.tsx",
                            lineNumber: 78,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: cardStyles.overlayGradient
                        }, void 0, false, {
                            fileName: "[project]/src/components/product-card.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        (isFeatured || isNew) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-2.5 right-2.5 flex flex-col gap-1.5 z-10",
                            children: [
                                isFeatured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    className: "".concat(cardStyles.badge, " bg-amber-50 text-amber-700 border border-amber-200 rounded-full shadow-sm hover:shadow-md transition-shadow"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "h-3 w-3 fill-amber-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/product-card.tsx",
                                            lineNumber: 100,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold",
                                            children: "Featured"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/product-card.tsx",
                                            lineNumber: 101,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/product-card.tsx",
                                    lineNumber: 99,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                isNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    className: "".concat(cardStyles.badge, " bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full shadow-sm hover:shadow-md transition-shadow"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            className: "h-3 w-3 fill-emerald-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/product-card.tsx",
                                            lineNumber: 106,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold",
                                            children: "New"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/product-card.tsx",
                                            lineNumber: 107,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/product-card.tsx",
                                    lineNumber: 105,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/product-card.tsx",
                            lineNumber: 97,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/product-card.tsx",
                    lineNumber: 77,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: cardStyles.contentWrapper,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: cardStyles.brand,
                                    children: product.brand
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product-card.tsx",
                                    lineNumber: 116,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: cardStyles.title,
                                    children: product.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product-card.tsx",
                                    lineNumber: 117,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/product-card.tsx",
                            lineNumber: 115,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        product.categorySlug && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: cardStyles.badgeContainer,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "outline",
                                className: "text-xs rounded-full border-slate-300 text-slate-600 bg-slate-50/50 hover:bg-slate-100 transition-colors",
                                children: product.categorySlug
                            }, void 0, false, {
                                fileName: "[project]/src/components/product-card.tsx",
                                lineNumber: 122,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/product-card.tsx",
                            lineNumber: 121,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/product-card.tsx",
                    lineNumber: 114,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: cardStyles.buttonWrapper,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$add$2d$to$2d$quote$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddToQuoteButton"], {
                        product: product
                    }, void 0, false, {
                        fileName: "[project]/src/components/product-card.tsx",
                        lineNumber: 130,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/product-card.tsx",
                    lineNumber: 129,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/product-card.tsx",
            lineNumber: 75,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/product-card.tsx",
        lineNumber: 70,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/brand-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandCard",
    ()=>BrandCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
;
;
;
;
function BrandCard(param) {
    let { brand, productCount, categoryCount } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/products/brand/".concat(brand.slug),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "group block overflow-hidden rounded-lg border border-slate-200 hover:border-primary transition-colors duration-200 h-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-24 sm:h-28 md:h-32 bg-white group-hover:bg-primary/5 flex-grow flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: brand.imageUrl || '/images/placeholder.jpg',
                        alt: "".concat(brand.name, " logo"),
                        fill: true,
                        className: "object-contain p-2 sm:p-3 md:p-4",
                        sizes: "(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 15vw"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/brand-card.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/brand-card.tsx",
                    lineNumber: 23,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2 sm:p-2.5 md:p-3 border-t bg-slate-50/70 group-hover:bg-primary/5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xs sm:text-sm font-semibold text-slate-800 text-center truncate",
                            children: brand.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/brand-card.tsx",
                            lineNumber: 33,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-slate-500 text-center mt-0.5 sm:mt-1 line-clamp-2",
                            children: [
                                productCount,
                                " products"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/brand-card.tsx",
                            lineNumber: 34,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/brand-card.tsx",
                    lineNumber: 32,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/brand-card.tsx",
            lineNumber: 22,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/brand-card.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = BrandCard;
var _c;
__turbopack_context__.k.register(_c, "BrandCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/category-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryCard",
    ()=>CategoryCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
;
;
;
;
;
const CategoryCard = (param)=>{
    let { category, productCount, brandCount } = param;
    const imageUrl = category.imageUrl || "https://picsum.photos/seed/".concat(category.slug, "/400/400");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/products/category/".concat(category.slug),
        className: "group block h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 bg-white border-slate-200 hover:border-primary h-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "p-0 flex-grow flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative aspect-square w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: imageUrl,
                                alt: "Image for ".concat(category.name),
                                fill: true,
                                className: "object-cover transition-transform duration-300 group-hover:scale-105",
                                sizes: "(max-width: 768px) 50vw, 33vw",
                                "data-ai-hint": "product category"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/category-card.tsx",
                                lineNumber: 21,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/category-card.tsx",
                                lineNumber: 29,
                                columnNumber: 22
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/category-card.tsx",
                        lineNumber: 20,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/category-card.tsx",
                    lineNumber: 19,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-2 sm:p-3 md:p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-medium text-xs sm:text-sm text-slate-800 group-hover:text-primary transition-colors duration-300 line-clamp-2",
                                    children: category.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/category-card.tsx",
                                    lineNumber: 34,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/category-card.tsx",
                                    lineNumber: 37,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/category-card.tsx",
                            lineNumber: 33,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-500 mt-0.5 sm:mt-1 line-clamp-1",
                            children: [
                                productCount,
                                " products"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/category-card.tsx",
                            lineNumber: 39,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/category-card.tsx",
                    lineNumber: 32,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/category-card.tsx",
            lineNumber: 18,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/category-card.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CategoryCard;
var _c;
__turbopack_context__.k.register(_c, "CategoryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/pagination.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pagination",
    ()=>Pagination,
    "PaginationContent",
    ()=>PaginationContent,
    "PaginationEllipsis",
    ()=>PaginationEllipsis,
    "PaginationItem",
    ()=>PaginationItem,
    "PaginationLink",
    ()=>PaginationLink,
    "PaginationNext",
    ()=>PaginationNext,
    "PaginationPrevious",
    ()=>PaginationPrevious
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
;
;
const Pagination = (param)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        role: "navigation",
        "aria-label": "pagination",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-auto flex w-full justify-center", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/pagination.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Pagination;
Pagination.displayName = "Pagination";
const PaginationContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-row items-center gap-1 md:gap-2 flex-wrap justify-center", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/pagination.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c2 = PaginationContent;
PaginationContent.displayName = "PaginationContent";
const PaginationItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c3 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/pagination.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c4 = PaginationItem;
PaginationItem.displayName = "PaginationItem";
const PaginationLink = (param)=>{
    let { className, isActive, size = "icon", ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        "aria-current": isActive ? "page" : undefined,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: isActive ? "outline" : "ghost",
            size: size === "icon" ? "sm" : size
        }), "min-h-10 w-10 md:min-h-auto md:w-auto md:h-auto", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/pagination.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c5 = PaginationLink;
PaginationLink.displayName = "PaginationLink";
const PaginationPrevious = (param)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaginationLink, {
        "aria-label": "Go to previous page",
        size: "sm",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("gap-1 pl-1 min-h-10 md:pl-2.5 md:size-default", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                className: "h-4 w-4 md:h-5 md:w-5"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/pagination.tsx",
                lineNumber: 74,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "hidden md:inline",
                children: "Previous"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/pagination.tsx",
                lineNumber: 75,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/pagination.tsx",
        lineNumber: 68,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c6 = PaginationPrevious;
PaginationPrevious.displayName = "PaginationPrevious";
const PaginationNext = (param)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaginationLink, {
        "aria-label": "Go to next page",
        size: "sm",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("gap-1 pr-1 min-h-10 md:pr-2.5 md:size-default", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "hidden md:inline",
                children: "Next"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/pagination.tsx",
                lineNumber: 90,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: "h-4 w-4 md:h-5 md:w-5"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/pagination.tsx",
                lineNumber: 91,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/pagination.tsx",
        lineNumber: 84,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c7 = PaginationNext;
PaginationNext.displayName = "PaginationNext";
const PaginationEllipsis = (param)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "aria-hidden": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-h-10 w-10 md:min-h-11 md:w-11 items-center justify-center", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                className: "h-4 w-4 md:h-5 md:w-5"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/pagination.tsx",
                lineNumber: 105,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "More pages"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/pagination.tsx",
                lineNumber: 106,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/pagination.tsx",
        lineNumber: 100,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c8 = PaginationEllipsis;
PaginationEllipsis.displayName = "PaginationEllipsis";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "Pagination");
__turbopack_context__.k.register(_c1, "PaginationContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "PaginationContent");
__turbopack_context__.k.register(_c3, "PaginationItem$React.forwardRef");
__turbopack_context__.k.register(_c4, "PaginationItem");
__turbopack_context__.k.register(_c5, "PaginationLink");
__turbopack_context__.k.register(_c6, "PaginationPrevious");
__turbopack_context__.k.register(_c7, "PaginationNext");
__turbopack_context__.k.register(_c8, "PaginationEllipsis");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/products-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$productService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/productService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$brand$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/brand-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$category$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/category-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/pagination.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const PRODUCTS_PER_PAGE = 12;
function ProductsView(param) {
    let { title = 'All Products' } = param;
    _s();
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [allProducts, setAllProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [brandStats, setBrandStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [categoryStats, setCategoryStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [brands, setBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsView.useEffect": ()=>{
            const fetchData = {
                "ProductsView.useEffect.fetchData": async ()=>{
                    const [products, brandStats, categoryStats, brandData, categoryData] = await Promise.all([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$productService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllProducts"])(),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$productService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrandStats"])(),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$productService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategoryStats"])(),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$productService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrands"])(),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$productService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategories"])()
                    ]);
                    setAllProducts(products || []);
                    setBrandStats(brandStats || {});
                    setCategoryStats(categoryStats || {});
                    setBrands(brandData || []);
                    setCategories(categoryData || []);
                }
            }["ProductsView.useEffect.fetchData"];
            fetchData();
        }
    }["ProductsView.useEffect"], []);
    const handleFilterClick = (filter)=>{
        setActiveFilter(filter);
        setCurrentPage(1); // Reset to first page when filter changes
    };
    // Calculate pagination for products
    const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const paginatedProducts = allProducts.slice(startIndex, endIndex);
    // Generate page numbers for pagination display
    const getPageNumbers = ()=>{
        const pages = [];
        const maxPagesToShow = 5;
        if (totalPages <= maxPagesToShow) {
            for(let i = 1; i <= totalPages; i++){
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for(let i = 1; i <= 4; i++){
                    pages.push(i);
                }
                pages.push('ellipsis');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('ellipsis');
                for(let i = totalPages - 3; i <= totalPages; i++){
                    pages.push(i);
                }
            } else {
                pages.push(1);
                pages.push('ellipsis');
                for(let i = currentPage - 1; i <= currentPage + 1; i++){
                    pages.push(i);
                }
                pages.push('ellipsis');
                pages.push(totalPages);
            }
        }
        return pages;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "all-products",
        className: "py-12 md:py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionTitle"], {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/products-view.tsx",
                        lineNumber: 103,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionDescription"], {
                        children: "Browse our extensive catalog of quality products."
                    }, void 0, false, {
                        fileName: "[project]/src/components/products-view.tsx",
                        lineNumber: 104,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/products-view.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-1.5 sm:gap-2 md:gap-3 my-6 md:my-8 flex-wrap px-3 sm:px-4 md:px-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: activeFilter === 'all' ? 'default' : 'outline',
                        onClick: ()=>handleFilterClick('all'),
                        size: "sm",
                        className: "text-xs sm:text-sm min-h-10 sm:min-h-11 px-2.5 sm:px-4",
                        children: "All Products"
                    }, void 0, false, {
                        fileName: "[project]/src/components/products-view.tsx",
                        lineNumber: 108,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: activeFilter === 'brand' ? 'default' : 'outline',
                        onClick: ()=>handleFilterClick('brand'),
                        size: "sm",
                        className: "text-xs sm:text-sm min-h-10 sm:min-h-11 px-2.5 sm:px-4",
                        children: "Shop by Brand"
                    }, void 0, false, {
                        fileName: "[project]/src/components/products-view.tsx",
                        lineNumber: 115,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: activeFilter === 'category' ? 'default' : 'outline',
                        onClick: ()=>handleFilterClick('category'),
                        size: "sm",
                        className: "text-xs sm:text-sm min-h-10 sm:min-h-11 px-2.5 sm:px-4",
                        children: "Shop by Category"
                    }, void 0, false, {
                        fileName: "[project]/src/components/products-view.tsx",
                        lineNumber: 122,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/products-view.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 px-3 sm:px-4 md:px-0",
                children: [
                    activeFilter === 'all' && paginatedProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                            product: product
                        }, product.id, false, {
                            fileName: "[project]/src/components/products-view.tsx",
                            lineNumber: 133,
                            columnNumber: 17
                        }, this)),
                    activeFilter === 'brand' && brands.map((brand)=>{
                        const stats = brandStats[brand.name] || {
                            productCount: 0,
                            categoryCount: 0
                        };
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$brand$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrandCard"], {
                            brand: brand,
                            productCount: stats.productCount,
                            categoryCount: stats.categoryCount
                        }, brand.id, false, {
                            fileName: "[project]/src/components/products-view.tsx",
                            lineNumber: 137,
                            columnNumber: 24
                        }, this);
                    }),
                    activeFilter === 'category' && categories.map((category)=>{
                        const stats = categoryStats[category.name] || {
                            productCount: 0,
                            brandCount: 0
                        };
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$category$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoryCard"], {
                            category: category,
                            productCount: stats.productCount,
                            brandCount: stats.brandCount
                        }, category.id, false, {
                            fileName: "[project]/src/components/products-view.tsx",
                            lineNumber: 141,
                            columnNumber: 24
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/products-view.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, this),
            activeFilter === 'all' && totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pagination"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationItem"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationPrevious"], {
                                    href: "#",
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                                    },
                                    className: currentPage === 1 ? 'pointer-events-none opacity-50' : ''
                                }, void 0, false, {
                                    fileName: "[project]/src/components/products-view.tsx",
                                    lineNumber: 151,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/products-view.tsx",
                                lineNumber: 150,
                                columnNumber: 17
                            }, this),
                            getPageNumbers().map((page, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationItem"], {
                                    children: page === 'ellipsis' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationEllipsis"], {}, void 0, false, {
                                        fileName: "[project]/src/components/products-view.tsx",
                                        lineNumber: 164,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationLink"], {
                                        href: "#",
                                        isActive: currentPage === page,
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            setCurrentPage(page);
                                        },
                                        children: page
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products-view.tsx",
                                        lineNumber: 166,
                                        columnNumber: 23
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/src/components/products-view.tsx",
                                    lineNumber: 162,
                                    columnNumber: 19
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationItem"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationNext"], {
                                    href: "#",
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                                    },
                                    className: currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
                                }, void 0, false, {
                                    fileName: "[project]/src/components/products-view.tsx",
                                    lineNumber: 181,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/products-view.tsx",
                                lineNumber: 180,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products-view.tsx",
                        lineNumber: 149,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/products-view.tsx",
                    lineNumber: 148,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/products-view.tsx",
                lineNumber: 147,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/products-view.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(ProductsView, "YbkDAKoh5tvgX6ZLSzbX0aZEMew=");
_c = ProductsView;
var _c;
__turbopack_context__.k.register(_c, "ProductsView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e802a051._.js.map