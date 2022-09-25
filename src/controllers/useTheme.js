import { setState } from "..";

const DARK = "dark";
const LIGHT = "light";

const isSystemOnDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

export default () => {
    const [theme, setTheme] = setState("color-theme", isSystemOnDarkTheme ? DARK : LIGHT);

    const isDark = theme === DARK;

    const toggleTheme = () => setTheme(isDark ? LIGHT : DARK);

    return { isDark, toggleTheme };
};
