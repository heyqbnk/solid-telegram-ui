/* eslint-disable */
import type { Component } from 'solid-js';

import { createIconComponent, IconProps } from './createIconComponent.js';

export interface PersonRemove24Props extends IconProps {
}

export const PersonRemove24: Component<PersonRemove24Props> = createIconComponent(24, props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M9.4 3.9c-1.479 0-2.7 1.22-2.7 2.754s1.221 2.754 2.7 2.754 2.7-1.22 2.7-2.754S10.879 3.9 9.4 3.9M4.9 6.654C4.9 4.152 6.902 2.1 9.4 2.1s4.5 2.052 4.5 4.554-2.002 4.554-4.5 4.554-4.5-2.051-4.5-4.554m9.366 8.793a3.2 3.2 0 0 0-.366 1.493c0 1.758 1.4 3.16 3.1 3.16a3.04 3.04 0 0 0 1.476-.38zm-.735-2.01A4.98 4.98 0 0 0 12.1 16.94c0 2.726 2.181 4.96 4.9 4.96a4.86 4.86 0 0 0 3.47-1.458 4.98 4.98 0 0 0 1.43-3.502c0-2.727-2.181-4.96-4.9-4.96a4.85 4.85 0 0 0-3.469 1.457m1.994.723 4.208 4.272c.234-.444.367-.951.367-1.492 0-1.758-1.4-3.16-3.1-3.16-.532 0-1.035.137-1.475.38m-11.99-.313A3.94 3.94 0 0 1 6.2 12.792h4.378a.9.9 0 0 1 0 1.8H6.2c-.418 0-.982.145-1.435.569-.432.405-.865 1.161-.865 2.59a.9.9 0 0 1-1.8 0c0-1.818.567-3.091 1.435-3.904" clip-rule="evenodd"/></svg>
));
