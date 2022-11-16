# getAnchor

Retrieve the current anchor if it exists.

- Type

  ```ts
  function getAnchor(): string;
  ```

- Details

  The `getAnchor` method allow the retrieval of the currently target anchor element.

  Used to scroll into a view after an asynchronous data is loaded.

- Example 1 :

  ```ts
  // current route : /user#anchor

  const anchor = getAnchor(); // => #anchor
  ```
