import { Column, Link, Spacer } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { bg_color_soft, text_code } from "../../style/colors";
import { dividerDark2, red } from "../../style/colors/colors";
import Text from "../Text";

export default ({ title = "Api", items = [], hidden = false }) => {
    return Column({
        style: {
            scoped: true,
            normal: {
                padding: ["20px"],
                backgroundColor: getVar(bg_color_soft),
                borderRadius: "5px",
                border: ["1px", "solid", getVar(dividerDark2)],
            },
        },
        children: [
            Text(title, {
                color: getVar(red),
                size: "20px",
                weight: 600,
            }),
            Spacer({ height: "10px" }),
            Column({
                children: items.map((item) => {
                    return Link({
                        href: item.path,
                        children: Text(item.title, { lineHeight: "1.75em" }),
                        style: {
                            scoped: true,
                            normal: {
                                display: "inline",
                                color: getVar(text_code),
                                textDecoration: "none",
                            },
                            hover: {
                                color: getVar(red),
                            },
                        },
                    });
                }),
            }),
        ],
    });
};
