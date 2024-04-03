import { withDefaultSize } from './withDefaultSize.js';
import type { IconProps } from './types.js';

export interface Cancel32Props extends IconProps {
}

export const Cancel32 = withDefaultSize<Cancel32Props>((props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width={props.size} height={props.size} {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m5 5 11 11m11 11L16 16m0 0L27 5M16 16 5 27"/></svg>), 32);
