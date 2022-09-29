# Flags

Interface describing the flags object.

-   Type

    ```ts
    interface Flags {
        renderIf: boolean;
        forceRerender: boolean;
    }
    ```

-   Details

    The Flags interface describe a flag object:

    -   `renderIF` : conditionally render an element. If this value is set to `false`, the element will not rerender. Any other value will result in the element being normally rendered.
    -   `forceRerender` : force the rerendering of an element. If this value is set to `true`, the containing element will override the old one even if they have the same parameters and options. Any other value will have no effect.

-   See also :

    -   [RecursiveElement](/recursive-docs/core/RecursiveElement)
