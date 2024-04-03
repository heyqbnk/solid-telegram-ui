import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';
import type { WithConfig } from '~/types/known.js';
import type { RequiredBy } from '~/types/utils.js';

import type { WithOptionalClasses } from '~/styles/types.js';

/**
 * Checkbox component element keys allowed to be customized.
 */
export type CheckboxElementKey =
  | 'root'
  | 'input'
  | 'check'
  | 'checkIcon'
  | 'indeterminate';

/**
 * Checkbox component properties, having defaults.
 */
export interface CheckboxDefaults {
  /**
   * Is checkbox checked.
   * @default false
   */
  checked?: boolean;
  /**
   * Is checkbox disabled.
   * @default false
   */
  disabled?: boolean;
}

/**
 * Checkbox component public properties.
 */
export interface CheckboxProps
  extends Omit<JSXIntrinsicElementAttrs<'input'>, 'type'>,
    WithConfig,
    CheckboxDefaults,
    WithOptionalClasses<CheckboxElementKey, CheckboxClassesProps> {
}

/**
 * Checkbox component properties passed to the classes hooks.
 */
export interface CheckboxClassesProps extends RequiredBy<CheckboxProps, keyof CheckboxDefaults> {
}
