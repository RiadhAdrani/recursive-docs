import {
    A,
    CenteredRow,
    Column,
    Fragment,
    Link,
    P,
    Spacer,
    ToggleSwitch,
} from "@riadh-adrani/recursive-web/html";
import { calc, getVar, translateY, whenLessThan } from "@riadh-adrani/recursive-web/style/methods";
import { MenuContent } from ".";
import { setStyle } from "../..";
import useTheme from "../../controllers/useTheme";
import { bg_color, bg_color_mute, bg_color_soft, text_color_2 } from "../../style/colors";
import { redDark } from "../../style/colors/colors";
import { navBarHeight } from "../../style/dimensions";
import Icon, { GitHub } from "../Icon";
import useNavBar from "./useNavBar";

export default () => {
    const { expanded, toggleExpanded } = useNavBar();
    const { toggleTheme, isDark } = useTheme();

    if (expanded) {
        setStyle({
            selectors: {
                "body,html": {
                    overflow: "hidden",
                },
            },
        });
    }

    return Column({
        onResizeGlobal: () => {
            if (expanded) toggleExpanded();
        },
        style: {
            scoped: true,
            normal: {
                position: "fixed",
                top: getVar(navBarHeight),
                height: calc("100vh", "-", getVar(navBarHeight)),
                width: "100vw",
                backgroundColor: getVar(bg_color),
                transitionDuration: "300ms",
                transitionProperty: "transform, opacity, z-index",
                display: "none",
            },
            mediaQueries: [
                whenLessThan("700px", {
                    normal: {
                        opacity: expanded ? 1 : 0,
                        transform: translateY(expanded ? 0 : "-100px"),
                        display: "flex",
                        zIndex: expanded ? 100 : -100,
                    },
                }),
            ],
        },
        children: [
            Column({
                style: {
                    scoped: true,
                    normal: {
                        minWidth: "300px",
                        alignSelf: "center",
                        paddingTop: "25px",
                    },
                },
                children: [
                    Fragment({
                        children: MenuContent.map((item) =>
                            Link({
                                children: item.text,
                                href: item.to,
                                style: {
                                    scoped: true,
                                    normal: {
                                        textDecoration: "none",
                                        fontSize: "16px",
                                        padding: ["10px"],
                                        borderBottom: ["1px", "solid", getVar(bg_color_mute)],
                                    },
                                    hover: {
                                        color: getVar(text_color_2),
                                    },
                                },
                                onClick: toggleExpanded,
                            })
                        ),
                    }),
                    Spacer({ height: "20px" }),
                    CenteredRow({
                        style: {
                            inline: {
                                justifyContent: "space-between",
                                alignItems: "center",
                                color: getVar(text_color_2),
                                backgroundColor: getVar(bg_color_soft),
                                border: ["1px", "solid", getVar(bg_color_mute)],
                                borderRadius: "10px",
                                padding: [0, "15px"],
                                fontSize: "13px",
                            },
                        },
                        children: [
                            P({ children: "Appearance" }),
                            ToggleSwitch({
                                checked: isDark,
                                onChange: toggleTheme,
                                onBackgroundColor: getVar(redDark),
                                radiusPx: 15,
                            }),
                        ],
                    }),
                    Spacer({ height: "20px" }),
                    CenteredRow({
                        children: [
                            A({
                                children: Icon({ path: GitHub }),
                                href: "https://github.com/RiadhAdrani/recursive",
                                target: "_blank",
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
