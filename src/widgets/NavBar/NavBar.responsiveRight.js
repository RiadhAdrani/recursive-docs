import { Row, Spacer } from "@riadh-adrani/recursive-web/html";
import { whenLessThan } from "@riadh-adrani/recursive-web/style/methods";
import { BurgerMenu, Close, Serach } from "../Icon";
import NavBarIcon from "./NavBar.icon";
import useNavBar from "./useNavBar";

export default () => {
    const { expanded, toggleExpanded, toggleSearchShow } = useNavBar();

    return Row({
        style: {
            scoped: true,
            normal: {
                display: "none",
            },
            mediaQueries: [whenLessThan("700px", { normal: { display: "flex" } })],
        },
        children: [
            NavBarIcon({
                path: Serach,
                onClick: toggleSearchShow,
            }),
            Spacer({ width: "5px" }),
            NavBarIcon({
                path: expanded ? Close : BurgerMenu,
                onClick: toggleExpanded,
            }),
        ],
    });
};
