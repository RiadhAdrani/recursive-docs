## `renderRoute`

<br>

Render the appropriate component in the current context.
Used also to render `sub-routes` within `routes`.
If the method is used out of context, it will return an empty string.

Do not use this method as the root element,
because it may return a `String`
which is an invalid input for the `Renderer`.

---

_type_: `function`

_returns_: `RecursiveElement`

---

##### Example

```js
const MyApp = () => {
    return createElement("div", { children: renderRoute() });
};
```
