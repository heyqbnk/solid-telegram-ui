/* eslint-disable */
import type { Component } from 'solid-js';

import { createIconComponent, IconProps } from './createIconComponent.js';

export interface Cancel24Props extends IconProps {
}

export const Cancel24: Component<Cancel24Props> = createIconComponent(24, props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M4.506 4.44a.9.9 0 0 1 1.272-.008l6.226 6.143 6.225-6.143a.9.9 0 0 1 1.264 1.28l-6.208 6.127 6.208 6.127a.9.9 0 0 1-1.264 1.281l-6.225-6.143-6.226 6.143a.9.9 0 0 1-1.264-1.28l6.208-6.127-6.208-6.127a.9.9 0 0 1-.008-1.273" clip-rule="evenodd"/></svg>
));
