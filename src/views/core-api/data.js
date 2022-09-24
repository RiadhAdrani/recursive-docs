function section({ title, path, doc, base = "/core" }) {
    return {
        title,
        path: base + path,
        doc,
    };
}

function group({ name, content = [] }) {
    return { name, content };
}

export const getMethods = () => {
    const State = [
        section({ title: "setState()", path: "/setState" }),
        section({ title: "setCache()", path: "/setCache" }),
        section({ title: "getCache()", path: "/getCache" }),
        section({ title: "getState()", path: "/getState" }),
        section({ title: "getRef()", path: "/getRef" }),
        section({ title: "updateOn()", path: "/updateOn" }),
    ];

    const Routing = [
        section({ title: "getParams()", path: "/getParams" }),
        section({ title: "getRoute()", path: "/getRoute" }),
        section({ title: "goTo()", path: "/goTo" }),
        section({ title: "renderRoute()", path: "/renderRoute" }),
    ];

    const Rendering = [section({ title: "render()", path: "/render" })];

    return [
        group({ name: "State", content: State }),
        group({ name: "Routing", content: Routing }),
        group({ name: "Rendering", content: Rendering }),
    ];
};

export const getTypes = () => {
    const Common = [
        section({ title: "Flags", path: "/flags" }),
        section({ title: "Hooks", path: "/hooks" }),
        section({ title: "CommonProps", path: "/commonProps" }),
    ];

    const State = [
        section({ title: "StateArray", path: "/stateArray" }),
        section({ title: "StateEntry", path: "/stateEntry" }),
        section({ title: "StateStore", path: "/stateStore" }),
    ];

    const Renderer = [
        section({ title: "BaseElement", path: "/baseElement" }),
        section({ title: "RecursiveElement", path: "/recursiveElement" }),
    ];

    const Router = [
        section({ title: "Route", path: "/route" }),
        section({ title: "RouteTemplate", path: "/routeTemplate" }),
        section({ title: "ResolvedRoute", path: "/resolvedRoute" }),
        section({ title: "FlatRoute", path: "/flatRoute" }),
    ];

    return [
        group({ name: "Common Types", content: Common }),
        group({ name: "State Types", content: State }),
        group({ name: "Renderer Types", content: Renderer }),
        group({ name: "Router Types", content: Router }),
    ];
};
