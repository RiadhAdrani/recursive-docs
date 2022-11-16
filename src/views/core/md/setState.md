# setState

Create a new stateful object within the `State` store.

- Type

  ```ts
  function setState<T>(
    key: string,
    value: T,
    onInit?: () => Function,
    onRemoved?: () => void
  ): StateArray<T>;
  ```

- Details

  The `setState` method creates a new state entry within the `State` store. Such state is persisted as long as it is needed in the last rendering iteration, in other words, when it is no longer needed in the tree of components it is ejected from the store.

  The method accepts up to 4 arguments:

  - `key` : unique identifier of the state within the store.
  - `value` : the initial value of the state.
  - `onInit` : a initialization callback, which will fire when the state has been successfully added. It can return an optional callback that will be executed when the state is removed.
  - `onRemoved` : a callback that will fire when the state has been removed from the store.

- Throws

  - throws an error if the key is not of type `string`.

- Example

  ```ts
  const [value, setValue, getValue, resetValue, previousValue] = setState(
    "value",
    0,
    async () => {
      const res = await fetchData();

      setValue(res.value);

      return () => res.unsubscribe();
    },
    () => {
      console.log("Value removed");
    }
  );
  ```

- See also :
  [StateArray](/recursive-docs/core/StateArray)
