import type { Meta, StoryObj } from '@storybook/react';

import { Title } from '@/ui/components';

const meta = {
  title: 'Components/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof Title>;

export const TrendyTitle: Story = {
  args: {
    title: 'Trendy Posts',
  },
};
