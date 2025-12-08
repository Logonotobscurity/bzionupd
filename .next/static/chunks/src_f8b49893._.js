(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex min-h-[100px] w-full rounded-md border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm leading-relaxed', className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Textarea;
Textarea.displayName = 'Textarea';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$React.forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
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
"[project]/src/app/contact/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.ts [app-client] (ecmascript)");
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
;
;
;
;
;
const contactFormSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    firstName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "First name is required."),
    lastName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Last name is required."),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Invalid email address."),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    subject: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Subject is required."),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, "Message must be at least 10 characters.")
});
const PageHero = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        className: "bg-primary",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-constrained",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/4 h-0.5 bg-accent mx-auto mb-6"
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 32,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-bold tracking-widest text-secondary uppercase mb-4",
                        children: "Contact Us"
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 33,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6",
                        children: "Get in Touch with BZION"
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 36,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-slate-300 mb-8",
                        children: "We're here to help. Whether you're a potential partner, a customer with a question, or just want to learn more about our services, we'd love to hear from you."
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 37,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                size: "lg",
                                variant: "secondary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/careers",
                                    children: "View Open Positions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/contact/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/contact/page.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                size: "lg",
                                variant: "secondary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    children: "Become a Partner"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/contact/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/contact/page.tsx",
                                lineNumber: 42,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 38,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/contact/page.tsx",
                lineNumber: 31,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/contact/page.tsx",
            lineNumber: 30,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/contact/page.tsx",
        lineNumber: 29,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PageHero;
const ContactForm = ()=>{
    _s();
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(contactFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        }
    });
    const onSubmit = (_data)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
            title: "Message Sent!",
            description: "Thanks for reaching out. We'll get back to you shortly."
        });
        form.reset();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        className: "bg-gradient-to-b from-secondary/5 to-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionTitle"], {
                            children: "Send us a Message"
                        }, void 0, false, {
                            fileName: "[project]/src/app/contact/page.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionDescription"], {
                            children: "Fill out the form below and we'll get back to you as soon as possible."
                        }, void 0, false, {
                            fileName: "[project]/src/app/contact/page.tsx",
                            lineNumber: 78,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/contact/page.tsx",
                    lineNumber: 76,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                    ...form,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mt-8 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-white border border-slate-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-secondary/5 to-transparent rounded-full -mr-48 -mt-48 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/contact/page.tsx",
                                lineNumber: 84,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/5 to-transparent rounded-full -ml-40 -mb-40 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/contact/page.tsx",
                                lineNumber: 85,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: form.handleSubmit(onSubmit),
                                className: "space-y-6 relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid sm:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                control: form.control,
                                                name: "firstName",
                                                render: (param)=>{
                                                    let { field } = param;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                className: "text-sm font-semibold text-slate-700",
                                                                children: "First Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/contact/page.tsx",
                                                                lineNumber: 94,
                                                                columnNumber: 41
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    placeholder: "John",
                                                                    className: "h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-secondary focus:ring-secondary/20 rounded-lg transition-all",
                                                                    ...field
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/contact/page.tsx",
                                                                    lineNumber: 96,
                                                                    columnNumber: 45
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/contact/page.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 41
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                fileName: "[project]/src/app/contact/page.tsx",
                                                                lineNumber: 98,
                                                                columnNumber: 41
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 37
                                                    }, void 0);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contact/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                control: form.control,
                                                name: "lastName",
                                                render: (param)=>{
                                                    let { field } = param;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                className: "text-sm font-semibold text-slate-700",
                                                                children: "Last Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/contact/page.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 41
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    placeholder: "Doe",
                                                                    className: "h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-secondary focus:ring-secondary/20 rounded-lg transition-all",
                                                                    ...field
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/contact/page.tsx",
                                                                    lineNumber: 109,
                                                                    columnNumber: 45
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/contact/page.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 41
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                fileName: "[project]/src/app/contact/page.tsx",
                                                                lineNumber: 111,
                                                                columnNumber: 41
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 37
                                                    }, void 0);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contact/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contact/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                        control: form.control,
                                        name: "email",
                                        render: (param)=>{
                                            let { field } = param;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                        className: "text-sm font-semibold text-slate-700",
                                                        children: "Email Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 37
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            type: "email",
                                                            placeholder: "john@example.com",
                                                            className: "h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-secondary focus:ring-secondary/20 rounded-lg transition-all",
                                                            ...field
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/contact/page.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 41
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 37
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 37
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/contact/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 33
                                            }, void 0);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contact/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                        control: form.control,
                                        name: "phone",
                                        render: (param)=>{
                                            let { field } = param;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                        className: "text-sm font-semibold text-slate-700",
                                                        children: "Phone Number (Optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 37
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            placeholder: "+234 1 234 5678",
                                                            className: "h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-secondary focus:ring-secondary/20 rounded-lg transition-all",
                                                            ...field
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/contact/page.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 41
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 37
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 37
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/contact/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 33
                                            }, void 0);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contact/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                        control: form.control,
                                        name: "subject",
                                        render: (param)=>{
                                            let { field } = param;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                        className: "text-sm font-semibold text-slate-700",
                                                        children: "Subject"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 37
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            placeholder: "How can we help?",
                                                            className: "h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-secondary focus:ring-secondary/20 rounded-lg transition-all",
                                                            ...field
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/contact/page.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 41
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 37
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 37
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/contact/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 33
                                            }, void 0);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contact/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                        control: form.control,
                                        name: "message",
                                        render: (param)=>{
                                            let { field } = param;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                        className: "text-sm font-semibold text-slate-700",
                                                        children: "Message"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 37
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                            placeholder: "Tell us more about your inquiry...",
                                                            className: "min-h-32 bg-slate-50 border-slate-200 focus:bg-white focus:border-secondary focus:ring-secondary/20 rounded-lg transition-all resize-none",
                                                            ...field
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/contact/page.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 41
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 37
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 37
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/contact/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 33
                                            }, void 0);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contact/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        variant: "secondary",
                                        size: "lg",
                                        className: "w-full",
                                        children: "Send Message"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contact/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contact/page.tsx",
                                lineNumber: 87,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 82,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/contact/page.tsx",
                    lineNumber: 81,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/contact/page.tsx",
            lineNumber: 75,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/contact/page.tsx",
        lineNumber: 74,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ContactForm, "woqMTX6igxsX6/9vX4dQZlxR7yY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c1 = ContactForm;
