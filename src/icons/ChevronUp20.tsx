import { withDefaultSize } from './withDefaultSize.js';
import type { IconProps } from './types.js';

export interface ChevronUp20Props extends IconProps {
}

export const ChevronUp20 = withDefaultSize<ChevronUp20Props>((props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M3.293 12.707a1 1 0 0 0 1.414 0L10 7.414l5.293 5.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 0 1.414" clip-rule="evenodd"/></svg>), 20);
