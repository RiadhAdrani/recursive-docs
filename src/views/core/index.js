import {
    Column,
    Div,
    Fragment,
    H1,
    H2,
    HorizontalLine,
    Row,
    SearchField,
    Spacer,
} from "@riadh-adrani/recursive-web/html";
import { getVar, whenLessThan } from "@riadh-adrani/recursive-web/style/methods";
import { getRoute, renderRoute, setState } from "../..";
import { divider_light, text_color } from "../../style/colors";
import { dividerDark1 } from "../../style/colors/colors";
import { DocTypeContainer } from "../../widgets/containers";
import { getMethods, getTypes } from "./data";

export default () => {
    const [search, setSearch] = setState("core-search", "");

    const displayMain = getRoute() === "/core";

    const mainContent = () =>
        Fragment({
            children: [
                Spacer({ height: "30px" }),
                Row({
                    style: {
                        scoped: true,
                        normal: {
                            padding: [0, "20px"],
                            alignItems: "center",
                            justifyContent: "space-between",
                        },
                    },
                    children: [
                        H1({
                            children: "Core Reference",
                            style: { scoped: true, normal: { padding: ["10px", 0] } },
                        }),
                        SearchField({
                            placeholder: "Search...",
                            value: search,
                            onInput: (e) => setSearch(e.target.value),
                            style: {
                                scoped: true,
                                normal: {
                                    padding: ["5px", "10px"],
                                    borderRadius: "5px",
                                    backgroundColor: "transparent",
                                    border: ["solid", "1px", getVar(dividerDark1)],
                                    color: getVar(text_color),
                                    fontSize: "16px",
                                },
                            },
                        }),
                    ],
                }),
                HorizontalLine({
                    color: getVar(divider_light),
                    marginVertical: "40px",
                    width: "100%",
                    style: { inline: { alignSelf: "center" } },
                }),
                Column({
                    style: { scoped: true, normal: { padding: ["10px", "25px"] } },
                    children: [
                        H2({ children: "API" }),
                        Spacer({ height: "15px" }),
                        DocTypeContainer(getMethods(), search),
                    ],
                }),
                Column({
                    style: { scoped: true, normal: { padding: ["10px", "25px"] } },
                    children: [
                        H2({ children: "Types" }),
                        Spacer({ height: "15px" }),
                        DocTypeContainer(getTypes(), search),
                    ],
                }),
            ],
        });

    return Column({
        style: {
            scoped: true,
            normal: { padding: [0, "5px"] },
            mediaQueries: [whenLessThan("900px", { normal: { padding: 0 } })],
        },
        children: [displayMain ? mainContent() : renderRoute()],
    });
};
