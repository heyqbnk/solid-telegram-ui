/* eslint-disable */
import type { Component } from 'solid-js';

import { createIconComponent, IconProps } from './createIconComponent.js';

export interface Archive24Props extends IconProps {
}

export const Archive24: Component<Archive24Props> = createIconComponent(24, props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M8.334 4.283c-.464 0-.906.195-1.22.537l-.572.624H17.46l-.573-.624a1.65 1.65 0 0 0-1.219-.537zm10.709 2.961H4.958c-.13.24-.2.512-.2.79v8.862A2.505 2.505 0 0 0 7.262 19.4h9.475a2.505 2.505 0 0 0 2.506-2.505v-8.86c0-.279-.07-.55-.201-.791M3.8 5.774a3.45 3.45 0 0 0-.843 2.26v8.862A4.305 4.305 0 0 0 7.263 21.2h9.475a4.305 4.305 0 0 0 4.306-4.305v-8.86c0-.864-.324-1.697-.908-2.334l-1.923-2.098a3.45 3.45 0 0 0-2.546-1.12H8.334c-.968 0-1.892.407-2.546 1.12L3.865 5.701zM12 9.342a.9.9 0 0 1 .9.9v4.298l1.353-1.291a.9.9 0 1 1 1.243 1.302l-2.874 2.743a.9.9 0 0 1-1.243 0l-2.874-2.743a.9.9 0 0 1 1.243-1.302L11.1 14.54v-4.298a.9.9 0 0 1 .9-.9" clip-rule="evenodd"/></svg>
));
