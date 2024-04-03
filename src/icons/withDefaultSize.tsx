/* eslint-disable */
import { mergeProps, type Component } from 'solid-js';

/**
 * Creates new icon component.
 */
export function withDefaultSize<P extends { size?: number | string; }>(
  Component: Component<P>,
  defaultSize: number,
): Component<P> {
  return (props) => <Component {...mergeProps({ size: defaultSize }, props) as P} />;
}
