import { Link } from "../..";

export default ({ text, to, color }) => {
    return Link({
        children: text,
        href: to,
        style: {
            scoped: true,
            normal: { color, padding: ["5px"], margin: ["0px", "5px"], textDecoration: "none" },
            mediaQueries: [
                {
                    condition: "(max-width:650px)",
                    normal: { fontSize: "0.95em" },
                },
                {
                    condition: "(max-width:550px)",
                    normal: { fontSize: "0.9em" },
                },
            ],
        },
    });
};
