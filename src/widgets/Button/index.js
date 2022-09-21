import { Button } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { redDark } from "../../style/colors/colors";

const StandardButton = ({
    text,
    textColor = "inherit",
    backgroundColor = "transparent",
    borderColor = "transparent",
    borderSize = "1px",
    fontSize = "inherit",
    fontWeight = 500,
    textAlign = "center",
    cursor = "pointer",
    ...props
}) => {
    return Button({
        ...props,
        children: text,
        type: "button",
        style: {
            className: "standard-button",
            scoped: true,
            normal: {
                padding: ["5px", "20px"],
                backgroundColor,
                border: ["solid", borderSize, borderColor],
                fontSize,
                fontWeight,
                textAlign,
                cursor,
                color: textColor,
            },
            hover: { opacity: 0.7 },
            active: { opacity: 0.9 },
        },
    });
};

const FilledButton = ({
    text,
    backgroundColor = getVar(redDark),
    textColor = "inherit",
    ...props
}) => {
    return StandardButton({
        ...props,
        text,
        backgroundColor,
        textColor,
    });
};

const OutlinedButton = ({ text, borderColor = getVar(redDark), borderSize = "1px", ...props }) => {
    return StandardButton({ text, borderColor, borderSize, ...props });
};

export { StandardButton, FilledButton, OutlinedButton };
