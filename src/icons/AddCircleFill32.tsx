/* eslint-disable */
import type { Component } from 'solid-js';

import { createIconComponent, IconProps } from './createIconComponent.js';

export interface AddCircleFill32Props extends IconProps {
}

export const AddCircleFill32: Component<AddCircleFill32Props> = createIconComponent(32, props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14m1-20a1 1 0 1 0-2 0v5h-5a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z" clip-rule="evenodd"/></svg>
));
