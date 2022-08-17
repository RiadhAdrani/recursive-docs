## `setState`

<br>

Create a new stateful object within the `State` store. Objects created by this method are presisted within the store as long as they are needed and they will removed otherwise.

---

_type_: `function`

_arguments_ :

-   `key` : unique identifier of the state within its store.
-   `initialValue` : initial value of the state.
-   `onInit` : a callback that will be called when the state has finished its initialization. Used to subscribe to live update from a server. Another `callback` could be returned which will be executed when the event has been removed.
-   `onRemoved` : a callback that will run when the state has been ejected from the store.

_throws_ :

-   an error when the key is not of type `String`.

_returns_: `StateArray`

---

##### Example

```js
function onCountInit() {
    // Do something
}
function onCountRemoved() {
    // Do something
}

const [count, setCount, getCount, resetCount, prevCount] = setState(
    "count",
    0,
    onCountInit,
    onCountRemoved
);
```
