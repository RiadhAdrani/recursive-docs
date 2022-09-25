import { setState } from "../..";

export default () => {
    const [expanded, setExpanded] = setState("nav-bar-expanded-responsive", true);
    const [search, setSearch] = setState("nav-bar-search", { show: false, query: "" });

    function toggleExpanded() {
        setExpanded(!expanded);
    }

    function setSeachQuery(value) {
        search.query = value;
        setSearch(search);
    }

    function toggleSearchShow() {
        search.show = !search.show;
        setSearch(search);
    }

    return { expanded, search, toggleExpanded, setSeachQuery, toggleSearchShow };
};
