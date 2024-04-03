import { withDefaultSize } from './withDefaultSize.js';
import type { IconProps } from './types.js';

export interface Mic24Props extends IconProps {
}

export const Mic24 = withDefaultSize<Mic24Props>((props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M7.672 6.266c0-2.353 1.97-4.205 4.329-4.205s4.328 1.852 4.328 4.205v4.958c0 2.353-1.97 4.205-4.328 4.205-2.36 0-4.33-1.852-4.33-4.205zM12 3.861c-1.428 0-2.53 1.108-2.53 2.405v4.958c0 1.297 1.102 2.405 2.53 2.405s2.528-1.108 2.528-2.405V6.266c0-1.297-1.1-2.405-2.528-2.405M5.57 11.15a.9.9 0 0 1 .9.9c0 .648.268 1.894 1.097 2.959.794 1.02 2.14 1.924 4.433 1.924s3.638-.904 4.432-1.924c.829-1.065 1.097-2.31 1.097-2.96a.9.9 0 1 1 1.8 0c0 1.005-.376 2.651-1.476 4.065-1.01 1.299-2.603 2.362-4.953 2.579v2.032a.9.9 0 0 1-1.8 0v-2.032c-2.35-.217-3.943-1.28-4.954-2.579-1.1-1.414-1.475-3.06-1.475-4.064a.9.9 0 0 1 .9-.9" clip-rule="evenodd"/></svg>), 24);
