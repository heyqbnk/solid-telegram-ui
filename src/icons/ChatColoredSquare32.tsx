import { withDefaultSize } from './withDefaultSize.js';
import type { IconProps } from './types.js';

export interface ChatColoredSquare32Props extends IconProps {
}

export const ChatColoredSquare32 = withDefaultSize((props: ChatColoredSquare32Props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width={props.size} height={props.size} {...props}><path fill="#FE9500" d="M1 10.6c0-3.36 0-5.04.654-6.324a6 6 0 0 1 2.622-2.622C5.56 1 7.24 1 10.6 1h10.8c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C31 5.56 31 7.24 31 10.6v10.8c0 3.36 0 5.04-.654 6.324a6 6 0 0 1-2.622 2.622C26.44 31 24.76 31 21.4 31H10.6c-3.36 0-5.04 0-6.324-.654a6 6 0 0 1-2.622-2.622C1 26.44 1 24.76 1 21.4z"/><path fill="#fff" d="M16 25c5.523 0 10-4.253 10-9.5S21.523 6 16 6 6 10.253 6 15.5c0 2.856 1.327 5.418 3.427 7.16.352.291.495.774.205 1.127-.16.194-.348.395-.55.611-.158.169-.325.347-.492.537-.534.606.003 1.397.792 1.222a21 21 0 0 0 3.964-1.278c.203-.09.429-.113.646-.07q.975.19 2.008.191"/><path fill="#FE9500" d="M12.5 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/></svg>), 32);
