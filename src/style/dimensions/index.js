import { setStyle } from "../..";

export const navBarHeight = "d-nav-bar-height";
export const sideBarWidth = "d-side-bar-width";

export default () => {
    setStyle({
        var: {
            [navBarHeight]: "55px",
            [sideBarWidth]: "295px",
        },
    });
};
