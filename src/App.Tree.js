import { Column, H1, P, Row, Spacer } from "@riadh-adrani/recursive-web/html";
import { renderRoute } from ".";
import useTheme from "./controllers/useTheme";
import style from "./style";
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
                boxSizing: "border-box",
                borderRadius: "0px",
            },
        },
        children: [
            NavBar(),
            Column({
                style: { inline: { maxWidth: "1400px", width: "100%", margin: "auto" } },
                children: renderRoute(),
            }),
            Spacer({ height: "30px" }),
        ],
    });
};
