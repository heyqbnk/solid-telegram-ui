import { withDefaultSize } from './withDefaultSize.js';
import type { IconProps } from './types.js';

export interface ArrowLeft20Props extends IconProps {
}

export const ArrowLeft20 = withDefaultSize<ArrowLeft20Props>((props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M10.013 2.283a1 1 0 0 1 .02 1.414L5.366 8.5H18a1 1 0 1 1 0 2H5.366l4.667 4.803a1 1 0 1 1-1.434 1.394l-6.316-6.5a1 1 0 0 1 0-1.394l6.316-6.5a1 1 0 0 1 1.414-.02" clip-rule="evenodd"/></svg>), 20);
