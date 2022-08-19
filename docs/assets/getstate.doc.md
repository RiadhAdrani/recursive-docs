## `getState`

<br>

Retrieve an existing state from the `State` store by its key.

---

_type_: `function`

_arguments_ :

-   `key` : unique identifier of the state within its store.

_throws_ :

-   an error if the state does not exist.

_returns_: `StateArray`

---

##### Example

```js
const [count, setCount, getCount, resetCount, prevCount] = getState("count");
```
