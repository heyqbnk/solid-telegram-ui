import { withDefaultSize } from './withDefaultSize.js';
import type { IconProps } from './types.js';

export interface ArrowRight24Props extends IconProps {
}

export const ArrowRight24 = withDefaultSize((props: ArrowRight24Props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M13.374 4.265a1 1 0 0 1 1.413.057l6.448 7a1 1 0 0 1 0 1.356l-6.448 7a1 1 0 1 1-1.47-1.355L18.218 13H3.5a1 1 0 1 1 0-2h14.72l-4.904-5.322a1 1 0 0 1 .058-1.413" clip-rule="evenodd"/></svg>), 24);
