/* eslint-disable */
import type { Component } from 'solid-js';

import { createIconComponent, IconProps } from './createIconComponent.js';

export interface Heart24Props extends IconProps {
}

export const Heart24: Component<Heart24Props> = createIconComponent(24, props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M12.004 4.206c-.862-.778-2.006-1.396-3.26-1.627-1.548-.284-3.261.027-4.747 1.339-.998.88-1.614 2.258-1.817 3.733a8.44 8.44 0 0 0 .727 4.717c.533 1.13 1.791 2.535 3.08 3.815 1.324 1.312 2.796 2.603 3.872 3.514a3.31 3.31 0 0 0 4.29 0c1.076-.911 2.548-2.202 3.871-3.514 1.29-1.28 2.548-2.686 3.081-3.815a8.44 8.44 0 0 0 .727-4.717c-.203-1.475-.82-2.853-1.817-3.733-1.486-1.312-3.2-1.623-4.747-1.339-1.254.23-2.398.849-3.26 1.627m-3.586.144c-1.059-.195-2.199.006-3.23.917-.589.52-1.063 1.453-1.225 2.63a6.64 6.64 0 0 0 .572 3.703c.38.805 1.413 2.008 2.72 3.305 1.275 1.265 2.707 2.52 3.767 3.418a1.51 1.51 0 0 0 1.964 0c1.06-.898 2.491-2.153 3.766-3.418 1.308-1.297 2.342-2.5 2.721-3.305a6.64 6.64 0 0 0 .572-3.703c-.162-1.177-.636-2.11-1.226-2.63-1.03-.91-2.17-1.112-3.23-.917-1.09.2-2.094.823-2.737 1.553-.449.51-1.247.51-1.696 0A4.97 4.97 0 0 0 8.418 4.35" clip-rule="evenodd"/></svg>
));
