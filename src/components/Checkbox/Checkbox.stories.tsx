import { createEffect, splitProps } from 'solid-js';
import type { Component } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs';

import { getClassesArgType } from '../../../.storybook/utils.js';

import { Checkbox } from './Checkbox.js';

type StoryComponent = typeof Checkbox;

const meta: Meta<StoryComponent> = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;

export const Playground: StoryObj<Component<{
  disabled?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  classes?: any;
}>> = {
  render(props) {
    let ref: HTMLInputElement;

    createEffect(() => {
      if (ref) {
        ref.indeterminate = props.indeterminate || false;
      }
    });

    return <Checkbox ref={ref!} {...splitProps(props, ['indeterminate'])[1]}/>;
  },
  args: {
    checked: false,
    disabled: false,
    indeterminate: false,
  },
  argTypes: {
    checked: {
      description: 'Is checkbox checked.',
      control: 'boolean',
    },
    disabled: {
      description: 'Is checkbox disabled.',
      control: 'boolean',
    },
    indeterminate: {
      description: 'Is checkbox is in indeterminate state.\n\n' +
        '_This option is not a component property, but can be used to imitate the browser behavior._',
      control: 'boolean',
    },
    classes: getClassesArgType('root'),
  },
};
