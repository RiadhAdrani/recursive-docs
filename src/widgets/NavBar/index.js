import { Fragment } from "@riadh-adrani/recursive-web/html";
import NavBar from "./NavBar";
import NavBarResponsiveMenu from "./NavBar.responsiveMenu";

export const MenuContent = [
    { text: "Get Started", to: "/get-started" },
    { text: "Core", to: "/core" },
    { text: "Web", to: "/web" },
];

export default () => {
    return Fragment({ children: [NavBar(), NavBarResponsiveMenu()] });
};
