/* eslint-disable */
import type { Component } from 'solid-js';

import { createIconComponent, IconProps } from './createIconComponent.js';

export interface ChevronLeft24Props extends IconProps {
}

export const ChevronLeft24: Component<ChevronLeft24Props> = createIconComponent(24, props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M15.707 3.793a1 1 0 0 0-1.414 0l-7.5 7.5a1 1 0 0 0 0 1.414l7.5 7.5a1 1 0 0 0 1.414-1.414L8.914 12l6.793-6.793a1 1 0 0 0 0-1.414" clip-rule="evenodd"/></svg>
));
