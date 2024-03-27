/* eslint-disable */
import type { Component } from 'solid-js';

import { createIconComponent, IconProps } from './createIconComponent.js';

export interface ChevronRight24Props extends IconProps {
}

export const ChevronRight24: Component<ChevronRight24Props> = createIconComponent(24, props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M7.293 3.793a1 1 0 0 1 1.414 0l7.5 7.5a1 1 0 0 1 0 1.414l-7.5 7.5a1 1 0 0 1-1.414-1.414L14.086 12 7.293 5.207a1 1 0 0 1 0-1.414" clip-rule="evenodd"/></svg>
));
