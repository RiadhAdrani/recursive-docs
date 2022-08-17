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
            P({ children: "Click the button to one" }),
            Button({ children: "You Clicked me 0 times", type: "button" }),
        ],
    });
};
```

<br>

As you can see, we add 4 children to the `Column` component, each one has his unique attributes. `Img` for example, represents the `<img>` element in HTML.

<br>
