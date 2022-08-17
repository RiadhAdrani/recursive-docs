import renderDoc from "./md/render.doc.md";
import setStateDoc from "./md/setstate.doc.md";
import setCacheDoc from "./md/setcache.doc.md";
import getStateDoc from "./md/getstate.doc.md";
import getCacheDoc from "./md/getcache.doc.md";
import routeDoc from "./md/route.doc.md";
import getRouteDoc from "./md/getroute.doc.md";
import getParamsDoc from "./md/getparams.doc.md";
import goToDoc from "./md/goto.doc.md";
import renderRouteDoc from "./md/renderroute.doc.md";
import getRefDoc from "./md/getRef.doc.md";
import updateOnDoc from "./md/updateon.doc.md";
import { createPage } from "..";

export default () => [
    createPage({
        file: renderDoc,
        path: "render",
        title: "Render",
        tags: ["render"],
    }),
    createPage({
        file: setStateDoc,
        path: "set-state",
        title: "SetState",
        tags: ["setState"],
    }),
    createPage({
        file: setCacheDoc,
        path: "set-cache",
        title: "SetCache",
        tags: ["setCache"],
    }),
    createPage({
        file: getStateDoc,
        path: "get-state",
        title: "GetState",
        tags: ["getState"],
    }),
    createPage({
        file: getCacheDoc,
        path: "get-cache",
        title: "GetCache",
        tags: ["getCache"],
    }),
    createPage({
        file: routeDoc,
        path: "route",
        title: "Route",
        tags: ["route"],
    }),
    createPage({
        file: getRouteDoc,
        path: "get-route",
        title: "GetRoute",
        tags: ["getRoute"],
    }),
    createPage({
        file: getParamsDoc,
        path: "get-params",
        title: "GetParams",
        tags: ["getParams"],
    }),
    createPage({
        file: goToDoc,
        path: "go-to",
        title: "GoTo",
        tags: ["goTo"],
    }),
    createPage({
        file: renderRouteDoc,
        path: "render-route",
        title: "RenderRoute",
        tags: ["renderRoute"],
    }),
    createPage({
        file: getRefDoc,
        path: "get-ref",
        title: "GetRef",
        tags: ["getRef"],
    }),
    createPage({
        file: updateOnDoc,
        path: "update-on",
        title: "UpdateOn",
        tags: ["updateOn"],
    }),
];
