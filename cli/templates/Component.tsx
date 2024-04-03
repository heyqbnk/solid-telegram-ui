import { mergeProps } from 'solid-js';

import { withConfig, type WithConfigComponent } from '~/hocs/withConfig.js';

import { bemcn } from '~/styles/bemcn.js';
import { createClasses } from '~/styles/createClasses.js';
import { styled } from '~/styles/styled.js';

import type { $1Props, $1Defaults } from './$1.types.js';

import './$1.scss';

const block = bemcn('$2');

export const $1: WithConfigComponent<$1Props> = withConfig(
  styled((props: $1Props) => {
    const merged = mergeProps({} satisfies $1Defaults, props);
    const classes = createClasses(merged);

    return (
      <div class={classes().root}></div>
    );
  }, {
    root: block.calc(),
  }),
);