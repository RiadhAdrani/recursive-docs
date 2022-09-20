import { setStyle } from "../..";

export const navBarHeight = "d-nav-bar-height";

export default () => {
    setStyle({
        var: {
            [navBarHeight]: "55px",
        },
    });
};
