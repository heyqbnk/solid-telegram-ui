import { For } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs';

import type { ImageSize } from '~/components/Image/Image.types.js';

import { getClassesArgType } from '../../../.storybook/utils.js';

import { Image } from './Image.js';

type StoryComponent = typeof Image;
type Story = StoryObj<StoryComponent>;

const sizes: ImageSize[] = [20, 24, 28, 40, 48, 96];

const meta: Meta<StoryComponent> = {
  title: 'Image',
  component: Image,
  tags: ['autodocs'],
};

export default meta;

export const Playground: Story = {
  render: Image,
  args: {
    size: 40,
    src: 'https://avatars.githubusercontent.com/u/148220002?s=200&v=4',
  },
  argTypes: {
    size: {
      description: 'Image size.',
      options: sizes,
      control: 'select',
      defaultValue: { summary: 40 },
    },
    src: {
      description: 'Image source.',
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
    return <Image {...props} src={''}/>;
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
          {(size) => <Image {...props} size={size}/>}
        </For>
      </div>
    );
  },
};
