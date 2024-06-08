import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '@/ui/layouts';

const meta = {
  title: 'Components/Layouts/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderDefault: Story = {
  args: {},
};
