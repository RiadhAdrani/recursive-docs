import { Column, H1, H4, H6 } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { Link } from "..";

export default () => {
    return Column({
        style: {
            inline: {
                padding: ["10px"],
            },
        },
        children: [
            H1({ children: "404", style: { inline: { color: getVar("main") } } }),
            H4({ children: "Not Found" }),
            H6({ children: "We couldn't find the address you are looking for !" }),
            Link({ children: "Go Home", href: "/", style: { inline: { padding: ["10px", 0] } } }),
        ],
    });
};
