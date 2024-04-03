import { withDefaultSize } from './withDefaultSize.js';
import type { IconProps } from './types.js';

export interface ChevronUp24Props extends IconProps {
}

export const ChevronUp24 = withDefaultSize<ChevronUp24Props>((props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M4.293 16.207a1 1 0 0 0 1.414 0L12.5 9.414l6.793 6.793a1 1 0 0 0 1.414-1.414l-7.5-7.5a1 1 0 0 0-1.414 0l-7.5 7.5a1 1 0 0 0 0 1.414" clip-rule="evenodd"/></svg>), 24);
