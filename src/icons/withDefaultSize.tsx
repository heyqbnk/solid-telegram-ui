import { type Component, mergeProps } from 'solid-js';

/**
 * Creates new icon component.
 */
export function withDefaultSize<P extends { size?: number; }>(
  Component: Component<P>,
  defaultSize: number,
): Component<P> {
  return (props) => <Component {...mergeProps({ size: defaultSize }, props) as P} />;
}
