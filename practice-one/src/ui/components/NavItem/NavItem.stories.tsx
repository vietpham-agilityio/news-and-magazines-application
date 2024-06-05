import type { Meta, StoryObj } from "@storybook/react";

import { NavItem } from "@/ui/components";

const meta = {
  title: "Components/NavItem",
  component: NavItem,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
  args: {
   name: "Category",
   url: "/category"
  },
};
