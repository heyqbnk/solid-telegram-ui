/* eslint-disable */
import type { Component } from 'solid-js';

import { createIconComponent, IconProps } from './createIconComponent.js';

export interface ChevronRight16Props extends IconProps {
}

export const ChevronRight16: Component<ChevronRight16Props> = createIconComponent(16, props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width={props.size} height={props.size} {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 3 5 5-5 5"/></svg>
));
