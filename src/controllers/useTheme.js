import { setState } from "..";

const DARK = "dark";
const LIGHT = "light";

export default () => {
    const [theme, setTheme] = setState("color-theme", LIGHT);

    const isDark = theme === DARK;

    const toggleTheme = () => setTheme(isDark ? LIGHT : DARK);

    return { isDark, toggleTheme };
};
