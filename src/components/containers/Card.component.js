import { Column, H5, P } from "@riadh-adrani/recursive-web/html";

export default (title, text) => {
    return Column({
        children: [H5({ children: title }), P({ children: text })],
        style: {
            className: "card",
            scoped: true,
            normal: {
                flex: 1,
                padding: ["20px", "30px"],
                margin: ["10px"],
                boxShadow: ["0px", "1px", "1px", "1px", "#00000022"],
            },
        },
    });
};
