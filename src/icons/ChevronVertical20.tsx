import { withDefaultSize } from './withDefaultSize.js';
import type { IconProps } from './types.js';

export interface ChevronVertical20Props extends IconProps {
}

export const ChevronVertical20 = withDefaultSize<ChevronVertical20Props>((props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M9.374 2.353a.9.9 0 0 1 1.252 0l4.5 4.356a.9.9 0 1 1-1.252 1.293L10 4.252l-3.874 3.75A.9.9 0 1 1 4.874 6.71zm-4.52 9.665a.9.9 0 0 1 1.272-.02L10 15.748l3.874-3.75a.9.9 0 1 1 1.252 1.293l-4.5 4.356a.9.9 0 0 1-1.252 0l-4.5-4.356a.9.9 0 0 1-.02-1.273" clip-rule="evenodd"/></svg>), 20);
