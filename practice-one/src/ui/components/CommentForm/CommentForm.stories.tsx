import type { Meta, StoryObj } from '@storybook/react';

import { CommentForm } from '@/ui/components';

const meta = {
  title: 'Components/Feature/CommentForm',
  component: CommentForm,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CommentForm>;

export default meta;

type Story = StoryObj<typeof CommentForm>;

export const CommentFormDefault: Story = {
  args: {},
};