const ContactDetails = ()=>{
    const hqImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findImage"])('contact-hq');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-12 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl p-2 bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1rem_1rem] rounded-2xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/contact/page.tsx",
                                lineNumber: 190,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: hqImage.imageUrl,
                                alt: hqImage.description,
                                fill: true,
                                className: "relative object-cover rounded-xl",
                                sizes: "(max-width: 1024px) 100vw, 50vw",
                                "data-ai-hint": hqImage.imageHint
                            }, void 0, false, {
                                fileName: "[project]/src/app/contact/page.tsx",
                                lineNumber: 191,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 189,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6",
                                        children: "Global Headquarters"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contact/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "h-5 w-5 text-secondary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-primary",
                                                        children: "Ogun State"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/contact/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 pl-8 mb-2",
                                                children: "123 BZION Avenue, Sagamu, Ogun State, Nigeria"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contact/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 pl-8 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 88
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "+234 1 234 5678"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/contact/page.tsx",
                                                lineNumber: 209,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contact/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contact/page.tsx",
                                lineNumber: 201,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6",
                                        children: "Strategic Branches"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contact/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid sm:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "h-5 w-5 text-secondary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/contact/page.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-semibold text-primary",
                                                                children: "Lagos State"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/contact/page.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-600 pl-8 mb-2",
                                                        children: [
                                                            "BZION Lagos Hub",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/src/app/contact/page.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 88
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "456 Commerce Drive, Ikeja"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-600 pl-8 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/contact/page.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 92
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "+234 20 987 6543"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/contact/page.tsx",
                                                lineNumber: 215,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "h-5 w-5 text-secondary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/contact/page.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-semibold text-primary",
                                                                children: "Oyo State"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/contact/page.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-600 pl-8 mb-2",
                                                        children: [
                                                            "BZION Ibadan Depot",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/src/app/contact/page.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 91
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "789 Distribution Way, Ibadan"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-600 pl-8 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/contact/page.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 92
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "+234 30 212 3456"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/contact/page.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/contact/page.tsx",
                                                lineNumber: 223,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contact/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contact/page.tsx",
                                lineNumber: 212,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 200,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/contact/page.tsx",
                lineNumber: 188,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionTitle"], {
                            children: "Email Us"
                        }, void 0, false, {
                            fileName: "[project]/src/app/contact/page.tsx",
                            lineNumber: 238,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 237,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                className: "h-5 w-5 text-secondary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contact/page.tsx",
                                                lineNumber: 243,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-primary",
                                                children: "Customer Care"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contact/page.tsx",
                                                lineNumber: 244,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contact/page.tsx",
                                        lineNumber: 242,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:customercare@bzion.shop",
                                        className: "text-slate-600 hover:text-primary pl-8 block",
                                        children: "customercare@bzion.shop"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contact/page.tsx",
                                        lineNumber: 246,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contact/page.tsx",
                                lineNumber: 241,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                className: "h-5 w-5 text-secondary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contact/page.tsx",
                                                lineNumber: 250,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-primary",
                                                children: "Sales Inquiries"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contact/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contact/page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:sales@bzion.shop",
                                        className: "text-slate-600 hover:text-primary pl-8 block",
                                        children: "sales@bzion.shop"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contact/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contact/page.tsx",
                                lineNumber: 248,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                className: "h-5 w-5 text-secondary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contact/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-primary",
                                                children: "General Information"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contact/page.tsx",
                                                lineNumber: 258,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contact/page.tsx",
                                        lineNumber: 256,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:info@bzion.shop",
                                        className: "text-slate-600 hover:text-primary pl-8 block",
                                        children: "info@bzion.shop"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contact/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contact/page.tsx",
                                lineNumber: 255,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 240,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/contact/page.tsx",
                lineNumber: 236,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/contact/page.tsx",
        lineNumber: 187,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = ContactDetails;
function ContactPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHero, {}, void 0, false, {
                fileName: "[project]/src/app/contact/page.tsx",
                lineNumber: 271,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b-2 border-slate-200"
            }, void 0, false, {
                fileName: "[project]/src/app/contact/page.tsx",
                lineNumber: 272,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactDetails, {}, void 0, false, {
                fileName: "[project]/src/app/contact/page.tsx",
                lineNumber: 273,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactForm, {}, void 0, false, {
                fileName: "[project]/src/app/contact/page.tsx",
                lineNumber: 274,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_c3 = ContactPage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "PageHero");
__turbopack_context__.k.register(_c1, "ContactForm");
__turbopack_context__.k.register(_c2, "ContactDetails");
__turbopack_context__.k.register(_c3, "ContactPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_f8b49893._.js.map