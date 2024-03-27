/* eslint-disable */
import type { Component } from 'solid-js';

import { createIconComponent, IconProps } from './createIconComponent.js';

export interface ChevronDown12Props extends IconProps {
}

export const ChevronDown12: Component<ChevronDown12Props> = createIconComponent(12, props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M1.293 3.793a1 1 0 0 1 1.414 0L6 7.086l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414" clip-rule="evenodd"/></svg>
));
