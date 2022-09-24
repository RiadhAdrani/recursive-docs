import { setStyle } from "../..";
import useTheme from "../../controllers/useTheme";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import colors, {
    black,
    blackSoft,
    blueDark,
    blueDarker,
    blueLight,
    blueLighter,
    dividerDark1,
    dividerDark2,
    dividerLight1,
    dividerLight2,
    redDark,
    redDarker,
    redLight,
    redLighter,
    textDark1,
    textDark2,
    textDark3,
    textDark4,
    textDarkCode,
    textLight1,
    textLight2,
    textLight3,
    textLight4,
    textLightCode,
    white,
    whiteSoft,
} from "./colors";

export const choose = (light, dark) => {
    const { isDark } = useTheme();

    return getVar(isDark ? dark : light);
};

export const bg_color = "c-bg";
export const bg_color_soft = "c-bg-soft";
export const text_color = "c-text";
export const text_color_dark_1 = "c-text-d-1";
export const text_color_dark_2 = "c-text-d-2";
export const text_color_light_1 = "c-text-l-1";
export const text_color_light_2 = "c-text-l-2";
export const dividerLight = "c-divider-light";
export const dividerDark = "c-divider-dark";
export const red_light = "c-red--light";
export const red_dark = "c-red--dark";
export const blue_light = "c-blue--light";
export const blue_dark = "c-blue--dark";
export const text_code = "c-text--code";

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
            [red_light]: choose(redDark, redLight),
            [red_dark]: choose(redDarker, redLighter),
            [blue_light]: choose(blueDarker, blueLighter),
            [blue_dark]: choose(blueDark, blueLight),
            [bg_color_soft]: choose(whiteSoft, blackSoft),
            [text_code]: choose(textLightCode, textDarkCode),
        },
    });
};
