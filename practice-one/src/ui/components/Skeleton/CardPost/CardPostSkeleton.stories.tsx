import type { Meta, StoryObj } from "@storybook/react";

import { CardPostSkeleton } from "@/ui/components";

const meta = {
  title: "Components/Skeleton/CardPost",
  component: CardPostSkeleton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardPostSkeleton>;

export default meta;
type Story = StoryObj<typeof CardPostSkeleton>;

export const OneCardPostSkeleton: Story = {
  args: {
    count: 1,
  }
};

export const TwoCardPostSkeletons: Story = {
  args: {
    count: 2,
  }
};

export const ThreeCardPostSkeletons: Story = {
  args: {
    count: 3,
  }
};

export const FourCardPostSkeletons: Story = {
  args: {
    count: 4,
  }
};
