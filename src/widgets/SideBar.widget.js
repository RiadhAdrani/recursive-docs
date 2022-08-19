import { Column, Fragment, H4, Hr } from "@riadh-adrani/recursive-web/html";
import { calc, edges, getVar, translateX } from "@riadh-adrani/recursive-web/style/methods";
import { getRoute, getState, Link, setState } from "..";

export default (title, summary, root) => {
    const [hide, setHide] = getState("side-bar");

    return Column({
        style: {
            className: "side-bar-summary",
            normal: {
                width: getVar("sideNavBarWidth"),
                position: "fixed",
                top: getVar("navBarHeight"),
                height: calc("100vh", "-", getVar("navBarHeight")),
                boxShadow: ["2px", "2px", "0px", "0px", "#00000011"],
                boxSizing: "border-box",
                padding: ["5px", "10px"],
                overflowY: "scroll",
                overflowX: "hidden",
                transitionDuration: "200ms",
                backgroundColor: "white",
            },
            mediaQueries: [
                {
                    condition: "(max-width:650px)",
                    normal: {
                        transform: translateX(hide ? "-200px" : "0px"),
                    },
                },
            ],
        },
        children: [
            H4({ children: title }),
            Hr({ width: "100%", size: "1px" }),
            Fragment({
                children: summary.map((item) => {
                    const path = root + "/" + item.path;
                    const isSelected = getRoute() == path;

                    return Link({
                        style: {
                            className: "side-bar-item",
                            scoped: true,
                            normal: {
                                padding: ["5px", "10px"],
                                margin: edges({ vertical: "5px", horizontal: "0px" }),
                                textDecoration: "none",
                                backgroundColor: isSelected ? getVar("main") : "initial",
                                color: isSelected ? "white" : "initial",
                                fontStyle: "italic",
                            },
                            hover: {
                                backgroundColor: isSelected ? getVar("dark") : getVar("lightGrey"),
                            },
                        },
                        children: [item.title],
                        href: path,
                    });
                }),
            }),
        ],
    });
};
