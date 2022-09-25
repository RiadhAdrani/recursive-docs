import setStateDoc from "./md/setState.md";

function section({ title, path, doc, base = "/core", component }) {
    return {
        title,
        path: base + path,
        pathFragment: path.substring(1),
        doc,
        component,
    };
}

function group({ name, content = [] }) {
    return { name, content };
}

const StateMethods = [
    section({ title: "setState()", path: "/setState", doc: setStateDoc }),
    section({ title: "setCache()", path: "/setCache" }),
    section({ title: "getCache()", path: "/getCache" }),
    section({ title: "getState()", path: "/getState" }),
    section({ title: "getRef()", path: "/getRef" }),
    section({ title: "updateOn()", path: "/updateOn" }),
];

const RoutingMethods = [
    section({ title: "getParams()", path: "/getParams" }),
    section({ title: "getRoute()", path: "/getRoute" }),
    section({ title: "goTo()", path: "/goTo" }),
    section({ title: "renderRoute()", path: "/renderRoute" }),
];

const RenderingMethods = [
    section({ title: "render()", path: "/render" }),
    section({ title: "createElement()", path: "/createElement" }),
];

const CommonTypes = [
    section({ title: "Flags", path: "/flags" }),
    section({ title: "Hooks", path: "/hooks" }),
    section({ title: "CommonProps", path: "/commonProps" }),
];

const StateTypes = [
    section({ title: "StateArray", path: "/stateArray" }),
    section({ title: "StateEntry", path: "/stateEntry" }),
    section({ title: "StateStore", path: "/stateStore" }),
];

const RendererTypes = [
    section({ title: "BaseElement", path: "/baseElement" }),
    section({ title: "RecursiveElement", path: "/recursiveElement" }),
];

const RouterTypes = [
    section({ title: "Route", path: "/route" }),
    section({ title: "RouteTemplate", path: "/routeTemplate" }),
    section({ title: "ResolvedRoute", path: "/resolvedRoute" }),
    section({ title: "FlatRoute", path: "/flatRoute" }),
];

export const getMethods = () => {
    return [
        group({ name: "State", content: StateMethods }),
        group({ name: "Routing", content: RoutingMethods }),
        group({ name: "Rendering", content: RenderingMethods }),
    ];
};

export const getTypes = () => {
    return [
        group({ name: "Common Types", content: CommonTypes }),
        group({ name: "State Types", content: StateTypes }),
        group({ name: "Renderer Types", content: RendererTypes }),
        group({ name: "Router Types", content: RouterTypes }),
    ];
};

export const getCore = () => [
    ...StateTypes,
    ...RendererTypes,
    ...CommonTypes,
    ...RouterTypes,
    ...StateMethods,
    ...RenderingMethods,
    ...RoutingMethods,
];
