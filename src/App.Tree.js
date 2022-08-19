import { Column } from "@riadh-adrani/recursive-web/html";
import { renderRoute } from ".";
import AppStyle from "./App.Style";
import TopBarWidget from "./widgets/TopBar.widget";

export default () => {
    AppStyle();

    return Column({
        style: {
            scoped: true,
            normal: {
                width: "100%",
            },
        },
        children: [
            TopBarWidget(),
            Column({
                style: {
                    inline: {
                        flex: 1,
                        width: "100%",
                        overflowX: "hidden",
                        boxSizing: "border-box",
                        borderRadius: "0px",
                    },
                },
                children: renderRoute(),
            }),
        ],
    });
};
