import { Column, H2, H3, Link, P } from "@riadh-adrani/recursive-web/html";

export default () => {
    return Column({
        style: { inline: { padding: ["20px", "10px"], textAlign: "center" } },
        children: [
            H2({ children: "404" }),
            H3({ children: "Not found" }),
            P({ children: "The page you are looking for does not exist !" }),
            Link({ href: "/", children: "Go Home" }),
        ],
    });
};
