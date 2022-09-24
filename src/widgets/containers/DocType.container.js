import { Div } from "@riadh-adrani/recursive-web/html";
import { repeat, whenLessThan } from "@riadh-adrani/recursive-web/style/methods";
import { ApiGroupContainer } from ".";

export default (content = [], query = "") => {
    const filtered =
        query.trim() === ""
            ? content
            : content
                  .map((group) => {
                      const content = group.content.filter((item) => {
                          return item.title.toLowerCase().includes(query.trim().toLowerCase());
                      });

                      return { ...group, content };
                  })
                  .filter((item) => item.content.length !== 0);

    return Div({
        flags: { renderIf: filtered.length !== 0 },
        style: {
            scoped: true,
            normal: {
                display: "grid",
                gridTemplateColumns: repeat(3, "1fr"),
                gridRowGap: "15px",
                gridColumnGap: "15px",
            },
            mediaQueries: [
                whenLessThan("1000px", {
                    normal: { gridTemplateColumns: repeat(2, "1fr") },
                }),
                whenLessThan("700px", {
                    normal: { gridTemplateColumns: repeat(1, "1fr") },
                }),
            ],
        },
        children: filtered.map((group) =>
            ApiGroupContainer({ title: group.name, items: group.content })
        ),
    });
};
