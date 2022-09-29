# getState

Retrieve an existing state from the `State` store.

-   Type

    ```ts
    function getState<T>(key: string): StateArray<T>;
    ```

-   Details

    The `getState` method attempt to retrieve a stateful object from the `State` store by its key:

    -   `key` : unique identifier of the state within the store.

-   Throws

    -   throws an error if the key is not of type `string`.
    -   throws an error if the state does not exist.

-   Example

    ```ts
    const [value, setValue, getValue, resetValue, previousValue] = getState("value");
    ```

-   See also :
    [StateArray](/recursive-docs/core/StateArray)
