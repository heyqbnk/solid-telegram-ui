import { withDefaultSize } from './withDefaultSize.js';
import type { IconProps } from './types.js';

export interface EllipsisVertical24Props extends IconProps {
}

export const EllipsisVertical24 = withDefaultSize<EllipsisVertical24Props>((props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M12 8.001c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-2 8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2" clip-rule="evenodd"/></svg>), 24);
