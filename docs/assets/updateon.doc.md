## `updateOn`

<br>

Used to batch update requests.

Used within an asynchronous function to update multiple states at once.

**_`The callback should not be asynchronous, it will result in unexpected behavior.`_**

---

_type_: `function`

_arguments_:

-   `callback` : a callback that will be executed.

_returns_: `void`

---

##### Example

```js
function MyComponent() {
    const [alert, setAlert] = setState("alert", "");
    const [user, setUser] = setState("user", null, async () => {
        const data = await fetchUser();

        updateOn(() => {
            setUser(data);
            setAlert("User fetched successfully.");
        });
    });
}
```

##### Bad use ❌

```js
function MyComponent() {
    const [alert, setAlert] = setState("alert", "");
    const [user, setUser] = setState("user", null, () =>
        updateOn(async () => {
            const data = await fetchUser();

            setUser(data);
            setAlert("User fetched successfully.");
        })
    );
}
```
