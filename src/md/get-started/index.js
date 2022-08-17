import { createPage } from "..";
import requirementDoc from "./md/requirement.doc.md";
import setupDoc from "./md/setup.doc.md";
import helloWorldDoc from "./md/helloworld.doc.md";

export default () => [
    createPage({
        title: "Requirement",
        path: "requirement",
        file: requirementDoc,
        tags: [],
    }),
    createPage({
        title: "Project Setup",
        path: "setup",
        file: setupDoc,
        tags: [],
    }),
    createPage({
        title: "Hello World",
        path: "hello-world",
        file: helloWorldDoc,
        tags: [],
    }),
];
