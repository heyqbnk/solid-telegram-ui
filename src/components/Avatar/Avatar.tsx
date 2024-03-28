import { mergeProps } from 'solid-js';

import { sanitizeCommon } from '~/helpers/sanitizeCommon.js';
import { withConfig } from '~/hocs/withConfig.js';
import type { WithConfigComponent } from '~/hocs/withConfig.js';

import { bemcn } from '~/styles/bemcn.js';
import { createClasses } from '~/styles/createClasses.js';
import { styled } from '~/styles/styled.js';

import { Image } from '~/components/Image/Image.js';
import { Typography } from '~/components/Typography/Typography.js';

import type { AvatarProps } from './Avatar.types.js';

import './Avatar.scss';

const block = bemcn('tgui-avatar');

/**
 * @see Figma: https://www.figma.com/file/AwAi6qE11mQllHa1sOROYp/Telegram-Mini-Apps-·%C2%A0UI-Kit?type=design&node-id=435-8870&mode=design&t=l2BVitAilMNoA1ic-0
 */
export const Avatar: WithConfigComponent<AvatarProps> = withConfig(
  styled((props: AvatarProps) => {
    const merged = mergeProps({ size: 40 } as const, props);
    const classes = createClasses(merged);

    return (
      <div class={classes().root}>
        <Typography component="div" weight="semibold" class={classes().caption}>
          {merged.caption}
        </Typography>
        <Image {...sanitizeCommon(merged, ['caption'])} class={classes().image}/>
      </div>
    );
  }, {
    root: (props) => block.calc({ mix: props.class }),
    image: block.elem('image').calc(),
    caption: block.elem('caption').calc(),
  }),
);
