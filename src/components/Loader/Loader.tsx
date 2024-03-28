import { For, mergeProps, Show } from 'solid-js';

import { sanitizeCommon } from '~/helpers/sanitizeCommon.js';
import { withConfig } from '~/hocs/withConfig.js';
import type { WithConfigComponent } from '~/hocs/withConfig.js';

import { bemcn } from '~/styles/bemcn.js';
import { createClasses } from '~/styles/createClasses.js';
import { styled } from '~/styles/styled.js';

import type { LoaderDefaults, LoaderProps } from './Loader.types.js';

import './Loader.scss';

const block = bemcn('tgui-loader');

/**
 * @see Figma: https://www.figma.com/file/AwAi6qE11mQllHa1sOROYp/Telegram-Mini-Apps-Library?type=design&node-id=216-2847&mode=design&t=5uMXzbr5N7vuFjxS-0
 */
export const Loader: WithConfigComponent<LoaderProps> = withConfig(
  styled((props: LoaderProps) => {
    const merged = mergeProps({ size: 'md' } satisfies Required<LoaderDefaults>, props);
    const classes = createClasses(merged);

    return (
      <div {...sanitizeCommon(merged, ['size'])} class={classes().root}>
        <Show
          when={merged.platform === 'ios'}
          fallback={
            <svg class={classes().androidContainer}>
              <circle class={classes().androidCircle} cx="50%" cy="50%" r="50%"/>
            </svg>
          }
        >
          <For each={new Array(8).fill(null)}>
            {(_item, index) => (
              <div class={classes().iosLine} style={{ '--index': index() }}/>
            )}
          </For>
        </Show>
      </div>
    );
  }, {
    root: (props) => block.calc({
      mix: props.class,
      mods: [
        props.platform,
        `${props.platform}-${props.size}`,
      ],
    }),
    androidCircle: block.elem('android-circle').calc(),
    androidContainer: block.elem('android-container').calc(),
    iosLine: (props) => block.elem('ios-line').calc({
      mods: props.size,
    }),
  }),
);
