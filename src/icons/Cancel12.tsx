/* eslint-disable */
import type { Component } from 'solid-js';

import { createIconComponent, IconProps } from './createIconComponent.js';

export interface Cancel12Props extends IconProps {
}

export const Cancel12: Component<Cancel12Props> = createIconComponent(12, props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M2.293 2.293a1 1 0 0 1 1.414 0L6 4.586l2.293-2.293a1 1 0 0 1 1.414 1.414L7.414 6l2.293 2.293a1 1 0 0 1-1.414 1.414L6 7.414 3.707 9.707a1 1 0 0 1-1.414-1.414L4.586 6 2.293 3.707a1 1 0 0 1 0-1.414" clip-rule="evenodd"/></svg>
));
