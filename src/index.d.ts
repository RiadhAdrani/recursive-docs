import { FreeStyleSheet, StyleSheet } from "@riadh-adrani/recursive-web/lib";
import { RecursiveElement, StateArray } from "@riadh-adrani/recursive/lib";

/**
 * Return parameters as a keyed object.
 */
export function getParams(): { [key: string]: string };

/**
 * Redirect the app to the provided path.
 * @param path destination.
 */
export function goTo(path: string): void;

/**
 * Return the appropriate component.
 *
 * _`Do not use as the root of the app, should be nested in another element instead.`_
 */
export function renderRoute(): RecursiveElement;

/**
 * Retrieve an existing stateful object from the `state` store if it exists.
 * @param key identifier
 * @throw an error if the state does not exist.
 */
export function getState(key: string): StateArray<any>;

/**
 * Create and save a stateful object in the `state` store within the global `StateStore`.
 *
 * Objects created by this method are deleted when they are not used or called in a rendering iteration.
 * @param key unique identifier of the state whithin its store.
 * @param value initial value
 * @param onInit a function that will execute when the state is initialized.
 * If the return value of this function is a function itself,
 * it will be executed whe the state is destroyed.
 * @param onRemoved a function that will execute when the state has been destroyed.
 */
export function setState<T>(
    key: string,
    value: T,
    onInit: () => Function,
    onRemoved: () => void
): StateArray<T>;

/**
 * Retrieve an existing stateful object from the `cache` store if it exists.
 * @param key identifier
 * @throw an error if the state does not exist.
 */
export function getCache(key: string): StateArray<any>;

/**
 * Create and save a stateful object in the `cache` store within the global `StateStore`.
 *
 * Objects created by this method are not deleted when they are not used,
 * unless the number of cached object exceed the maximum allocated size which is by default `1000`.
 *
 * Older states will be deleted first.
 *
 * @param key unique identifier of the state whithin its store.
 * @param value initial value
 * @param onInit a function that will execute when the state is initialized.
 * If the return value of this function is a function itself,
 * it will be executed whe the state is destroyed.
 * @param onRemoved a function that will execute when the state has been destroyed.
 */
export function setCache<T>(
    key: string,
    value: T,
    onInit: () => Function,
    onRemoved: () => void
): StateArray<T>;

/**
 * Retrieve an existing element from the `reference` store, or the default value.
 * @param key identifier
 */
export function getRef(key: string, defaultValue: HTMLElement): HTMLElement;

/**
 * Execute an effect.
 * @param key identifier.
 * @param dependencies effect dependencies.
 * @param callback effect callback.
 */
export function setEffect(key: string, dependencies: Array<any>, callback: () => Function): void;

/**
 * Update the tab title.
 * @param title new title.
 */
export function updateTitle(title: string): void;

/**
 * Returns the current route path.
 */
export function getRoute(): string;

/**
 * Create a new component style sheet.
 * @param param style sheet.
 */
export function createComponentStyle(param: StyleSheet): StyleSheet;

/**
 * Add a style sheet that will be evaluated every time the app is updated.
 * @param styleSheet style sheet object.
 */
export function setStyle(styleSheet: FreeStyleSheet): void;

/**
 * Batch update made within the callback.
 *
 * Used generally to state update after an asynchronous call.
 *
 * The callback function should not be an asynchronous function.
 *
 * @example
 * // Correct use
 * const data = await getData();
 * updateOn(() => {
 *      setState1(data.value1);
 *      setState2(data.value2);
 * })
 *
 * // Bad use and can cause unexpected behavior
 *
 * updateOn(async () => {
 *      const data = await getData();
 *
 *      setState1(data.value1);
 *      setState2(data.value2);
 *
 * })
 * @param callback callback
 */
export function updateOn(callback: () => void): void;
