import { Button } from "@riadh-adrani/recursive-web/html";
import { contrast } from "@riadh-adrani/recursive-web/style/methods";

export default ({
    text = "Filled Button",
    onClick = () => {},
    color = "auto",
    backgroundColor = "auto",
}) => {
    return Button({
        children: text,
        style: {
            className: "filled-button",
            scoped: true,
            normal: {
                backgroundColor,
                color,
                border: "none",
                padding: ["5px", "15px"],
                cursor: "pointer",
                fontSize: "1.05em",
            },
            hover: {
                filter: contrast(0.9),
            },
            active: {
                filter: contrast(0.8),
            },
        },
        onClick,
    });
};
