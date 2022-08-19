import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { setStyle } from ".";

export default () => {
    setStyle({
        var: {
            darker: "#8d181b",
            dark: "#ae1f23",
            main: "#cf2026",

            lightGrey: "#f5f5f5",

            background: "#1e1e1e",
            backgroundDarker: "#1a1a1a",

            navBarHeight: "55px",
            sideNavBarWidth: "200px",

            snippetFontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        },
        selectors: {
            "*": {
                fontFamily: "arial",
                fontFamily: "'Roboto', sans-serif",
                borderRadius: "2.5px",
            },
            body: {
                margin: "0px",
                minHeight: "100vh",
                display: "flex",
                fontSize: "17px",
            },
            "h1,h2,h3,h4,h5,h6": {
                fontFamily: "'Source Sans Pro', sans-serif",
                margin: "0px",
                padding: ["5px", "0px"],
            },
            h1: {
                fontSize: "2.5rem",
            },
            h2: {
                fontSize: "2.1rem",
            },
            h3: {
                fontSize: "1.8rem",
            },
            h4: {
                fontSize: "1.5rem",
            },
            h5: {
                fontSize: "1.2rem",
            },
            h6: {
                fontSize: "1.05rem",
            },
            p: {
                margin: "0px",
                lineHeight: "1.35rem",
            },
            a: {
                color: "inherit",
            },
            ".container": {
                alignItems: "center",
                width: "80%",
                borderRadius: "0px",
            },
            "::-webkit-scrollbar": {
                width: "10px",
            },
            "::-webkit-scrollbar-track": {
                background: "transparent",
            },
            "::-webkit-scrollbar-thumb": {
                background: getVar("background"),
            },
            "::-webkit-scrollbar-thumb:hover": {
                cursor: "pointer",
            },
            "::-webkit-scrollbar-thumb:active": {
                background: getVar("main"),
            },

            // prism
            'code[class*="language-"], pre[class*="language-"]': {
                color: "#ccc",
                background: "0 0",
                fontFamily: getVar("snippetFontFamily"),
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
                fontFamily: getVar("snippetFontFamily"),
            },
            ':not(pre) > code[class*="language-"], pre[class*="language-"]': {
                background: "#2d2d2d",
                fontFamily: getVar("snippetFontFamily"),
            },
            ':not(pre) > code[class*="language-"]': {
                padding: "0.5em",
                borderRadius: "0.3em",
                whiteSpace: "break-spaces",
                fontFamily: getVar("snippetFontFamily"),
            },
            ".token.block-comment, .token.cdata, .token.comment, .token.doctype,.token.prolog": {
                color: "#999",
                fontFamily: getVar("snippetFontFamily"),
            },
            ".token.punctuation": {
                color: "#ccc",
                fontFamily: getVar("snippetFontFamily"),
            },
            ".token.attr-name, .token.deleted, .token.namespace, .token.tag": {
                color: "#e2777a",
                fontFamily: getVar("snippetFontFamily"),
            },
            ".token.function-name": {
                color: "#6196cc",
                fontFamily: getVar("snippetFontFamily"),
            },
            ".token.boolean, .token.function, .token.number": {
                color: "#f08d49",
                fontFamily: getVar("snippetFontFamily"),
            },
            ".token.class-name, .token.constant, .token.property, .token.symbol": {
                color: "#f8c555",
                fontFamily: getVar("snippetFontFamily"),
            },
            ".token.atrule, .token.builtin, .token.important, .token.keyword, .token.selector": {
                color: "#cc99cd",
                fontFamily: getVar("snippetFontFamily"),
            },
            ".token.attr-value, .token.char, .token.regex, .token.string, .token.variable": {
                color: "#7ec699",
                fontFamily: getVar("snippetFontFamily"),
            },
            ".token.entity, .token.operator, .token.url": {
                color: "#67cdcc",
                fontFamily: getVar("snippetFontFamily"),
            },
            ".token.bold, .token.important": {
                fontWeight: 700,
                fontFamily: getVar("snippetFontFamily"),
            },
            ".token.italic": {
                fontStyle: "italic",
                fontFamily: getVar("snippetFontFamily"),
            },
            ".token.entity": {
                cursor: "help",
                fontFamily: getVar("snippetFontFamily"),
            },
            ".token.inserted": {
                color: "green",
                fontFamily: getVar("snippetFontFamily"),
            },
        },
        mediaQueries: {
            "(max-width:650px)": {
                ".container": {
                    width: "95%",
                },
            },
        },
    });
};
