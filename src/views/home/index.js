import {
    CenteredColumn,
    CenteredRow,
    H1,
    HorizontalLine,
    Img,
    Link,
    Spacer,
} from "@riadh-adrani/recursive-web/html";
import { calc, getVar } from "@riadh-adrani/recursive-web/style/methods";
import {
    choose,
    dividerLight,
    red_light,
    text_color_light_1,
    text_color_light_2,
} from "../../style/colors";
import { redDark, white } from "../../style/colors/colors";
import { navBarHeight } from "../../style/dimensions";
import { FilledButton, OutlinedButton } from "../../widgets/Button";
import Text from "../../widgets/Text";
import logo from "../../assets/logo.png";
import { whenLessThan } from "../../style/media-queries";

export default () => {
    const Container = CenteredColumn({
        style: {
            scoped: true,
            normal: {
                textAlign: "center",
                height: calc("100vh", "-", getVar(navBarHeight)),
                padding: [0, "10px"],
            },
        },
        children: [
            CenteredColumn({
                style: { scoped: true, normal: { padding: ["96px", 0] } },
                children: [
                    Logo(),
                    Spacer({ height: "20px" }),
                    LargeTitle("Recursive", 80),
                    LargeTitle("A Framework for dummies", 65),
                    Spacer({ height: "20px" }),
                    Text("Simple, Easy and performant framework to build UI interfaces.", {
                        size: "22px",
                        weight: 500,
                        align: "center",
                        color: getVar(text_color_light_2),
                    }),
                    HorizontalLine({
                        color: getVar(dividerLight),
                        thickness: "1px",
                        width: "80vw",
                        marginVertical: "30px",
                    }),
                    ButtonsContainer(),
                ],
            }),
        ],
    });

    return Container;
};

const LargeTitle = (text, size = 70) =>
    H1({
        children: text,
        style: {
            scoped: true,
            normal: {
                fontWeight: 900,
                fontSize: size + "px",
                color: getVar(redDark),
            },
            mediaQueries: [
                whenLessThan("900px", { normal: { fontSize: size * 0.8 + "px" } }),
                whenLessThan("700px", { normal: { fontSize: size * 0.7 + "px" } }),
                whenLessThan("600px", { normal: { fontSize: size * 0.6 + "px" } }),
            ],
        },
    });

const ButtonsContainer = () =>
    CenteredRow({
        style: {
            scoped: true,
            normal: { fontSize: "large" },
            mediaQueries: [
                whenLessThan("600px", {
                    normal: {
                        fontSize: "medium",
                        flexDirection: "column",
                        width: "100%",
                        alignItems: "stretch",
                    },
                    " a button": {
                        width: "100%",
                    },
                }),
            ],
        },
        children: [
            Link({
                href: "/get-started",
                children: OutlinedButton({
                    text: "Get Started",
                    textColor: choose(red_light, text_color_light_1),
                }),
            }),
            Spacer({ width: "10px", height: "10px" }),
            Link({
                href: "/core",
                children: FilledButton({
                    text: "Core API",
                    textColor: choose(white, text_color_light_1),
                    backgroundColor: getVar(red_light),
                }),
            }),
            Spacer({ width: "10px", height: "10px" }),
            Link({
                href: "/web",
                children: OutlinedButton({
                    text: "Web API",
                    textColor: choose(red_light, text_color_light_1),
                }),
            }),
        ],
    });

const Logo = () =>
    Img({
        src: logo,
        title: "Recursive",
        style: {
            scoped: true,
            normal: { height: "90px", width: "90px" },
            mediaQueries: [
                whenLessThan("900px", {
                    normal: { height: "80px", width: "80px" },
                }),
                whenLessThan("700px", {
                    normal: { height: "70px", width: "70px" },
                }),
                whenLessThan("600px", {
                    normal: { fheight: "60px", width: "60px" },
                }),
            ],
        },
    });
