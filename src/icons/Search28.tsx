/* eslint-disable */
import type { Component } from 'solid-js';

import { createIconComponent, IconProps } from './createIconComponent.js';

export interface Search28Props extends IconProps {
}

export const Search28: Component<Search28Props> = createIconComponent(28, props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M11.905 4.95a6.953 6.953 0 0 0-6.955 6.951 6.953 6.953 0 0 0 6.955 6.952 6.93 6.93 0 0 0 4.919-2.038 6.953 6.953 0 0 0-4.92-11.865M3.05 11.901c0-4.888 3.965-8.851 8.855-8.851s8.854 3.963 8.854 8.851a8.8 8.8 0 0 1-1.956 5.55l5.87 5.878a.95.95 0 1 1-1.345 1.342l-5.869-5.876a8.82 8.82 0 0 1-5.554 1.958c-4.89 0-8.855-3.963-8.855-8.852" clip-rule="evenodd"/></svg>
));
