import { MediaQuery, SelectorTypes } from "@riadh-adrani/recursive-web";

export function useQuery(props: {
    "(max-width:1600px)": SelectorTypes;
    [key: string]: SelectorTypes;
}): Array<MediaQuery>;

export function whenLessThan(size: string, content: SelectorTypes): MediaQuery;
