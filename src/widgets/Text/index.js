import { Span } from "@riadh-adrani/recursive-web/html";

export default (text, { size = "1em", color = "inherit", align = "left", weight = "normal" }) => {
    return Span({
        children: text,
        style: {
            scoped: true,
            normal: {
                fontSize: size,
                color,
                textAlign: align,
                fontWeight: weight,
            },
        },
    });
};
