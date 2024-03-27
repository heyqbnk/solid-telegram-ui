/* eslint-disable */
import type { Component } from 'solid-js';

import { createIconComponent, IconProps } from './createIconComponent.js';

export interface Cancel40Props extends IconProps {
}

export const Cancel40: Component<Cancel40Props> = createIconComponent(40, props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40" width={props.size} height={props.size} {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m7 7 13 13m13 13L20 20m0 0L33 7M20 20 7 33"/></svg>
));
