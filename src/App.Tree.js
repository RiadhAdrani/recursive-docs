import { Column, H1, P, Row, Spacer } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { renderRoute } from ".";
import useTheme from "./controllers/useTheme";
import style from "./style";
import { navBarHeight } from "./style/dimensions";
import NavBar from "./widgets/NavBar";

export default () => {
    useTheme();

    style();

    return Column({
        style: {
            scoped: true,
            normal: {
                flex: 1,
                width: "100%",
                overflowX: "hidden",
                boxSizing: "border-box",
                borderRadius: "0px",
            },
        },
        children: [
            NavBar(),
            Spacer({ height: getVar(navBarHeight) }),
            Column({
                style: {
                    scoped: true,
                    normal: { maxWidth: "1400px", width: "100%", margin: "auto" },
                },
                children: renderRoute(),
            }),
            Spacer({ height: "30px" }),
        ],
    });
};
