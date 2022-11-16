# RecursiveElement

Interface describing a computed UI element.

- Type

  ```ts
  interface RecursiveElement extends BaseElement {
    style?: object;
    attributes: object;
    events: object;
    map: object | false;
    flags: Flags;
    hooks: Hooks;
    parent: RecursiveElement;
    children: Array<RecursiveElement>;
    instance: any;
    key: string;
    uid: string;
    indexInParent: number;
  }
  ```

- Details

  The RecursiveElement interface describe a UI element:

  - `style` : object containing element own style.
  - `attributes` : object listing element own attributes.
  - `events` : object containing element events.
  - `map` : a computed object that represent the map of children.
  - `flags` : element flags.
  - `hooks` : element hooks.
  - `parent` : element's parent.
  - `children` : array containing element's children.
  - `instance` : a reference to the element native instance.
  - `key` : a unique string representing the element among its siblings.
  - `uid` : a computed string, which is unique through all the tree of elements.
  - `indexInParent` : a computed number representing the index of the element in its parent.

- See also :

  - [Hooks](/recursive-docs/core/Hooks)
  - [Flags](/recursive-docs/core/Flags)
