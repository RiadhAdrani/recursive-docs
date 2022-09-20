import { CenteredColumn, Column, H1, P, Spacer } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { text_color_light_2 } from "../../style/colors";
import { redDark } from "../../style/colors/colors";
import Text from "../../widgets/text";

const LargeTitle = (text, size = 70) =>
    H1({
        children: text,
        style: {
            scoped: true,
            normal: {
                fontWeight: 900,
                fontSize: size + "px",
                color: getVar(redDark),
            },
        },
    });

export default () => {
    return CenteredColumn({
        style: {
            inline: {
                textAlign: "center",
            },
        },
        children: [
            CenteredColumn({
                style: { inline: { padding: ["96px", 0] } },
                children: [
                    LargeTitle("The Simple", 70),
                    LargeTitle("JavaScript Framework", 60),
                    Spacer({ height: "30px" }),
                    Text("Simple, Easy and performant framework to build UI interfaces.", {
                        size: "22px",
                        weight: 500,
                        align: "center",
                        color: getVar(text_color_light_2),
                    }),
                ],
            }),
        ],
    });
};
