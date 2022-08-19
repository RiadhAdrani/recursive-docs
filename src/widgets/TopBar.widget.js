import { A, H5, Img, Row, Spacer } from "@riadh-adrani/recursive-web/html";
import { Path, Svg } from "@riadh-adrani/recursive-web/svg";
import { getVar, rotateZ } from "@riadh-adrani/recursive-web/style/methods";
import { Link, setState } from "..";
import TextLinkComponent from "../components/links/TextLink.component";
import logo from "../assets/logo.png";

export default () => {
    const [hide, setHide] = setState("side-bar", true);

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
            mediaQueries: [
                {
                    condition: "(max-width:650px)",
                    normal: { padding: ["5px"], justifyContent: "stretch" },
                },
            ],
        },
        children: Row({
            className: "container",
            style: {
                scoped: true,
                normal: { justifyContent: "space-between" },
            },
            children: [
                Svg({
                    viewBox: "0 0 24 24",
                    height: "30px",
                    width: "30px",
                    fill: "white",
                    children: [Path({ d: "M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" })],
                    style: {
                        scoped: true,
                        normal: {
                            cursor: "pointer",
                            transform: rotateZ(hide ? "0deg" : "90deg"),
                            transitionDuration: "100ms",
                            display: "none",
                        },
                        mediaQueries: [
                            {
                                condition: "(max-width:650px)",
                                normal: { display: "inline-block" },
                            },
                        ],
                    },
                    onClick: () => {
                        setHide(!hide);
                    },
                }),
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
                            H5({
                                children: "Recursive",
                                style: {
                                    scoped: true,
                                    mediaQueries: [
                                        {
                                            condition: "(max-width:650px)",
                                            normal: { display: "none" },
                                        },
                                    ],
                                },
                            }),
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
                        }),
                    ],
                }),
            ],
        }),
    });
};
