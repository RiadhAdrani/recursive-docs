## `route`

<br>

Create a new route object.

<br>

---

_type_: `function`

_arguments_:

-   `path` : a string representing the route. Should not contains `/` apart from the root route.
-   `redirectTo` : an optional string representing the full path to which this route should redirect to.
-   `title` : an optional string representing the title that should be displayed.
-   `component` : a function that retruns the component to be displayed when this route is mounted.
-   `routes` : an optional array of routes containing children routes.
-   `onLoad`: an optional callback that will be executed when the route has been mounted.
-   `onExit` : an optional callback that will be executed when the route has been unmounted.

_returns_: `Route`

---

##### Example

```js
route({
    path: "/",
    title: "Home",
    component: () => HomeComponent(),
    onLoad: () => {
        console.log("Hello world");
    },
    onExit: () => {
        console.log("Bye world");
    }
    routes: [
        route({
            path:"users",
            title: "Users",
            component: () => UsersComponent()
        }),
        route({
            path:"posts",
            title: "Posts",
            component: () => PostsComponent()
        })
    ]
});
```
