# getRoute

Retrieve the current route path.

-   Type

    ```ts
    function getRoute(): string;
    ```

-   Details

    The `getRoute` method is used to retrieve the current route path as a string. If the route contains parameters, the value returned contains the actual parameters, not just the template.

-   Example 1 :

    ```ts
    // current route : /user

    const currentRoute = getRoute(); // => /user
    ```

-   Example 2 :

    ```ts
    // current route : /user=:id;

    const currentRoute = getRoute(); // => /user=:16564;
    ```
