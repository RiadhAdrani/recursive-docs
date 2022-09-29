# updateOn

Batch update requests.

-   Type

    ```ts
    function updateOn(callback: () => void): void;
    ```

-   Details

    The `updateOn` method is used to batch update requests resulting by state changes. Should be used after asynchronous operations to update multiple states at once.

    The method is used internally by `recursive-web` to batch updates within an event callback.

    -   `callback` : callback containing state updates.

-   Example

    ```ts
    const [user, setUser] = setState("user", {});
    const [data, setData] = setState("data", []);

    setEffect("get-user-data", [], async () => {
        const _user = await fetchUser();
        const _data = await fetchData();

        updateOn(() => {
            setUser(_user);
            setData(_data);
        });
    });
    ```

-   ❌ Bad Use

    In this example, `updateOn` has no effect, and the UI will be updated twice.

    ```ts
    const [user, setUser] = setState("user", {});
    const [data, setData] = setState("data", []);

    setEffect("get-user-data", [], async () => {
        updateOn(async () => {
            const _user = await fetchUser();
            const _data = await fetchData();

            setUser(_user);
            setData(_data);
        });
    });
    ```
