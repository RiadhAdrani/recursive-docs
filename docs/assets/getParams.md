# getParams

Retrieve current route parameters.

-   Type

    ```ts
    function getParams(): { [key: string]: string };
    ```

-   Details

    The `getParams` method is used to retrieve the current route parameters as a key-value pair object.

-   Example 1 :

    ```ts
    // current route : /user=:id;

    const { id } = getParams();
    ```

-   Example 2 :

    ```ts
    // current route : /user=:id;/section=:section;

    const { id, section } = getParams();
    ```
