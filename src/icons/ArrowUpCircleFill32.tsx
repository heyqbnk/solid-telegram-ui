/* eslint-disable */
import type { Component } from 'solid-js';

import { createIconComponent, IconProps } from './createIconComponent.js';

export interface ArrowUpCircleFill32Props extends IconProps {
}

export const ArrowUpCircleFill32: Component<ArrowUpCircleFill32Props> = createIconComponent(32, props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14m.65-20.623a.9.9 0 0 0-1.3 0l-5 5.218a.9.9 0 1 0 1.3 1.245l3.45-3.6V22a.9.9 0 1 0 1.8 0v-9.76l3.45 3.6a.9.9 0 1 0 1.3-1.245z" clip-rule="evenodd"/></svg>
));
