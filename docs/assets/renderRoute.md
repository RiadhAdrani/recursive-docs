# renderRoute

Render the appropriate element representing the current route.

-   Type

    ```ts
    function renderRoute(): RecursiveElement;
    ```

-   Details

    The `renderRoute` method render the appropriate element in the current context. It is used also to render nested routes.

    If the method is used out of the context, it will return an empty string, which will not displayed by the renderer.

    > Do not use this method as the root element of an application, it may return a `string` which is an invalid root element for the `RecursiveRenderer`.

-   Example :

    ```ts
    function App() {
        return createElement("div", {
            children: [NavBar(), renderRoute(), Footer()],
        });
    }
    ```

-   ❌ Bad Use :

    ```ts
    function App() {
        return renderRoute();
    }
    ```

-   See also :
    [RecursiveElement](/recursive-docs/core/RecursiveElement)
