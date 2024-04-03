import type { WithConfig } from '~/types/known.js';
import type { RequiredBy } from '~/types/utils.js';

import type { WithOptionalClasses } from '~/styles/types.js';

/**
 * $1 component element keys allowed to be customized.
 */
export type $1ElementKey = 'root';

/**
 * $1 component properties, having defaults.
 */
export interface $1Defaults {}

/**
 * $1 component public properties.
 */
export interface $1Props
  extends WithConfig,
    $1Defaults,
    WithOptionalClasses<$1ElementKey, $1ClassesProps> {}

/**
 * $1 component properties passed to the classes hooks.
 */
export interface $1ClassesProps extends RequiredBy<$1Props, keyof $1Defaults> {
}