import { setStyle } from "../..";
import { ManropeFont, notoFont, SourceFont } from "./fonts";

export default () =>
    setStyle({
        imports: [
            "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap",
        ],
        var: {
            [SourceFont]: "'Source Sans Pro', sans-serif",
            [ManropeFont]: "'Manrope', sans-serif",
            [notoFont]: "'Noto Sans', sans-serif",
        },
    });
