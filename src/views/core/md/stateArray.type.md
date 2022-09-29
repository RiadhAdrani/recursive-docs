# StateArray

Interface describing the result of a state computation.

-   Type

    ```ts
    type StateArray<T> = [T, (value: T) => void, () => T, () => void, T];
    ```

-   Details

    The `StateArray` interface describe an array resulting of a state computation or retreival:

    -   `[0]` : the value of the state at the current rendering iteration.
    -   `[1]` : a function used to update the state.
    -   `[2]` : a function used to get the current value of the state.
    -   `[3]` : a function used to reset the state to its initial value.
    -   `[4]` : the previous value of the state at the current rendering iteration. When a state is created, this value is equal to `undefined`.

-   See also :

    -   [setState()](/recursive-docs/core/setState)
    -   [setCache()](/recursive-docs/core/setCache)
    -   [getState()](/recursive-docs/core/getState)
    -   [getCache()](/recursive-docs/core/getCache)
