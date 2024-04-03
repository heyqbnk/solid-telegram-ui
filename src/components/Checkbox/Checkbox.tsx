import { mergeProps } from 'solid-js';

import { sanitizeCommon } from '~/helpers/sanitizeCommon.js';
import { withConfig, type WithConfigComponent } from '~/hocs/withConfig.js';

import { bemcn } from '~/styles/bemcn.js';
import { createClasses } from '~/styles/createClasses.js';
import { styled } from '~/styles/styled.js';

import { Check16 } from '~/icons/index.js';

import type { CheckboxDefaults, CheckboxProps } from './Checkbox.types.js';

import './Checkbox.scss';

const block = bemcn('tgui-checkbox');

export const Checkbox: WithConfigComponent<CheckboxProps> = withConfig(
  styled((props: CheckboxProps) => {
    const merged = mergeProps({
      checked: false,
      disabled: false,
    } satisfies CheckboxDefaults, props);
    const classes = createClasses(merged);

    return (
      <label class={classes().root}>
        <input {...sanitizeCommon(merged)} class={classes().input} type="checkbox"/>
        <span class={classes().check}>
          <Check16 class={classes().checkIcon}/>
        </span>
        <span class={classes().indeterminate}/>
      </label>
    );
  }, {
    root: (props) => block.calc({
      mix: props.class,
      mods: [props.platform, { disabled: props.disabled }],
    }),
    input: block.elem('input').calc(),
    check: block.elem('check').calc(),
    indeterminate: block.elem('indeterminate').calc(),
  }),
);
