### Write your first application

<br>

We will be creating a `Button Clicker` app. You will learn how to create the `UI`, how to create a `state`, update it and we will have a quick look at `routing`.

<br>

run the following command line to start the development server, which will watch for the changes you make within the code and will perform `hot reloading`:

<br>

```bash
npm run start
```

<br>

A new browser tab will open automatically at [`localhost:8080`](http://localhost:8080/).

<br>

#### From scratch

---

We will be starting from scratch, so we have delete some lines of code, well maybe a lot.

-   Delete the content of the `src/views` directory.

-   Delete the content of the `src/components` directory.

-   Delete the `src/App.Style.js` file.

-   Within `src/App.Routes.js` make sure you delete every route, and replace it with this:

<br>

```js
import { route } from ".";

export default route({
    path: "/",
    title: "Button Clicker",
    component: () => "",
});
```

<br>

-   Within your `src/App.Tree.js` file, make sure to export an empty function:

<br>

```js
export default () => {};
```

<br>

> Some error will appears, but don't worry, we will deal with them now.

<br>

#### Creating the UI

---

Like every other framework/library, `Recursive` is component-based. `Recursive Web` for instance, provide the basic `HTML` elements as ready-made components with the addition of some `utility` ones like **Row**, **Column** or **Spacer** to accelerate development.

<br>

Open `App.Tree.js` file and let's import what we need :

```js
import { H1, Column, Button, P, Img } from "@riadh-adrani/recursive-web/html";
```

<br>

First, we need to return something for the exported function , this will be the root element. Let's wrap the application within a `Column` component:

> **⚠ WARNING**  
> The root element should be of type `RecursiveElement`, if you return a `string`, a `number` or an `object`, you will get an error saying that the root element is not a `RecursiveElement`. The method `Column` for instance, uses `createRecursiveElement` to generate an element of that type.

<br>

```js
import { H1, Column, Button, P, Img } from "@riadh-adrani/recursive-web/html";

export default () => {
    return Column({
        children: [],
    });
};
```

<br>

Now, let's add a `logo`, a `title`, some `text` and a `button` :

<br>

```js
import { H1, Column, Button, P, Img } from "@riadh-adrani/recursive-web/html";

import logo from "./assets/logo.png";

export default () => {
    return Column({
        children: [
            Img({ src: logo, height: 100, width: 100, alt: "logo" }),
            H1({ children: "Button Clicker" }),
            P({ children: "Click the button" }),
            Button({ children: "You Clicked me 0 times", type: "button" }),
        ],
    });
};
```

<br>

As you can see, we add 4 children to the `Column` component, each one has his unique attributes. `Img` for example, **Img** represents the `<img>` element in HTML. But as you can observe, the app is _ugly_ and _static_.

<br>

#### Adding the state

---

To add state we need to import `setState` method and use it within our component function:

<br>

```js
import { H1, Column, Button, P, Img } from "@riadh-adrani/recursive-web/html";
import { setState } from "./index"; // 👈 we import setState like this.
import logo from "./assets/logo.png";

export default () => {
    const [count, setCount] = setState("btn-click", 0); // 👈 and then we use it here.

    return Column({
        children: [
            Img({ src: logo, height: 100, width: 100, alt: "logo" }),
            H1({ children: "Button Clicker" }),
            P({ children: "Click the button" }),
            Button({ children: "You Clicked me 0 times", type: "button" }),
        ],
    });
};
```

<br>

> **⚠ WARNING**  
> The `setState` method should always be used within the component function.

<br>

The `setState` method accepts up to 4 arguments, but we will be using only the first 2:

1.  `key` : unique identifier of the state within the `State` store. in our case its "**btn-click**".
2.  `initialValue` : the initial value of the state which will be **0**.

Let's add an `onClick` listener to the **button** that will increase the count state each time it is clicked. We need to update the text of the `Button` too in order to see the changes.

<br>

```js
import { H1, Column, Button, P, Img } from "@riadh-adrani/recursive-web/html";
import { setState } from "./index";
import logo from "./assets/logo.png";

export default () => {
    const [count, setCount] = setState("btn-click", 0);

    return Column({
        children: [
            Img({ src: logo, height: 100, width: 100, alt: "logo" }),
            H1({ children: "Button Clicker" }),
            P({ children: "Click the button" }),
            Button({
                // 👇 We update the child text
                children: `You Clicked me ${count} time${count > 1 ? "s" : ""}`,
                type: "button",
                // 👇 We add an onClick listener
                onClick: () => {
                    // We increment the count by one time
                    setCount(count + 1);
                },
            }),
        ],
    });
};
```

<br>

The app is almost done, we will

<br>

#### Styling

---

We will add first some a global style using `setStyle` method, just after the `setState` call, we will add this :

<br>

```js
setStyle({
    selectors: {
        html: {
            fontFamily: "system-ui",
            fontSize: "17px",
        },
    },
});
```

<br>

To add component-specific style, we can use the `style` property. we will add some padding, a border and align the app container in the center:

```js
return Column({
    // 👇 using style property
    style: {
        // 👇 className is mandatory
        // 👇 if you want to create an external Cascading Style Sheet
        className: "app",
        // 👇 the classic class selector,
        // 👇 the style of the component in its normal state.
        normal: {
            alignItems: "center",
            width: "300px",
            margin: [0, "auto"],
            padding: ["30px", "20px"],
            border: ["1px", "solid", "#1e1e1e"],
            borderRadius: "5px",
        },
    },
    children: [
        Img({ src: logo, height: 100, width: 100, alt: "logo" }),
        H1({ children: "Button Clicker" }),
        P({ children: "Click the button" }),
        Button({
            children: `You Clicked me ${count} time${count > 1 ? "s" : ""}`,
            type: "button",
            onClick: () => {
                setCount(count + 1);
            },
        }),
    ],
});
```

<br>

> **Also...**  
> You can set the `scoped` key, within the style property, to `true`, it will generate a unique **ClassName** for you.

<br>

Let's style our button now, we will make it **black** when its hovered on, and **red** when it is clicked :

```js
Button({
    children: `You Clicked me ${count} time${count > 1 ? "s" : ""}`,
        type: "button",
        style: {
            // 👇 scoped set to true, it will generate a className for us.
            scoped: true,
            // 👇 again, the style in the normal state.
            normal: {
                padding: ["5px", "10px"],
                fontFamily: "monospace",
                backgroundColor: "lightgray",
                border: "none",
                borderRadius: "2px",
                cursor: "pointer",
                transitionDuration: "100ms",
            },
            // 👇 the style when the button is hovered on.
            // think of it as className:hover
            hover: {
                backgroundColor: "black",
                color: "white",
            },
            // 👇 the style of the button when clicked.
            // think of it as className:active
            active: {
                backgroundColor: "red",
            },
        },
        onClick: () => {
            setCount(count + 1);
        },
    }),
```

<br>

Congratulation 🎉 ! You completed your first app using `Recursive` ! You can start discovering the framework through the documentation: [`Core documentation`](/recursive-docs/core) and [`Web documentation`](/recursive-docs/web).

<br>

<br>

<br>

<br>
