import { setState } from "../..";
import { getCore } from "../../views/core/data";

const allData = [...getCore()];

export default () => {
    const [expanded, setExpanded] = setState("nav-bar-expanded-responsive", false);
    const [search, setSearch] = setState("nav-bar-search", { show: false, query: "", result: [] });

    function toggleExpanded() {
        setExpanded(!expanded);

        if (search.show) {
            toggleSearchShow();
        }
    }

    function setSeachQuery(value) {
        search.query = value;
        search.result = allData.filter((item) => {
            if (value === "") return false;

            return item.path.toLowerCase().trim().includes(value.toLowerCase().trim());
        });

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
