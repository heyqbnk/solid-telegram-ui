import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';

export interface IconProps extends JSXIntrinsicElementAttrs<'svg'> {
  /**
   * Icon size. This is value will be passed to the SVG's width and height attributes.
   */
  size?: JSXIntrinsicElementAttrs<'svg'>['width'];
}
