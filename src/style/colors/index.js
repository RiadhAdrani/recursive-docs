import { setStyle } from "../..";
import useTheme from "../../controllers/useTheme";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import colors, {
    black,
    dividerDark1,
    dividerDark2,
    dividerLight1,
    dividerLight2,
    textDark1,
    textDark2,
    textDark3,
    textDark4,
    textLight1,
    textLight2,
    textLight3,
    textLight4,
    white,
} from "./colors";

const choose = (light, dark) => {
    const { isDark } = useTheme();

    return getVar(isDark ? dark : light);
};

export const bg_color = "c-bg";
export const text_color = "c-text";
export const text_color_dark_1 = "c-text-d-1";
export const text_color_dark_2 = "c-text-d-2";
export const text_color_light_1 = "c-text-l-1";
export const text_color_light_2 = "c-text-l-2";
export const dividerLight = "c-divider-light";
export const dividerDark = "c-divider-dark";

export default () => {
    colors();

    setStyle({
        var: {
            [bg_color]: choose(white, black),
            [text_color]: choose(black, white),
            [text_color_light_1]: choose(textLight1, textDark1),
            [text_color_light_2]: choose(textLight2, textDark2),
            [text_color_dark_1]: choose(textLight3, textDark3),
            [text_color_dark_2]: choose(textLight4, textDark4),
            [dividerLight]: choose(dividerLight2, dividerDark2),
            [dividerDark]: choose(dividerLight1, dividerDark1),
        },
    });
};
