import { Link } from "../..";

export default ({ text, to, color }) => {
    return Link({
        children: text,
        href: to,
        style: {
            scoped: true,
            normal: { color, padding: ["5px"], margin: ["0px", "5px"], textDecoration: "none" },
        },
    });
};
