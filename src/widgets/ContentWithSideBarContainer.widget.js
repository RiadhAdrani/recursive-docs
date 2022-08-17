import { Column } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { renderRoute } from "..";
import MarkdownWidget from "./Markdown.widget";

export default (showLanding, Doc) => {
    return Column({
        style: {
            scoped: true,
            normal: {
                marginLeft: getVar("sideNavBarWidth"),
                padding: ["10px", "20px"],
            },
        },
        children: !showLanding
            ? renderRoute()
            : Column({
                  children: [MarkdownWidget(Doc)],
              }),
    });
};
