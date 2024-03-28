import { mergeProps, Show } from 'solid-js';

import { sanitizeCommon } from '~/helpers/sanitizeCommon.js';
import { withConfig } from '~/hocs/withConfig.js';
import type { WithConfigComponent } from '~/hocs/withConfig.js';

import { bemcn } from '~/styles/bemcn.js';
import { createClasses } from '~/styles/createClasses.js';
import { styled } from '~/styles/styled.js';

import { Typography } from '~/components/Typography/Typography.js';

import type { BadgeDefaults, BadgeProps } from './Badge.types.js';

import './Badge.scss';

const block = bemcn('tgui-badge');

/**
 * @see Figma: https://www.figma.com/file/AwAi6qE11mQllHa1sOROYp/Telegram-Mini-Apps-·%C2%A0UI-Kit?type=design&node-id=48-396&mode=design&t=wO8NRmLsNTRplvzT-0
 */
export const Badge: WithConfigComponent<BadgeProps> = withConfig(
  styled((props: BadgeProps) => {
    const merged = mergeProps({
      size: 'sm',
      variant: 'default',
    } satisfies Required<BadgeDefaults>, props);
    const classes = createClasses(merged);

    return (
      <Show
        when={merged.size !== 'dot'}
        fallback={(
          <span
            {...sanitizeCommon(merged, ['size', 'variant', 'children'])}
            class={classes().root}
          />
        )}
      >
        <Typography
          {...sanitizeCommon(merged, ['size', 'variant'])}
          component="span"
          class={classes().root}
          variant={merged.size === 'sm' ? 'caption1' : 'subheadline2'}
          weight={merged.size === 'sm' ? 'semibold' : 'regular'}
        />
      </Show>
    );
  }, {
    root: (props) => block.calc({
      mix: props.class,
      mods: [props.size, props.variant],
    }),
  }),
);
