# setEffect

Launch side effects.

-   Type

    ```ts
    function setEffect(key: string, dependencies: Array<any>, callback: () => Function): void;
    ```

-   Details

    The `setEffect` method create and execute the exisitng callback when it is registered for the first time. Any effect should have a unique key, and a list of dependencies.

    Dependencies are represented by an array of variables that will be tracked each time the application is updated, if there is a difference between the current array and the new one, the effect will be executed, otherwise, nothing will happen.

    The callback is a synchronous function that can return an optional callback that will be executed in case the effect is removed or when dependencies change.

    -   `key` : effect unique identifer.
    -   `dependencies` : an array of variables that will be tracked.
    -   `callback` : effect callback.

-   Example : combining data fetching

    ```ts
    const [user, setUser] = setState("user", {});
    const [data, setData] = setState("data", []);

    setEffect("get-user-data", [], () => {
        async function fetch() {
            const _user = await fetchUser();
            const _data = await fetchData();

            updateOn(() => {
                setUser(_user);
                setData(_data);
            });
        }

        fetch();
    });
    ```

-   Example : delaying data fetching (with dependencies)

    ```ts
    const [search, setSearch] = setState("search", "");
    const [result, setResult] = setState("result", []);

    setEffect("fetch-result-on-input", [search], () => {
        const timeout = setTimeout(async () => {
            const res = await fetchResult();
            setResult(res);
        }, 500);

        return () => clearTimeout(timeout);
    });
    ```
