import type { Meta, StoryObj } from "@storybook/react";

import { BadgeGroupSkeleton } from "@/ui/components";

const meta = {
  title: "Components/Skeleton/BadgeGroup",
  component: BadgeGroupSkeleton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BadgeGroupSkeleton>;

export default meta;
type Story = StoryObj<typeof BadgeGroupSkeleton>;

export const Default: Story = {
  args: {
    width: 268,
  }
};
