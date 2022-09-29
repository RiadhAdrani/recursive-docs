# Route

Interface describing a route object.

-   Type

    ```ts
    interface Route {
        path: string;
        redirectTo: string;
        title: string;
        routes: Array<Route>;
        component: () => RecursiveElement;
        onLoad: () => void;
        onExit: () => void;
    }
    ```

-   Details

    The `Route` interface describe a route object:

    -   `path` : route's segment path. When designing the root route, this value should be `"/"`, but in case of a nested route, no backslash `/` is needed.
    -   `redirectTo` : the absolute path of a route that the application will try to redirect to. e.g : to redirect to the users path, we should use the value `/users`.
    -   `title` : string representing the title of the current route. In `recursive-web`, This value is used to change the tab title.
    -   `onLoad` : a callback executing when the route is mounted.
    -   `onExit` : a callback executing when the route is unmounted.
    -   `routes` : an array of nested routes.

-   See also :

    -   [createRoute()](/recursive-docs/core/createRoute)
    -   [RecursiveElement](/recursive-docs/core/RecursiveElement)
