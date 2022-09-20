import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { setStyle } from "..";
import colors, { bg_color, text_color } from "./colors";
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
        },
    });
};
