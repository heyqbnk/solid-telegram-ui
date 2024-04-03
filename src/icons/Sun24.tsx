import { withDefaultSize } from './withDefaultSize.js';
import type { IconProps } from './types.js';

export interface Sun24Props extends IconProps {
}

export const Sun24 = withDefaultSize((props: Sun24Props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M12 15.45a3.45 3.45 0 1 0 0-6.9 3.45 3.45 0 0 0 0 6.9m0 1.8a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5M12 1.1a.9.9 0 0 1 .9.9v1.74a.9.9 0 1 1-1.8 0V2a.9.9 0 0 1 .9-.9M3.972 3.972a.9.9 0 0 1 1.273 0L6.55 5.277a.9.9 0 0 1-1.272 1.272L3.972 5.245a.9.9 0 0 1 0-1.273m16.056 0a.9.9 0 0 1 0 1.273L18.723 6.55a.9.9 0 0 1-1.272-1.272l1.304-1.305a.9.9 0 0 1 1.273 0M1.1 12a.9.9 0 0 1 .9-.9h1.74a.9.9 0 1 1 0 1.8H2a.9.9 0 0 1-.9-.9m18.26 0a.9.9 0 0 1 .9-.9H22a.9.9 0 1 1 0 1.8h-1.74a.9.9 0 0 1-.9-.9M6.55 17.45a.9.9 0 0 1 0 1.273l-1.305 1.305a.9.9 0 0 1-1.273-1.273l1.305-1.304a.9.9 0 0 1 1.272 0m10.9 0a.9.9 0 0 1 1.273 0l1.305 1.305a.9.9 0 1 1-1.273 1.273l-1.304-1.305a.9.9 0 0 1 0-1.272M12 19.36a.9.9 0 0 1 .9.9V22a.9.9 0 0 1-1.8 0v-1.74a.9.9 0 0 1 .9-.9" clip-rule="evenodd"/></svg>), 24);
