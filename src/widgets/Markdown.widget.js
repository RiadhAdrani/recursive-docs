import { HtmlContainer } from "@riadh-adrani/recursive-web/html";
import createDOMPurify from "dompurify";
import { marked } from "marked";
import { setCache } from "..";
import Prism from "prismjs";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { TextDecorationLine, TextDecorationStyle } from "@riadh-adrani/recursive-web/style";

const DomPurify = createDOMPurify(window);

export default (filePath) => {
    const [content, setContent] = setCache(filePath, "", () => {
        fetch(filePath)
            .then((res) => {
                return res.text();
            })
            .then((text) => setContent(text));
    });

    return HtmlContainer({
        style: {
            scoped: true,
            normal: { width: "90%", alignSelf: "center" },
            [" p"]: {
                lineHeight: "1.75rem",
            },
            [" ul"]: {
                margin: ["0px"],
                listStyleType: "none",
            },
            [" li"]: { padding: ["5px", "0px"], lineHeight: "1.75rem" },
            [" a"]: {
                color: getVar("main"),
                textDecorationThickness: "from-font",
                textDecoration: [
                    TextDecorationLine.Underline,
                    TextDecorationStyle.Solid,
                    "1px",
                    getVar("main"),
                ],
            },
            [" :is(code):not(pre code)"]: {
                color: getVar("main"),
                fontFamily: "monospace",
                fontSize: "0.9em",
                backgroundColor: "#f5f5f5",
                padding: ["2px", "4px"],
                border: ["#e0e0e0", "1px", "solid"],
            },
            [" blockquote"]: {
                padding: ["10px", "20px"],
                background: getVar("lightGrey"),
                border: ["1px", "solid", getVar("main")],
                fontStyle: "italic",
                fontSize: "0.95em",
            },
            [" blockquote strong"]: {
                fontStyle: "normal",
            },
        },
        hooks: {
            onRef: () => {
                Prism.highlightAll();
            },
        },
        children: [DomPurify.sanitize(marked.parse(content))],
    });
};
