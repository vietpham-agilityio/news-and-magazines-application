import type { Meta, StoryObj } from '@storybook/react';

import { RightSidebar } from '@/ui/features';

const meta = {
  title: 'Components/Feature/RightSidebar',
  component: RightSidebar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RightSidebar>;

export default meta;
type Story = StoryObj<typeof RightSidebar>;

export const RightSidebarDefault: Story = {
  args: {},
};
