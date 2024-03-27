/* eslint-disable */
import { mergeProps, type Component } from 'solid-js';

import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';

export interface IconProps extends JSXIntrinsicElementAttrs<'svg'> {
  /**
   * Icon size. This is value will be passed to the SVG's width and height attributes.
   */
  size?: JSXIntrinsicElementAttrs<'svg'>['width'];
}

/**
 * Creates new icon component.
 */
export function createIconComponent(
  defaultSize: number,
  Component: Component<IconProps>,
): Component<IconProps> {
  return (props) => <Component {...mergeProps({ size: defaultSize }, props)} />;
}
