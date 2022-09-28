import { Button, Column, Row, SearchField, Spacer } from "@riadh-adrani/recursive-web/html";
import { calc, getVar, translateY, whenLessThan } from "@riadh-adrani/recursive-web/style/methods";
import { setStyle } from "../..";
import { bg_color } from "../../style/colors";
import { navBarHeight } from "../../style/dimensions";
import useNavBar from "./useNavBar";

export default () => {
    const { search, toggleSearchShow, setSeachQuery } = useNavBar();

    const expanded = search.show;

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
                    search.query,
                ],
            }),
        ],
    });
};
