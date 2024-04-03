import { withDefaultSize } from './withDefaultSize.js';
import type { IconProps } from './types.js';

export interface Search24Props extends IconProps {
}

export const Search24 = withDefaultSize((props: Search24Props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M9.114 3.9A6.213 6.213 0 0 0 2.9 10.111a6.213 6.213 0 0 0 6.214 6.212c1.717 0 3.27-.695 4.396-1.821A6.213 6.213 0 0 0 9.114 3.9M1.1 10.111A8.013 8.013 0 0 1 9.114 2.1a8.013 8.013 0 0 1 6.269 13.003l5.254 5.261a.9.9 0 1 1-1.274 1.272l-5.253-5.26a8 8 0 0 1-4.996 1.746 8.013 8.013 0 0 1-8.014-8.01" clip-rule="evenodd"/></svg>), 24);
