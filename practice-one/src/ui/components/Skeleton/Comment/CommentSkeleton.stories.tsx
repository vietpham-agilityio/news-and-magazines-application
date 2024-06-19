import type { Meta, StoryObj } from '@storybook/react';

import { CommentSkeleton } from '@/ui/components';

const meta = {
  title: 'Components/Skeleton/Comment',
  component: CommentSkeleton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CommentSkeleton>;

export default meta;
type Story = StoryObj<typeof CommentSkeleton>;

export const Default: Story = {};
