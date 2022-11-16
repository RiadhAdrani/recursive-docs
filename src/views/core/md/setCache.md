# setCache

Create a new stateful object within the `Cache` store.

- Type

  ```ts
  function setCache<T>(
    key: string,
    value: T,
    onInit?: () => Function,
    onRemoved?: () => void
  ): StateArray<T>;
  ```

- Details

  The `setCache` method creates a new state entry within the `Cache` store. Such state is persisted as long as the number of the stateful objects does not exceed the maximum allocated value, which is by default `1000`.

  The method accepts up to 4 arguments:

  - `key` : unique identifier of the state within the store.
  - `value` : the initial value of the state.
  - `onInit` : a initialization callback, which will fire when the state has been successfully added. It can return an optional callback that will be executed when the state is removed.
  - `onRemoved` : a callback that will fire when the state has been removed from the store.

- Throws

  - throws an error if the key is not of type `string`.

- Example

  ```ts
  const [value, setValue, getValue, resetValue, previousValue] = setCache(
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
