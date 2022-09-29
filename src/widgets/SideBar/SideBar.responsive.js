import { Row, Span } from "@riadh-adrani/recursive-web/html";
import { getVar, whenLessThan } from "@riadh-adrani/recursive-web/style/methods";
import { bg_color, divider_light, text_color_1, text_color_2 } from "../../style/colors";
import { navBarHeight } from "../../style/dimensions";
import useSideBar from "./useSideBar";

export default () => {
    const [_, setShowMenu] = useSideBar();

    const MenuItem = (text = "Menu", onClick = () => {}) => {
        return Span({
            children: text,
            onClick,
            style: {
                scoped: true,
                normal: {
                    color: getVar(text_color_2),
                    fontSize: "13px",
                    cursor: "pointer",
                },
                hover: {
                    color: getVar(text_color_1),
                },
            },
        });
    };

    return Row({
        children: [
            MenuItem("Menu", () => setShowMenu(true)),
            MenuItem("Return to top", () => scrollTo({ top: 0, behavior: "smooth" })),
        ],
        style: {
            scoped: true,
            normal: {
                padding: ["10px", "25px"],
                position: "absolute",
                zIndex: 5,
                width: "100%",
                boxSizing: "border-box",
                backgroundColor: getVar(bg_color),
                display: "none",
                transitionDuration: "200ms",
                position: "fixed",
                top: getVar(navBarHeight),
                borderBottom: ["1px", "solid", getVar(divider_light)],
                justifyContent: "space-between",
            },
            mediaQueries: [whenLessThan("900px", { normal: { display: "flex" } })],
        },
    });
};
