/* eslint-disable */
import type { Component } from 'solid-js';

import { createIconComponent, IconProps } from './createIconComponent.js';

export interface Reply24Props extends IconProps {
}

export const Reply24: Component<Reply24Props> = createIconComponent(24, props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M11.741 3.6a.9.9 0 0 1-.008 1.273l-5.04 4.973h3.9c1.922 0 3.446 0 4.65.143 1.238.147 2.256.456 3.105 1.16q.41.34.75.75c.703.848 1.012 1.867 1.16 3.104.143 1.205.143 2.728.143 4.65v.06a.9.9 0 1 1-1.8 0c0-1.995-.002-3.411-.13-4.497-.128-1.066-.366-1.695-.76-2.17a4 4 0 0 0-.51-.511c-.475-.393-1.104-.632-2.17-.758-1.086-.13-2.502-.131-4.497-.131h-3.84l4.439 4.38a.9.9 0 1 1-1.265 1.282l-6-5.921a.9.9 0 0 1 0-1.282l6.6-6.513a.9.9 0 0 1 1.273.008" clip-rule="evenodd"/></svg>
));
