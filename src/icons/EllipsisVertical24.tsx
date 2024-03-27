/* eslint-disable */
import type { Component } from 'solid-js';

import { createIconComponent, IconProps } from './createIconComponent.js';

export interface EllipsisVertical24Props extends IconProps {
}

export const EllipsisVertical24: Component<EllipsisVertical24Props> = createIconComponent(24, props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M12 8.001c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-2 8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2" clip-rule="evenodd"/></svg>
));
