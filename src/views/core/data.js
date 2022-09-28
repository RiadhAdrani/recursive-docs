import setStateDoc from "./md/setState.md";
import setCacheDoc from "./md/setCache.md";
import getStateDoc from "./md/getState.md";
import getCacheDoc from "./md/getCache.md";
import getRefDoc from "./md/getRef.md";
import updateOnDoc from "./md/updateOn.md";
import setEffectDoc from "./md/setEffect.md";
import routeDoc from "./md/route.md";
import routeTypeDoc from "./md/route.type.md";
import getParamsDoc from "./md/getParams.md";
import getRouteDoc from "./md/getRoute.md";
import goToDoc from "./md/goTo.md";
import renderRouteDoc from "./md/renderRoute.md";
import createElementDoc from "./md/createElement.md";
import flagsTypeDoc from "./md/flags.type.md";
import hooksTypeDoc from "./md/hooks.type.md";
import recursiveElementDoc from "./md/recursiveElement.type.md";
import stateArrayDoc from "./md/stateArray.type.md";

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
    section({ title: "setCache()", path: "/setCache", doc: setCacheDoc }),
    section({ title: "setEffect()", path: "/setEffect", doc: setEffectDoc }),
    section({ title: "getCache()", path: "/getCache", doc: getCacheDoc }),
    section({ title: "getState()", path: "/getState", doc: getStateDoc }),
    section({ title: "getRef()", path: "/getRef", doc: getRefDoc }),
    section({ title: "updateOn()", path: "/updateOn", doc: updateOnDoc }),
];

const RoutingMethods = [
    section({ title: "route()", path: "/route", doc: routeDoc }),
    section({ title: "getParams()", path: "/getParams", doc: getParamsDoc }),
    section({ title: "getRoute()", path: "/getRoute", doc: getRouteDoc }),
    section({ title: "goTo()", path: "/goTo", doc: goToDoc }),
    section({ title: "renderRoute()", path: "/renderRoute", doc: renderRouteDoc }),
];

const RenderingMethods = [
    section({ title: "createElement()", path: "/createElement", doc: createElementDoc }),
];

export const getMethods = () => {
    return [
        group({ name: "State API", content: StateMethods }),
        group({ name: "Routing API", content: RoutingMethods }),
        group({ name: "Rendering API", content: RenderingMethods }),
    ];
};

const CommonTypes = [
    section({ title: "Flags", path: "/Flags", doc: flagsTypeDoc }),
    section({ title: "Hooks", path: "/Hooks", doc: hooksTypeDoc }),
    section({ title: "Route", path: "/Route", doc: routeTypeDoc }),
    section({ title: "RecursiveElement", path: "/RecursiveElement", doc: recursiveElementDoc }),
    section({ title: "StateArray", path: "/StateArray", doc: stateArrayDoc }),
];

export const getTypes = () => {
    return [group({ name: "Common Types", content: CommonTypes })];
};

export const getCore = () => [
    ...CommonTypes,
    ...StateMethods,
    ...RenderingMethods,
    ...RoutingMethods,
];

export const getAll = () => [...getMethods(), ...getTypes()];
