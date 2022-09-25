import { Column, Fragment, Link, Spacer } from "@riadh-adrani/recursive-web/html";
import { calc, getVar, translateX, whenLessThan } from "@riadh-adrani/recursive-web/style/methods";
import { bg_color, text_color_1, text_color_2 } from "../../style/colors";
import { navBarHeight, sideBarWidth } from "../../style/dimensions";
import Text from "../Text";
import SideBarBackdrop from "./SideBar.backdrop";
import SideBarResponsive from "./SideBar.responsive";
import useSideBar from "./useSideBar";

export default (groups = []) => {
    const [showMenu, setShowMenu] = useSideBar();

    return Fragment({
        children: [
            SideBarResponsive(),
            SideBarBackdrop(),
            Column({
                onClick: () => {
                    setShowMenu(false);
                },
                style: {
                    scoped: true,
                    normal: {
                        height: calc("100vh", "-", getVar(navBarHeight)),
                        overflowY: "scroll",
                        padding: ["32px"],
                        width: getVar(sideBarWidth),
                        boxSizing: "border-box",
                        backgroundColor: getVar(bg_color),
                        zIndex: 7,
                        position: "fixed",
                        top: getVar(navBarHeight),
                    },
                    mediaQueries: [
                        whenLessThan("900px", {
                            normal: {
                                transform: translateX(
                                    showMenu ? 0 : calc(-1, "*", getVar(sideBarWidth))
                                ),
                                transitionDuration: "300ms",
                                transitionProperty: "transform",
                                transitionTimingFunction: "ease",
                            },
                        }),
                    ],
                },
                children: groups.map((group) => {
                    return Column({
                        children: [
                            Text(group.name, { weight: 700 }),
                            Spacer({ height: "5px" }),
                            Fragment({
                                children: group.content.map((item) =>
                                    Link({
                                        children: Text(item.title, {
                                            lineHeight: "20px",
                                            size: "13px",
                                            weight: 400,
                                        }),
                                        href: item.path,
                                        style: {
                                            scoped: true,
                                            normal: {
                                                textDecoration: "none",
                                                padding: ["5px", 0],
                                                color: getVar(text_color_2),
                                            },
                                            hover: {
                                                color: getVar(text_color_1),
                                            },
                                        },
                                    })
                                ),
                            }),
                            Spacer({ height: "20px" }),
                        ],
                    });
                }),
            }),
        ],
    });
};
