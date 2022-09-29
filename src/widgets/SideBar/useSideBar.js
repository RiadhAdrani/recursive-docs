import { setState } from "../..";

export default () => {
    const [showMenu, setShowMenu] = setState("show-side-bar-menu", false);

    return [showMenu, setShowMenu];
};
