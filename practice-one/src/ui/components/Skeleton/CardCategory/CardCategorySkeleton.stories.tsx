import type { Meta, StoryObj } from "@storybook/react";

import { CardCategorySkeleton } from "@/ui/components";

const meta = {
  title: "Components/Skeleton/CardCategorySkeleton",
  component: CardCategorySkeleton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardCategorySkeleton>;

export default meta;
type Story = StoryObj<typeof CardCategorySkeleton>;

export const OneCardCategorySkeleton: Story = {
  args: {
    count: 1,
  }
};

export const TwoCardCategorySkeletons: Story = {
  args: {
    count: 2,
  }
};

export const ThreeCardCategorySkeletons: Story = {
  args: {
    count: 3,
  }
};

export const FourCardCategorySkeletons: Story = {
  args: {
    count: 4,
  }
};
