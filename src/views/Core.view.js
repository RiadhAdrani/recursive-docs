import { Column } from "@riadh-adrani/recursive-web/html";
import { getRoute } from "..";
import topLevelApi from "../md/top-level-api";
import SideBarWidget from "../widgets/SideBar.widget";
import CoreDoc from "../md/top-level-api/core.doc.md";
import ContentWithSideBarContainerWidget from "../widgets/ContentWithSideBarContainer.widget";

export default () => {
    const showLanding = getRoute() == "/core";

    return Column({
        children: [
            SideBarWidget("Core", topLevelApi(), "/core"),
            ContentWithSideBarContainerWidget(showLanding, CoreDoc),
        ],
    });
};
