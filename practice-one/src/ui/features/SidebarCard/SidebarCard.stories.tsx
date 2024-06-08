import type { Meta, StoryObj } from '@storybook/react';

import { SidebarCard } from '@/ui/features';

// mock data
import { listPostItems } from '@/mocks';

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
  args: {
    listPosts: listPostItems
  },
};
