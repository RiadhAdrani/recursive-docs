import { setState } from "../..";

export default () => {
    const [expanded, setExpanded] = setState("nav-bar-expanded-responsive", false);
    const [search, setSearch] = setState("nav-bar-search", { show: false, query: "" });

    function toggleExpanded() {
        setExpanded(!expanded);

        if (search.show) {
            toggleSearchShow();
        }
    }

    function setSeachQuery(value) {
        search.query = value;
        setSearch(search);
    }

    function toggleSearchShow() {
        search.show = !search.show;
        setSearch(search);

        if (expanded) {
            toggleExpanded();
        }
    }

    return { expanded, search, toggleExpanded, setSeachQuery, toggleSearchShow };
};
