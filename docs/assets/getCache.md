# getCache

Retrieve an existing state from the `Cache` store.

-   Type

    ```ts
    function getCache<T>(key: string): StateArray<T>;
    ```

-   Details

    The `getCache` method attempt to retrieve a stateful object from the `Cache` store by its key:

    -   `key` : unique identifier of the state within the store.

-   Throws

    -   throws an error if the key is not of type `string`.
    -   throws an error if the state does not exist.

-   Example

    ```ts
    const [value, setValue, getValue, resetValue, previousValue] = getCache("value");
    ```

-   See also :
    [StateArray](/recursive-docs/core/StateArray)
