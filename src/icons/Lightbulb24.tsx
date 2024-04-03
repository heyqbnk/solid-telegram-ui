import { withDefaultSize } from './withDefaultSize.js';
import type { IconProps } from './types.js';

export interface Lightbulb24Props extends IconProps {
}

export const Lightbulb24 = withDefaultSize<Lightbulb24Props>((props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={props.size} height={props.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M18.943 8.384a6.7 6.7 0 0 1-2.026 4.8.7.7 0 0 0-.117.146c-.025 1.924-1.623 3.39-3.484 3.39h-2.632c-1.86 0-3.458-1.466-3.484-3.39a.7.7 0 0 0-.117-.145 6.7 6.7 0 0 1-2.026-4.8c0-3.803 3.157-6.8 6.943-6.8s6.943 2.997 6.943 6.8M11.183 20.3a1.28 1.28 0 0 1-.844-.413 1.2 1.2 0 0 1-.317-.814c0-.17.142-.307.317-.307h3.323c.175 0 .316.138.316.308 0 .311-.12.596-.316.813a1.28 1.28 0 0 1-.95.417h-1.424q-.053 0-.106-.004m-.844-3.334h3.323c1.12 0 2.116.895 2.116 2.107 0 1.722-1.421 3.03-3.066 3.03h-1.424c-1.644 0-3.066-1.308-3.066-3.03 0-1.212.996-2.107 2.117-2.107m5.317-5.066c-.381.375-.656.857-.656 1.384 0 .904-.754 1.637-1.684 1.637h-2.632c-.93 0-1.684-.733-1.684-1.637 0-.527-.274-1.01-.655-1.384a4.9 4.9 0 0 1-1.488-3.516c0-2.76 2.303-4.998 5.143-4.998s5.143 2.238 5.143 4.998a4.9 4.9 0 0 1-1.487 3.516" clip-rule="evenodd"/></svg>), 24);
