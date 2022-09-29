import { Div } from "@riadh-adrani/recursive-web/html";
import { getVar, rgba, whenLessThan } from "@riadh-adrani/recursive-web/style/methods";
import { navBarHeight } from "../../style/dimensions";
import useSideBar from "./useSideBar";

export default () => {
    const [showMenu, setShowMenu] = useSideBar();

    return Div({
        style: {
            scoped: true,
            normal: {
                position: "fixed",
                top: getVar(navBarHeight),
                width: "100vw",
                height: "100vh",
                top: 0,
                boxSizing: "border-box",
                zIndex: 15,
                display: "none",
                transitionDuration: "200ms",
            },
            mediaQueries: [
                whenLessThan("900px", {
                    normal: {
                        display: "inline-block",
                        zIndex: showMenu ? 5 : -5,
                        backgroundColor: rgba(0, 0, 0, showMenu ? 0.6 : 0),
                    },
                }),
            ],
        },
        onClick: () => {
            setShowMenu(false);
        },
    });
};
