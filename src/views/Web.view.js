import { Column } from "@riadh-adrani/recursive-web/html";
import { getRoute } from "..";
import webApi from "../md/web-api";
import SideBarWidget from "../widgets/SideBar.widget";
import WebDoc from "../md/web-api/web.doc.md";
import ContentWithSideBarContainerWidget from "../widgets/ContentWithSideBarContainer.widget";

export default () => {
    const showLanding = getRoute() == "/web";

    return Column({
        children: [
            SideBarWidget("Web", webApi(), "/web"),
            ContentWithSideBarContainerWidget(showLanding, WebDoc),
        ],
    });
};
