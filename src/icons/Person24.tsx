import { withDefaultSize } from './withDefaultSize.js';
import type { IconProps } from './types.js';

export interface Person24Props extends IconProps {
}

export const Person24 = withDefaultSize((props: Person24Props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M12 3.9a3.73 3.73 0 0 0-3.732 3.729A3.73 3.73 0 0 0 12 11.357a3.73 3.73 0 0 0 3.732-3.728A3.73 3.73 0 0 0 12 3.9M6.468 7.629A5.53 5.53 0 0 1 12 2.1a5.53 5.53 0 0 1 5.532 5.529A5.53 5.53 0 0 1 12 13.157 5.53 5.53 0 0 1 6.468 7.63M4.12 16.224a4.84 4.84 0 0 1 3.248-1.267h9.264c.951 0 2.214.313 3.248 1.267 1.057.974 1.77 2.52 1.77 4.776a.9.9 0 0 1-1.8 0c0-1.858-.574-2.884-1.19-3.453a3.04 3.04 0 0 0-2.028-.79H7.368c-.594 0-1.39.202-2.028.79-.616.569-1.19 1.595-1.19 3.453a.9.9 0 0 1-1.8 0c0-2.256.713-3.802 1.77-4.776" clip-rule="evenodd"/></svg>), 24);
