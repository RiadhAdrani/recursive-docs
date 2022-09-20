import coreApi from "./views/core-api";
import getStarted from "./views/get-started";
import home from "./views/home";
import webApi from "./views/web-api";

const Title = (title) => `${title} | Recursive`;

/**
 * @type {import("@riadh-adrani/recursive-web").Route}
 */
export default {
    path: "/",
    component: home,
    title: Title("Home"),
    routes: [
        { path: "get-started", component: getStarted, title: Title("Get Started") },
        { path: "core", component: coreApi, title: Title("Core API") },
        { path: "web", component: webApi, title: Title("Web API") },
    ],
};
