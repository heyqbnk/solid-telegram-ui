/* eslint-disable */
import type { Component } from 'solid-js';

import { createIconComponent, IconProps } from './createIconComponent.js';

export interface Reorder24Props extends IconProps {
}

export const Reorder24: Component<Reorder24Props> = createIconComponent(24, props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M2.1 8a.9.9 0 0 1 .9-.9h18a.9.9 0 1 1 0 1.8H3a.9.9 0 0 1-.9-.9m0 4a.9.9 0 0 1 .9-.9h18a.9.9 0 1 1 0 1.8H3a.9.9 0 0 1-.9-.9m0 4a.9.9 0 0 1 .9-.9h18a.9.9 0 1 1 0 1.8H3a.9.9 0 0 1-.9-.9" clip-rule="evenodd"/></svg>
));
