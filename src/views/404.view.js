import { Column, H1, H4, P, Spacer } from "@riadh-adrani/recursive-web/html";
import { Link } from "..";

export default () => {
    return Column({
        style: { inline: { padding: "20px" } },
        children: [
            H1({ children: "404" }),
            H4({ children: "Not Found" }),
            P({ children: "This page no longer exists !" }),
            Spacer({ height: "20px" }),
            Link({ children: "Go Home", href: "/" }),
        ],
    });
};
