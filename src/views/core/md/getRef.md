# getRef

Retrieve a native element reference from the `Ref` store.

-   Type

    ```ts
    function getRef<T>(key: string, defaultValue: T): T;
    ```

-   Details

    The `getRef` method attempt to retrieve a native element from the reference store `Ref`. An element is referenced using the `onRef` hook, which should return a `string` representing the key within the store. The `onRef` hook is executed on every state update, so it should be used with caution.

    -   `key` : unique identifier of the state within the store.

-   Creating an element reference :

    ```ts
    function AudioElement(): RecursiveElement {
        return createElement("audio", {
            hooks: {
                onRef: () => {
                    return "my-component";
                },
            },
        });
    }
    ```

-   Using onRef() :

    ```ts
    function AudioController() {
        const getAudio = () => getRef("my-component");

        function setVolume(value: number): void {
            getAudio().volume = value;
        }

        function toggleMuted(): void {
            const el = getAudio();

            el.mute = !el.muted;
        }
    }
    ```

-   See also :
    [Hooks](/recursive-docs/core/Hooks)
