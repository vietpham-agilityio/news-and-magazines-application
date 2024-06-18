import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from '@/ui/components';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof TextArea>;

export const TextAreaCommnent: Story = {
  args: {
    label: 'Comment',
    placeholder: 'What do you want to comment'
  },
};