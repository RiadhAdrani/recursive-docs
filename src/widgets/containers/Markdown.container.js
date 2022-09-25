import { HtmlContainer } from "@riadh-adrani/recursive-web/html";
import createDOMPurify from "dompurify";
import { marked } from "marked";
import Prism from "prismjs";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import {
    bg_color_mute,
    bg_color_soft,
    blue_light,
    divider_light,
    text_code,
    text_color_1,
} from "../../style/colors";
import "prismjs/components/prism-typescript";

const DomPurify = createDOMPurify(window);

export default (content = "") => {
    return HtmlContainer({
        hooks: { onRef: () => Prism.highlightAll() },
        children: DomPurify.sanitize(marked.parse(content)),
        style: {
            scoped: true,
            normal: {
                padding: [0, "10px"],
                color: getVar(text_color_1),
                overflowX: "hidden",
                fontSize: "13px",
            },
            ["h1,h2"]: {
                color: getVar(text_code),
            },
            [" p"]: {
                lineHeight: "1.75rem",
            },
            [" ul"]: {
                margin: ["0px"],
                padding: [0, "20px"],
            },
            [" li"]: { padding: ["5px", "0px"], lineHeight: "1.75rem" },
            [" a"]: {
                color: [getVar(blue_light), "!important"],
            },
            [" :is(code):not(pre code)"]: {
                color: getVar(text_code),
                fontWeight: 600,
                fontFamily: "monospace",
                fontSize: "0.9em",
                backgroundColor: getVar(bg_color_mute),
                padding: ["3px", "5px"],
                borderRadius: "3px",
            },
            [" a :is(code):not(pre code)"]: {
                color: "inherit",
            },
            [" blockquote"]: {
                padding: [0, "20px"],
                background: getVar(bg_color_soft),
                border: ["1px", "solid", getVar(divider_light)],
                fontStyle: "italic",
                fontSize: "1.05em",
                marginRight: 0,
            },
            [" blockquote strong"]: {
                fontStyle: "normal",
            },
        },
    });
};
