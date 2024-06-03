import type { Meta, StoryObj } from '@storybook/react';

import { PaperPost } from '@/ui/components';

const meta = {
  title: 'Components/PaperPost',
  component: PaperPost,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PaperPost>;

export default meta;
type Story = StoryObj<typeof PaperPost>;

export const PaperPostWithFullContent: Story = {
  args: {
    imageSrc:
      'https://images.unsplash.com/photo-1563026915-32eba3e315de?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'museum',
    title: 'The Privs museum close on 5AM',
    content: 'The Privs start close and maintain all of the wall',
  },
};

export const PaperPostWithLongContent: Story = {
  args: {
    imageSrc:
      'https://images.unsplash.com/photo-1563026915-32eba3e315de?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'museum',
    title: 'The Privs museum close on 5AM',
    content:
      'The Privs start close and maintain all of the wall, so every body must leave outside',
  },
};
