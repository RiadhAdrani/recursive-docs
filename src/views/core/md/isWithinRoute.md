# isWithinRoute

Check if the current route is a sub route of the provided one.

- Type

  ```ts
  function isWithinRoute(parentRoute: string): boolean;
  ```

- Details

  The `isWithinRoute` check if the current route is a child route of the given route.

- Example 1 :

  ```ts
  // current route : /user/:id/section

  isWithinRoute("/user"); // => true
  isWithinRoute("/user/123/about"); // => false
  ```
