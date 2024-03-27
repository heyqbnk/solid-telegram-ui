/* eslint-disable */
import type { Component } from 'solid-js';

import { createIconComponent, IconProps } from './createIconComponent.js';

export interface Cancel32Props extends IconProps {
}

export const Cancel32: Component<Cancel32Props> = createIconComponent(32, props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width={props.size} height={props.size} {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m5 5 11 11m11 11L16 16m0 0L27 5M16 16 5 27"/></svg>
));
