import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';
import type { WithConfig } from '~/types/known.js';
import type { RequiredBy } from '~/types/utils.js';

import type { WithOptionalClasses } from '~/styles/types.js';

import type { ImageSize } from '~/components/Image/Image.types.js';

/**
 * Avatar component element keys allowed to be customized.
 */
export type AvatarElementKey = 'root' | 'image' | 'caption';

/**
 * Allowed Avatar size.
 */
export type AvatarSize = ImageSize;

/**
 * Avatar component properties, having defaults.
 */
export interface AvatarDefaults {
  /**
   * Image size.
   * @default 40
   */
  size?: AvatarSize;
}

/**
 * Avatar component public properties.
 */
export interface AvatarProps
  extends JSXIntrinsicElementAttrs<'img'>,
    WithConfig,
    AvatarDefaults,
    WithOptionalClasses<AvatarElementKey, AvatarClassesProps> {
  /**
   * Up to 2 letters to display in case image could not be loaded or not specified at all.
   */
  caption?: string;
}

/**
 * Avatar component properties passed to the classes hooks.
 */
export interface AvatarClassesProps extends RequiredBy<AvatarProps, keyof AvatarDefaults> {
}
