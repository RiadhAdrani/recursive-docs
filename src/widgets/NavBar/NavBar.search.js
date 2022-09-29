import {
    Button,
    Column,
    H4,
    Link,
    Row,
    SearchField,
    Spacer,
    Span,
} from "@riadh-adrani/recursive-web/html";
import { calc, getVar, translateY } from "@riadh-adrani/recursive-web/style/methods";
import { setStyle } from "../..";
import {
    bg_color,
    bg_color_soft,
    divider_light,
    text_color_1,
    text_color_2,
} from "../../style/colors";
import { navBarHeight } from "../../style/dimensions";
import Text from "../Text";
import useNavBar from "./useNavBar";

export default () => {
    const { search, toggleSearchShow, setSeachQuery } = useNavBar();

    const expanded = search.show;
    const result = search.result;

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
            if (search.show) toggleSearchShow();
        },
        onKeyDownGlobal: (e) => {
            if (e.code === "Escape" && search.show) {
                toggleSearchShow();
            }
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
                zIndex: expanded ? 100 : -100,
                opacity: expanded ? 1 : 0,
                transform: translateY(expanded ? 0 : "-100px"),
            },
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
                    Row({
                        children: [
                            SearchField({
                                style: {
                                    scoped: true,
                                    normal: { padding: ["10px", "20px"], flex: 1 },
                                },
                                placeholder: "Search docs",
                                value: search.query,
                                onInput: (e) => setSeachQuery(e.target.value),
                            }),
                            Spacer({ width: "10px" }),
                            Button({
                                children: "Close",
                                type: "button",
                                onClick: toggleSearchShow,
                            }),
                        ],
                    }),
                    Spacer({ height: "30px" }),
                    Column({
                        children: result.map((item) =>
                            Link({
                                href: item.path,
                                onClick: toggleSearchShow,
                                style: { inline: { textDecoration: "none" } },
                                children: Column({
                                    style: {
                                        scoped: true,
                                        normal: {
                                            padding: ["10px", "20px"],
                                            border: ["1px", "solid", getVar(divider_light)],
                                            marginBottom: "5px",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                        },
                                        hover: {
                                            backgroundColor: getVar(bg_color_soft),
                                        },
                                    },
                                    children: [
                                        Text(item.title, { size: "1em", weight: 600 }),
                                        Spacer({ height: "5px" }),
                                        Text(item.path, {
                                            size: "0.85em",
                                            weight: 300,
                                            color: getVar(text_color_2),
                                        }),
                                    ],
                                }),
                            })
                        ),
                    }),
                ],
            }),
        ],
    });
};
