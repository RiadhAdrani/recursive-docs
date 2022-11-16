# createRoute

Create a route object.

- Type

  ```ts
  function createRoute(params: Route): Route;
  ```

- Details

  The `createRoute` method is used to create a route object, to be used within a `RecursiveRouter`.
  Use semicolon to define a parameterized route eg: `:id`

  _Note that only the root route should contain a slash `/`, nested routes will be processed separately._

  - `params` : route parameters.

- Example

  ```ts
  const root = createRoute({
    path: "/",
    component: HomeView,
    title: "Home",
    routes: [
      createRoute({
        path: ":id",
        component: UserView,
        title: "User",
      }),
      createRoute({
        path: "docs",
        component: DocsView,
        title: "Documentation",
      }),
      createRoute({
        path: "redirect",
        component: () => "Redirect",
        redirectTo: "/docs",
      }),
    ],
  });
  ```

- See also :
  [Route](/recursive-docs/core/Route)
