import { Row } from "@riadh-adrani/recursive-web/html";
import { getVar, whenLessThan } from "@riadh-adrani/recursive-web/style/methods";
import { setCache, updateOn } from "../..";
import { navBarHeight, sideBarWidth } from "../../style/dimensions";
import SideBar from "../SideBar";
import MarkdownContainer from "./Markdown.container";

export default ({ component, filePath, sideBarGroups = [] }) => {
    if (component) {
        return component;
    }

    if (typeof filePath !== "string") return;

    const [content, setContent] = setCache(filePath, "", async () => {
        const res = await fetch(filePath);

        if (res.status === 200) {
            const text = await res.text();

            updateOn(() => {
                setContent(text);
            });
        } else {
            updateOn(() => {
                setContent("Couldn't fetch data");
            });
        }
    });

    return Row({
        children: [
            SideBar(sideBarGroups),
            Row({
                children: MarkdownContainer(content),
                style: {
                    scoped: true,
                    normal: {
                        marginLeft: getVar(sideBarWidth),
                        padding: ["64px", "64px", 0, "64px"],
                        overflowX: "hidden",
                        flex: 1,
                    },
                    mediaQueries: [
                        whenLessThan("900px", {
                            normal: {
                                marginLeft: 0,
                                padding: [getVar(navBarHeight), "32px"],
                            },
                        }),
                        whenLessThan("600px", {
                            normal: {
                                padding: [getVar(navBarHeight), "16px"],
                            },
                        }),
                    ],
                },
            }),
        ],
    });
};
