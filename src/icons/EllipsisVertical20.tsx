import { withDefaultSize } from './withDefaultSize.js';
import type { IconProps } from './types.js';

export interface EllipsisVertical20Props extends IconProps {
}

export const EllipsisVertical20 = withDefaultSize<EllipsisVertical20Props>((props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width={props.size} height={props.size} {...props}><path fill="currentColor" d="M12 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/></svg>), 20);
