## `getRef`

<br>

Return the element instance with the given `key`. A default value could be passed if the reference is yet to be rendererd.

The reference is created using the `onRef` function hook within an element. The hook should return a `string` representing the key. The `onRef` hook is executed every time the application updates, the use of a state-updating method could result in an infinite loop.

---

_type_: `function`

_arguments_:

-   `key` : a string key representing the object within the `Ref` store.

-   `defaultValue` : a default value that will be returned if the object was not found in the store.

_returns_: `Object`

---

##### Example

```js
function MyComponent() {
    return createElement("video", {
        hooks: { onRef: () => "myComponent" },
        onClick: () => {
            const videoPlayer = getRef("myComponent");
            videoPlayer.muted = !videoPlayer.muted;
        },
    });
}
```
