import type { Meta, StoryObj } from '@storybook/react';

import { SidebarCard } from '@/ui/features';

const meta = {
  title: 'Components/Feature/SidebarCard',
  component: SidebarCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarCard>;

export default meta;
type Story = StoryObj<typeof SidebarCard>;

export const SidebarCardDefault: Story = {
  args: {},
};
