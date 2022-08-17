import { A, H5, Img, Row, Spacer } from "@riadh-adrani/recursive-web/html";
import { getVar, grayScale, contrast } from "@riadh-adrani/recursive-web/style/methods";
import { Link } from "..";
import TextLinkComponent from "../components/links/TextLink.component";
import logo from "../assets/logo.png";

export default () => {
    return Row({
        style: {
            className: "top-bar",
            normal: {
                backgroundColor: getVar("backgroundDarker"),
                borderRadius: "0px",
                color: "white",
                padding: ["10px", "10px"],
                position: "sticky",
                top: "0px",
                justifyContent: "center",
                height: getVar("navBarHeight"),
                boxSizing: "border-box",
            },
        },
        children: Row({
            className: "container",
            style: {
                inline: { justifyContent: "space-between" },
            },
            children: [
                Link({
                    href: "/",
                    style: { scoped: "true", normal: { textDecoration: "none" } },
                    children: Row({
                        style: { scoped: true, normal: { alignItems: "center" } },
                        children: [
                            Img({
                                src: logo,
                                height: 25,
                                width: 25,
                                style: {
                                    scoped: true,
                                },
                            }),
                            Spacer({ width: "10px" }),
                            H5({ children: "Recursive" }),
                        ],
                    }),
                }),
                Row({
                    children: [
                        TextLinkComponent({ text: "Get Started", to: "/get-started" }),
                        TextLinkComponent({ text: "Core", to: "/core" }),
                        TextLinkComponent({ text: "Web", to: "/web" }),
                    ],
                }),
                Row({
                    children: [
                        A({
                            children: "Contribute",
                            href: "https://github.com/RiadhAdrani/recursive",
                            target: "_blank",
                            style: { inline: { textDecoration: "none" } },
                        }),
                    ],
                }),
            ],
        }),
    });
};
