# createElement

Create a basic UI element.

- Type

  ```ts
  function createElement(elementType: string, params: Record<string, any>): BaseElement;
  ```

- Details

  The `createElement` method is used to create a basic recursive element:

  - `elementType` : string representing the element type. e.g: In the `Web`, this value could be any `HTML` tag.
  - `params` : an object containing the element's options and parameters like events, attributes, hooks, flags ...etc.

- Throws

  - throws an error if the `elementType` is not of type `string`.

- Example

  ```ts
  const Div = createElement("div", { children: "<div/> element" });
  ```

- See also :

  - [Hooks](/recursive-docs/core/Hooks)
  - [Flags](/recursive-docs/core/Flags)
