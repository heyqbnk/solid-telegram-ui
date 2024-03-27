/* eslint-disable */
import type { Component } from 'solid-js';

import { createIconComponent, IconProps } from './createIconComponent.js';

export interface Quote12Props extends IconProps {
}

export const Quote12: Component<Quote12Props> = createIconComponent(12, props => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" width={props.size} height={props.size} {...props}><path fill="currentColor" d="M3.068 7.709c.145-.373-.142-.751-.496-.937A2 2 0 1 1 5.5 4.992V5c0 1.548-.271 2.671-.568 3.434-.148.38-.3.667-.425.868a3 3 0 0 1-.25.35l-.004.007a1 1 0 0 1-1.518-1.303l.005-.007q.017-.021.065-.098c.063-.102.16-.28.263-.542"/><path fill="currentColor" d="m4.26 9.65-.006.007.002-.002zm3.808-1.941c.145-.373-.142-.751-.496-.937a2 2 0 1 1 2.928-1.78V5c0 1.548-.271 2.671-.568 3.434-.148.38-.3.667-.425.868a3 3 0 0 1-.25.35l-.004.007a1 1 0 0 1-1.518-1.303l.005-.007q.017-.021.065-.098c.063-.102.16-.28.263-.542"/><path fill="currentColor" d="m9.26 9.65-.006.007.002-.002z"/></svg>
));
