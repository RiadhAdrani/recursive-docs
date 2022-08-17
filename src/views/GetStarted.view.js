import { Column } from "@riadh-adrani/recursive-web/html";
import { getRoute } from "..";
import getStarted from "../md/get-started";
import SideBarWidget from "../widgets/SideBar.widget";
import Doc from "../md/get-started/getstarted.doc.md";
import ContentWithSideBarContainerWidget from "../widgets/ContentWithSideBarContainer.widget";

export default () => {
    const showLanding = getRoute() == "/get-started";

    return Column({
        children: [
            SideBarWidget("Get Started", getStarted(), "/get-started"),
            ContentWithSideBarContainerWidget(showLanding, Doc),
        ],
    });
};
