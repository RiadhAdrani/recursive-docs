import { CenteredRow, Link } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { getRoute } from "../..";
import { red } from "../../style/colors/colors";
import { SourceFont } from "../../style/fonts/fonts";

export default ({ text, to }) => {
    const isSelected = getRoute() === to;

    return CenteredRow({
        style: {
            scoped: true,
            normal: {
                height: "100%",
                alignItems: "center",
                borderBottom: ["2px", "solid", isSelected ? getVar(red) : "transparent"],

                margin: [0, "10px"],
                fontSize: "15px",
            },
            hover: {
                color: getVar(red),
            },
        },
        children: Link({
            children: text,
            href: to,
            style: {
                scoped: true,
                normal: { textDecoration: "none", fontFamily: getVar(SourceFont), fontWeight: 600 },
            },
        }),
    });
};
