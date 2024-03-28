import type { JSX } from 'solid-js';

/**
 * Merges specified JSX event handlers into a single one.
 * @param handlers - list of handlers to merge.
 * @returns Handler which calls all specified handlers.
 */
export function mergeHandlers<Element, Ev extends Event>(
  ...handlers: (JSX.EventHandlerUnion<Element, Ev> | undefined)[]
): JSX.EventHandlerUnion<Element, Ev> {
  return (event) => {
    handlers.forEach((h) => {
      if (h) {
        if (typeof h === 'object') {
          h[0](h[1], event);
        } else {
          h(event);
        }
      }
    });
  };
}
