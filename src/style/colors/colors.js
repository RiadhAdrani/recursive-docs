import { rgba } from "@riadh-adrani/recursive-web/style/methods";
import { setStyle } from "../..";

export const white = "c-white";
export const whiteSoft = "c-white-soft";
export const whiteMute = "c-white-mute";

export const black = "c-black";
export const blackRich = "c-black-rich";
export const blackSoft = "c-black-soft";
export const blackMute = "c-black-mute";

export const gray = "c-gray";

export const grayLight1 = "c-gray-light-1";
export const grayLight2 = "c-gray-light-2";
export const grayLight3 = "c-gray-light-3";
export const grayLight4 = "c-gray-light-4";
export const grayLight5 = "c-gray-light-5";

export const grayDark1 = "c-gray-dark-1";
export const grayDark2 = "c-gray-dark-2";
export const grayDark3 = "c-gray-dark-3";
export const grayDark4 = "c-gray-dark-4";
export const grayDark5 = "c-gray-dark-5";

export const dividerLight1 = "c-divider-light-1";
export const dividerLight2 = "c-divider-light-2";

export const dividerDark1 = "c-divider-dark-1";
export const dividerDark2 = "c-divider-dark-2";

export const textLight1 = "c-text-light-1";
export const textLight2 = "c-text-light-2";
export const textLight3 = "c-text-light-3";
export const textLight4 = "c-text-light-4";

export const textDark1 = "c-text-dark-1";
export const textDark2 = "c-text-dark-2";
export const textDark3 = "c-text-dark-3";
export const textDark4 = "c-text-dark-4";

export const textLightCode = "c-text-light-code";
export const textDarkCode = "c-text-dark-code";

export const green = "c-green";
export const greenLight = "c-green-light";
export const greenLighter = "c-green-lighter";
export const greenDark = "c-green-dark";
export const greenDarker = "c-green-darker";

export const blue = "c-blue";
export const blueLight = "c-blue-light";
export const blueLighter = "c-blue-lighter";
export const blueDark = "c-blue-dark";
export const blueDarker = "c-blue-darker";

export const yellow = "c-yellow";
export const yellowLight = "c-yellow-light";
export const yellowLighter = "c-yellow-lighter";
export const yellowDark = "c-yellow-dark";
export const yellowDarker = "c-yellow-darker";

export const red = "c-red";
export const redLight = "c-red-light";
export const redLighter = "c-red-lighter";
export const redDark = "c-red-dark";
export const redDarker = "c-red-darker";

export const pink = "c-pink";
export const pinkLight = "c-pink-light";
export const pinkLighter = "c-pink-lighter";
export const pinkDark = "c-pink-dark";
export const pinkDarker = "c-pink-darker";

export default () =>
    setStyle({
        var: {
            [white]: "#ffffff",
            [whiteSoft]: "#f9f9f9",
            [whiteMute]: "#f1f1f1",
            [black]: "#1a1a1a",
            [blackRich]: "#000000",
            [blackSoft]: "#242424",
            [blackMute]: "#2f2f2f",
            [gray]: "#8e8e8e",
            [grayLight1]: "#aeaeae",
            [grayLight2]: "#c7c7c7",
            [grayLight3]: "#d1d1d1",
            [grayLight4]: "#e5e5e5",
            [grayLight5]: "#f2f2f2",
            [grayDark1]: "#636363",
            [grayDark2]: "#484848",
            [grayDark3]: "#3a3a3a",
            [grayDark4]: "#282828",
            [grayDark5]: "#202020",
            [dividerLight1]: rgba(60, 60, 60, 0.29),
            [dividerLight2]: rgba(60, 60, 60, 0.12),
            [dividerDark1]: rgba(84, 84, 84, 0.65),
            [dividerDark2]: rgba(84, 84, 84, 0.48),
            [textLight1]: "#213547",
            [textLight2]: rgba(60, 60, 60, 0.7),
            [textLight3]: rgba(60, 60, 60, 0.33),
            [textLight4]: rgba(60, 60, 60, 0.18),
            [textDark1]: "#ffffffde",
            [textDark2]: "#ebebeb99",
            [textDark3]: "#ebebeb61",
            [textDark4]: "#ebebeb2e",
            [textLightCode]: "#476582",
            [textDarkCode]: "#aac8e4",
            [green]: "#42b883",
            [greenLight]: "#42d392",
            [greenLighter]: "#35eb9a",
            [greenDark]: "#33a06f",
            [greenDarker]: "#155f3e",
            [blue]: "#3b8eed",
            [blueLight]: "#549ced",
            [blueLighter]: "#50a2ff",
            [blueDark]: "#3468a3",
            [blueDarker]: "#255489",
            [yellow]: "#ffc517",
            [yellowLight]: "#ffe417",
            [yellowLighter]: "#ffff17",
            [yellowDark]: "#e0ad15",
            [yellowDarker]: "#bc9112",
            [red]: "#ed3c50",
            [redLight]: "#f43771",
            [redLighter]: "#fd1d7c",
            [redDark]: "#cd2d3f",
            [redDarker]: "#ab2131",
            [pink]: "#de41e0",
            [pinkLight]: "#e936eb",
            [pinkLighter]: "#f616f8",
            [pinkDark]: "#823c83",
            [pinkDarker]: "#602960",
        },
    });
