import { Input } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";

export default ({ value, placeholder, onInput = () => {}, onChange = () => {} }) => {
    return Input({
        value,
        placeholder,
        onInput,
        onChange,
        style: {
            className: "input-component",
            normal: {
                padding: ["10px"],
                fontSize: "1rem",
                borderStyle: "solid",
            },
            focus: {
                outline: ["1px", "solid", getVar("main")],
                borderColor: getVar("main"),
            },
        },
    });
};
