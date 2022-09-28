# route

Create a route object.

-   Type

    ```ts
    function route(params: Route): Route;
    ```

-   Details

    The `route` method is used to create a route object, to be used within a `RecursiveRouter`.

    -   `params` : route parameters.

-   Example

    ```ts
    const root = route({
        path: "/",
        component: HomeView,
        title: "Home",
        routes: [
            route({
                path: "user=:id;",
                component: UserView,
                title: "User",
            }),
            route({
                path: "docs",
                component: DocsView,
                title: "Documentation",
            }),
            route({
                path: "redirect",
                component: () => "Redirect",
                redirectTo: "/docs",
            }),
        ],
    });
    ```

-   See also :
    [Route](/recursive-docs/core/Route)
