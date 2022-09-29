# goTo

Attempt to redirect the application to the given path.

-   Type

    ```ts
    function goTo(path: string): void;
    ```

-   Details

    The `goTo` method is used to attempt to change the current routing directory and load the new UI. If no route match the given path, a `/404` route will be mounted instead.

    Note that the `goTo` method is considered as a state update.

    -   `path`: string representing the absolute path of the destination.

-   Example :

    ```ts
    function onButtonClicked() {
        goTo("/user");
    }
    ```
