import coreApi from "./views/core";
import { getAll, getCore, getMethods, getTypes } from "./views/core/data";
import getStarted from "./views/get-started";
import home from "./views/home";
import notFound from "./views/not-found";
import webApi from "./views/web";
import DocWrapperContainer from "./widgets/containers/DocWrapper.container";

const Title = (title) => `${title} | Recursive`;

/**
 * @type {import("@riadh-adrani/recursive/lib").Route}
 */
export default {
    path: "/",
    component: home,
    title: Title("Home"),
    routes: [
        { path: "404", component: notFound },
        { path: "get-started", component: getStarted, title: Title("Get Started") },
        {
            path: "core",
            component: coreApi,
            title: Title("Core API"),
            routes: getCore().map((item) => ({
                path: item.pathFragment,
                title: Title(item.title),
                component: () =>
                    DocWrapperContainer({
                        filePath: item.doc,
                        component: item.component,
                        sideBarGroups: getAll(),
                    }),
            })),
        },
        { path: "web", component: webApi, title: Title("Web API") },
    ],
};
