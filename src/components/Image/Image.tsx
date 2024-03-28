import { mergeProps } from 'solid-js';

import { sanitizeCommon } from '~/helpers/sanitizeCommon.js';
import { withConfig } from '~/hocs/withConfig.js';
import { createImageResource } from '~/reactivity/createImageResource.js';
import type { WithConfigComponent } from '~/hocs/withConfig.js';

import { BemBlockClassNames } from '~/styles/bem/BemBlockClassNames.js';
import { createClasses } from '~/styles/createClasses.js';
import { styled } from '~/styles/styled.js';

import type { ImageProps } from './Image.types.js';

import './Image.scss';

const block = new BemBlockClassNames('tgui-image');

// TODO: We have to make image transition better.
// TODO: Skeleton?

/**
 * @see Figma: https://www.figma.com/file/AwAi6qE11mQllHa1sOROYp/Telegram-Mini-Apps-·%C2%A0UI-Kit?type=design&node-id=435-8870&mode=design&t=l2BVitAilMNoA1ic-0
 */
export const Image: WithConfigComponent<ImageProps> = withConfig(
  styled((props: ImageProps) => {
    const merged = mergeProps({ size: 40 } as const, props);
    const [data] = createImageResource(() => merged.src);
    const classes = createClasses(mergeProps(merged, {
      get pending() {
        return data.loading;
      },
    }));

    return (
      <img
        {...sanitizeCommon(merged, ['size'])}
        src={data.loading || !data.latest
          ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
          : data.latest.src}
        width={merged.size}
        height={merged.size}
        class={classes().root}
      />
    );
  }, {
    root: (props) => block.calc({
      mix: props.class,
      mods: {
        sm: props.size < 40,
        md: props.size >= 40 && props.size < 96,
        lg: props.size >= 96,
        pending: props.pending,
      },
    }),
  }),
);
