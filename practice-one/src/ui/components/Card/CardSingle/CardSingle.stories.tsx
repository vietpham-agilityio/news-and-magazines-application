import type { Meta, StoryObj } from '@storybook/react';

import { CardSingle } from '@/ui/components';

const meta = {
  title: 'Components/Card/CardSingle',
  component: CardSingle,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardSingle>;

export default meta;
type Story = StoryObj<typeof CardSingle>;

export const CardSingleWithImage: Story = {
  args: {
    id: '1',
  },
};
