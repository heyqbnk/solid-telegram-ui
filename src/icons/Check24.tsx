import { withDefaultSize } from './withDefaultSize.js';
import type { IconProps } from './types.js';

export interface Check24Props extends IconProps {
}

export const Check24 = withDefaultSize((props: Check24Props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M21.198 5.27a.9.9 0 0 1 .022 1.274L9.791 18.386a.9.9 0 0 1-1.295 0L2.78 12.465a.9.9 0 1 1 1.295-1.25l5.067 5.25L19.925 5.294a.9.9 0 0 1 1.273-.023" clip-rule="evenodd"/></svg>), 24);
