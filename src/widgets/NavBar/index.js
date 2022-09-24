import {
    CenteredRow,
    Img,
    Link,
    Row,
    Spacer,
    Span,
    ToggleSwitch,
} from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import useTheme from "../../controllers/useTheme";
import { bg_color, dividerLight } from "../../style/colors";
import logo from "../../assets/logo.png";
import NavBarTab from "./NavBar.tab";
import { red, redDark } from "../../style/colors/colors";
import Icon, { GitHub, Serach } from "../Icon";
import NavBarIcon from "./NavBar.icon";
import { navBarHeight } from "../../style/dimensions";

export default () => {
    const { isDark, toggleTheme } = useTheme();

    return Row({
        style: {
            scoped: true,
            normal: {
                borderBottom: ["1px", "solid", getVar(dividerLight)],
                height: getVar(navBarHeight),
                padding: [0, "30px"],
                boxSizing: "border-box",
                position: "sticky",
                top: "0px",
                backgroundColor: getVar(bg_color),
                zIndex: 5,
            },
        },
        children: [
            Row({
                className: "container",
                style: {
                    scoped: true,
                    normal: {
                        alignItems: "center",
                        justifyContent: "space-between",
                        flex: 1,
                    },
                },
                children: [
                    Row({
                        children: [
                            Link({
                                style: {
                                    inline: { textDecoration: "none" },
                                },
                                href: "/",
                                children: CenteredRow({
                                    children: [
                                        Img({
                                            src: logo,
                                            height: 25,
                                            width: 25,
                                            alt: "Recursive Logo",
                                        }),
                                        Span({
                                            children: "Recursive.js",
                                            style: {
                                                scoped: true,
                                                normal: {
                                                    paddingLeft: "8px",
                                                    fontSize: "16px",
                                                    fontWeight: 500,
                                                },
                                            },
                                        }),
                                    ],
                                }),
                            }),
                            Spacer({ width: "30px" }),
                            CenteredRow({
                                style: {
                                    scoped: true,
                                    hover: {
                                        color: getVar(red),
                                        cursor: "pointer",
                                    },
                                    ":hover svg": {
                                        fill: getVar(red),
                                    },
                                },
                                children: [
                                    Icon({ path: Serach, size: "20px" }),
                                    Spacer({ width: "7.5px" }),
                                    Span({
                                        children: "Search...",
                                        style: { inline: { fontSize: "13px" } },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    Row({
                        style: {
                            inline: { height: "100%", alignItems: "center" },
                        },
                        children: [
                            NavBarTab({ text: "Get Started", to: "/get-started" }),
                            NavBarTab({ text: "Core", to: "/core" }),
                            NavBarTab({ text: "Web", to: "/web" }),
                            Spacer({ width: "20px" }),
                            ToggleSwitch({
                                checked: isDark,
                                onChange: toggleTheme,
                                onBackgroundColor: getVar(redDark),
                                radiusPx: 17,
                                title: "Toggle color theme",
                            }),
                            Spacer({ width: "20px" }),
                            NavBarIcon({
                                path: GitHub,
                                to: "https://github.com/RiadhAdrani/recursive",
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
