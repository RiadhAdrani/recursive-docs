import { attr, getVar } from "@riadh-adrani/recursive-web/style/methods";
import { setStyle } from "..";
import colors, { bg_color, dividerDark, dividerLight, text_color } from "./colors";
import dimensions from "./dimensions";
import fonts from "./fonts";
import { notoFont } from "./fonts/fonts";

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
            },
            "[title]:hover::after": {
                content: attr("title"),
                backgroundColor: getVar(bg_color),
                boxShadow: [0, 0, "5px", "1px", getVar(dividerLight)],
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
            "h1,h2,h3,h4,h5,h6": {
                margin: 0,
            },
            a: {
                color: "inherit",
            },
            button: {
                borderRadius: "5px",
            },
        },
    });
};
