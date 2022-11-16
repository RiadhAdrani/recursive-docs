# Hooks

Interface describing the Hooks object.

- Type

  ```ts
  interface Hooks<T> {
    beforePrepared: (el: BaseElement) => void;
    onPrepare: (el: RecursiveElement) => void;
    onCreated: (el: T) => void;
    onUpdated: (el: T) => void;
    onRef: (el: T) => string;
    beforeDestroyed: (el: T) => void;
    onDestroyed: () => void;
  }
  ```

- Details

  The Hooks interface describe a hooks object containing lifecycle callbacks:

  - `beforePrepared`: executed before processing an element, allow for additional manipulation.
  - `onPrepared`: executed after element processing is completed.
  - `onCreated` : executed when an element is injected into a container. When an element get updated with another one having the same `elementType`, this hooks won't be executed as it is considered an update.
  - `onUpdated` : executed when attributes are updated, added or removed. or when events are added or removed.a
  - `beforeDestroyed` : executed before the element get removed from its container.
  - `onDestroyed` : executed when an element is removed.
  - `onRef` : executed every time the application is rerendering, following a state update. This callback can return a `string` which will be used as a key for referencing the element in the `Ref` store. Keep in made that any unconditional state update within this callback may result in an infinite loop.

- See also :

  - [RecursiveElement](/recursive-docs/core/RecursiveElement)
  - [getRef](/recursive-docs/core/getRef)
