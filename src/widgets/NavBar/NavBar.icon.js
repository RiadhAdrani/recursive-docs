import { A, CenteredRow } from "@riadh-adrani/recursive-web/html";
import Icon from "../Icon";

export default ({ path, to }) => {
    return CenteredRow({
        style: {
            scoped: true,
            normal: {
                height: "100%",
                alignItems: "center",
                margin: [0, "5px"],
            },
        },
        children: A({
            children: Icon({ path: path }),
            target: "_blank",
            href: to,
            style: { inline: { textDecoration: "none" } },
        }),
    });
};
