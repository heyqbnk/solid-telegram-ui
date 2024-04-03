import { For } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs';

import type { AvatarSize } from '~/components/Avatar/Avatar.types.js';

import { getClassesArgType } from '../../../.storybook/utils.js';

import { Avatar } from './Avatar.js';

type StoryComponent = typeof Avatar;
type Story = StoryObj<StoryComponent>;

const sizes: AvatarSize[] = [20, 24, 28, 40, 48, 96];

const meta: Meta<StoryComponent> = {
  title: 'Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;

export const Playground: Story = {
  render: Avatar,
  args: {
    size: 40,
    caption: 'JJ',
    src: 'https://avatars.githubusercontent.com/u/148220002',
  },
  argTypes: {
    size: {
      description: 'Avatar size.',
      options: sizes,
      control: 'select',
      defaultValue: { summary: 40 },
    },
    src: {
      description: 'Image source.',
      control: 'text',
    },
    caption: {
      description: 'Up to 2 letters to display of image was not loaded.',
      control: 'text',
    },
    classes: getClassesArgType('root'),
  },
};

export const BrokenOrNoSource: Story = {
  ...Playground,
  argTypes: {
    ...Playground.argTypes,
    src: {
      table: {
        disable: true,
      },
    },
  },
  render(props) {
    return <Avatar {...props} src={''}/>;
  },
};

export const Preview: Story = {
  ...Playground,
  argTypes: {
    ...Playground.argTypes,
    size: {
      table: {
        disable: true,
      },
    },
  },
  render(props) {
    return (
      <div style={{ display: 'flex', 'align-items': 'flex-start', gap: '12px' }}>
        <For each={sizes}>
          {(size) => <Avatar {...props} size={size}/>}
        </For>
      </div>
    );
  },
};
