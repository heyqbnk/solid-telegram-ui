import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';
import type { WithConfig } from '~/types/known.js';
import type { RequiredBy } from '~/types/utils.js';

import type { WithOptionalClasses } from '~/styles/types.js';

/**
 * Image component element keys allowed to be customized.
 */
export type ImageElementKey = 'root';

/**
 * Allowed image size.
 */
export type ImageSize = 20 | 24 | 28 | 40 | 48 | 96;

/**
 * Image component properties, having defaults.
 */
export interface ImageDefaults {
  /**
   * Image size.
   * @default 40
   */
  size?: ImageSize;
}

/**
 * Image component public properties.
 */
export interface ImageProps
  extends JSXIntrinsicElementAttrs<'img'>,
    WithConfig,
    ImageDefaults,
    WithOptionalClasses<ImageElementKey, ImageClassesProps> {
}

/**
 * Badge component properties passed to the classes hooks.
 */
export interface ImageClassesProps extends RequiredBy<ImageProps, keyof ImageDefaults> {
  /**
   * True if image is currently loading.
   */
  pending: boolean;
}
