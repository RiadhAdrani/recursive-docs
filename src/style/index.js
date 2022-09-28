import { attr, getVar } from "@riadh-adrani/recursive-web/style/methods";
import { setStyle } from "..";
import colors, { bg_color, divider_light, text_color } from "./colors";
import { notoFont } from "./fonts/fonts";
import dimensions from "./dimensions";
import fonts from "./fonts";

export default () => {
    colors();
    fonts();
    dimensions();

    setStyle({
        selectors: {
            "*": {
                transitionDuration: "100ms",
                transitionProperty: [
                    "background-color",
                    ",",
                    "color",
                    ",",
                    "border-color",
                    ",",
                    "fill",
                ],
                fontFamily: getVar(notoFont),
                position: "relative",
                scrollbarColor: "dark",
            },
            "[title]:hover::after": {
                content: attr("title"),
                backgroundColor: getVar(bg_color),
                boxShadow: [0, 0, "5px", "1px", getVar(divider_light)],
                display: "block",
                position: "absolute",
                top: "100%",
                width: "max-content",
                left: 0,
                padding: ["5px", "10px"],
            },
            "html,body": {
                backgroundColor: getVar(bg_color),
                color: getVar(text_color),
                margin: 0,
            },
            body: {
                overflowY: "scroll",
            },
            "h1,h2,h3,h4,h5,h6": {
                margin: 0,
            },
            a: {
                color: "inherit",
            },
            button: {
                borderRadius: "5px",
            },
            ".container": {
                maxWidth: "1400px",
                margin: [0, "auto"],
            },
            'code[class*="language-"], pre[class*="language-"]': {
                color: "#ccc",
                background: "0 0",
                fontFamily: "monospace",
                fontSize: "0.95em",
                textAlign: "left",
                whiteSpace: "pre",
                wordSpacing: "normal",
                wordBreak: "normal",
                wordWrap: "normal",
                lineHeight: 1.5,
                mozTabSize: 4,
                oTabSize: 4,
                tabSize: 4,
                webkitHyphens: "none",
                mozHyphens: "none",
                msHyphens: "none",
                hyphens: "none",
            },
            'pre[class*="language-"]': {
                padding: "1em",
                margin: ["0.5em", 0],
                overflow: "auto",
                fontFamily: "monospace",
            },
            ':not(pre) > code[class*="language-"], pre[class*="language-"]': {
                background: "#2d2d2d",
                fontFamily: "monospace",
            },
            ':not(pre) > code[class*="language-"]': {
                padding: "0.5em",
                borderRadius: "0.3em",
                whiteSpace: "break-spaces",
                fontFamily: "monospace",
            },
            ".token.block-comment, .token.cdata, .token.comment, .token.doctype,.token.prolog": {
                color: "#999",
                fontFamily: "monospace",
            },
            ".token.punctuation": {
                color: "#ccc",
                fontFamily: "monospace",
            },
            ".token.attr-name, .token.deleted, .token.namespace, .token.tag": {
                color: "#e2777a",
                fontFamily: "monospace",
            },
            ".token.function-name": {
                color: "#6196cc",
                fontFamily: "monospace",
            },
            ".token.boolean, .token.function, .token.number": {
                color: "#f08d49",
                fontFamily: "monospace",
            },
            ".token.class-name, .token.constant, .token.property, .token.symbol": {
                color: "#f8c555",
                fontFamily: "monospace",
            },
            ".token.atrule, .token.builtin, .token.important, .token.keyword, .token.selector": {
                color: "#cc99cd",
                fontFamily: "monospace",
            },
            ".token.attr-value, .token.char, .token.regex, .token.string, .token.variable": {
                color: "#7ec699",
                fontFamily: "monospace",
            },
            ".token.entity, .token.operator, .token.url": {
                color: "#67cdcc",
                fontFamily: "monospace",
            },
            ".token.bold, .token.important": {
                fontWeight: 700,
                fontFamily: "monospace",
            },
            ".token.italic": {
                fontStyle: "italic",
                fontFamily: "monospace",
            },
            ".token.entity": {
                cursor: "help",
                fontFamily: "monospace",
            },
            ".token.inserted": {
                color: "green",
                fontFamily: "monospace",
            },
        },
    });
};
