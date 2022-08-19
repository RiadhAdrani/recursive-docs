import topLevelApi from "./md/top-level-api";
import CoreView from "./views/Core.view";
import Home from "./views/Home.view";
import MarkdownWidget from "./widgets/Markdown.widget";
import NotFound404 from "./views/404.view";
import GetStartedView from "./views/GetStarted.view";
import getStarted from "./md/get-started";
import WebView from "./views/Web.view";
import webApi from "./md/web-api";

export default {
    path: "/",
    component: Home,
    title: "Home | Recursive",
    routes: [
        { path: "404", component: NotFound404, title: "Not Found" },
        {
            path: "core",
            component: CoreView,
            title: "Core | Recursive",
            routes: topLevelApi().map((route) => {
                return {
                    path: route.path,
                    component: () => MarkdownWidget(route.file),
                    title: route.title + " | Recursive",
                };
            }),
        },
        {
            path: "web",
            component: WebView,
            title: "Web | Recursive",
            routes: webApi().map((route) => {
                return {
                    path: route.path,
                    component: () => MarkdownWidget(route.file),
                    title: route.title + " | Recursive",
                };
            }),
        },
        {
            path: "get-started",
            component: GetStartedView,
            title: "Get Started | Recursive",
            routes: getStarted().map((route) => {
                return {
                    path: route.path,
                    component: () => MarkdownWidget(route.file),
                    title: route.title + " | Recursive",
                };
            }),
        },
    ],
};
