import {
    CenteredRow,
    Fragment,
    Img,
    Link,
    Row,
    Spacer,
    Span,
    ToggleSwitch,
} from "@riadh-adrani/recursive-web/html";
import { getVar, whenLessThan } from "@riadh-adrani/recursive-web/style/methods";
import useTheme from "../../controllers/useTheme";
import { bg_color, divider_light } from "../../style/colors";
import logo from "../../assets/logo.png";
import NavBarTab from "./NavBar.tab";
import { red, redDark } from "../../style/colors/colors";
import Icon, { GitHub, Serach } from "../Icon";
import NavBarIcon from "./NavBar.icon";
import { navBarHeight } from "../../style/dimensions";
import NavBarResponsiveRight from "./NavBar.responsiveRight";
import useNavBar from "./useNavBar";
import { MenuContent } from ".";

export default () => {
    const { isDark, toggleTheme } = useTheme();
    const {} = useNavBar();

    return Row({
        style: {
            scoped: true,
            normal: {
                borderBottom: ["1px", "solid", getVar(divider_light)],
                height: getVar(navBarHeight),
                width: "100vw",
                padding: [0, "30px"],
                boxSizing: "border-box",
                position: "fixed",
                top: "0px",
                backgroundColor: getVar(bg_color),
                zIndex: 100,
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
                                    mediaQueries: [
                                        whenLessThan("700px", { normal: { display: "none" } }),
                                    ],
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
                            scoped: true,
                            normal: { height: "100%", alignItems: "center" },
                            mediaQueries: [whenLessThan("700px", { normal: { display: "none" } })],
                        },
                        children: [
                            Fragment({ children: MenuContent.map((item) => NavBarTab(item)) }),
                            Spacer({ width: "20px" }),
                            ToggleSwitch({
                                checked: isDark,
                                onChange: toggleTheme,
                                onBackgroundColor: getVar(redDark),
                                radiusPx: 17,
                                title: "Theme",
                            }),
                            Spacer({ width: "20px" }),
                            NavBarIcon({
                                path: GitHub,
                                to: "https://github.com/RiadhAdrani/recursive",
                            }),
                        ],
                    }),
                    NavBarResponsiveRight(),
                ],
            }),
        ],
    });
};