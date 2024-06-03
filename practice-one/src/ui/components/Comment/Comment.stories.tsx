import type { Meta, StoryObj } from '@storybook/react';

import { Comment } from '@/ui/components';

const meta = {
  title: 'Components/Comment',
  component: Comment,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof Comment>;

export const CommentWithContent: Story = {
  args: {
    userName: 'Bagarian',
    content: 'This is a comment I said on this website!',
  },
};
