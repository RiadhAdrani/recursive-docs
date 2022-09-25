import { A, CenteredRow, Div } from "@riadh-adrani/recursive-web/html";
import Icon from "../Icon";

export default ({ path, to, onClick }) => {
    const icon = Icon({ path });

    const Content =
        typeof onClick === "function"
            ? Div({ children: icon, onClick })
            : A({
                  children: icon,
                  target: "_blank",
                  href: to,
                  style: { inline: { textDecoration: "none" } },
              });

    return CenteredRow({
        style: {
            scoped: true,
            normal: {
                height: "100%",
                alignItems: "center",
                margin: [0, "5px"],
                cursor: "pointer",
            },
        },
        children: Content,
    });
};
