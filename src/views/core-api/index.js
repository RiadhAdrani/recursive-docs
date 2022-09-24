import {
    Column,
    Div,
    H1,
    H2,
    HorizontalLine,
    Row,
    SearchField,
    Spacer,
} from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { setState } from "../..";
import { dividerLight, text_color } from "../../style/colors";
import { dividerDark1 } from "../../style/colors/colors";
import { DocTypeContainer } from "../../widgets/containers";
import { getMethods, getTypes } from "./data";

export default () => {
    const [search, setSearch] = setState("core-search", "");

    return Column({
        style: { inline: { padding: [0, "5px"] } },
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
                color: getVar(dividerLight),
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
};
