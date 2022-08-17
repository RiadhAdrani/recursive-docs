import { Column, H1, Img, P, Row, Spacer } from "@riadh-adrani/recursive-web/html";
import logo from "../assets/logo.png";
import FilledButtonComponent from "../components/buttons/FilledButton.component";
import { Link } from "..";
import { calc, getVar } from "@riadh-adrani/recursive-web/style/methods";

export default () => {
    return Column({
        style: {
            inline: {
                borderRadius: "0px",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                height: calc("100vh", "-", getVar("navBarHeight")),
            },
        },
        children: [
            Img({ src: logo, width: 100, height: 100, alt: "recursive" }),
            H1({ children: "Recursive" }),
            Spacer({ height: "10px" }),
            P({ children: "A Javascript Framework to build beautiful applications." }),
            Spacer({ height: "20px" }),
            Row({
                children: [
                    Link({
                        href: "/get-started",
                        children: FilledButtonComponent({ text: "Get Started" }),
                    }),
                    Spacer({ width: "10px" }),
                    Link({ href: "/core", children: FilledButtonComponent({ text: "Core Docs" }) }),
                    Spacer({ width: "10px" }),
                    Link({ href: "/web", children: FilledButtonComponent({ text: "Web Docs" }) }),
                ],
            }),
        ],
    });
};
