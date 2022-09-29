export const useQuery = (props) => {
    return Object.keys(props).map((query) => ({
        condition: query,
        ...props[query],
    }));
};

export const whenLessThan = (size, content) => {
    return { condition: `(max-width:${size})`, ...content };
};
