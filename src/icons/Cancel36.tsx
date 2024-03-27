/* eslint-disable */
import type { Component } from 'solid-js';

import { createIconComponent, IconProps } from './createIconComponent.js';

export interface Cancel36Props extends IconProps {
}

export const Cancel36: Component<Cancel36Props> = createIconComponent(36, props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" width={props.size} height={props.size} {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m7 7 11 11m11 11L18 18m0 0L29 7M18 18 7 29"/></svg>
));