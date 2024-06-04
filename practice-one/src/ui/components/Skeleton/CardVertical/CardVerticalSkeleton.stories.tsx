import type { Meta, StoryObj } from "@storybook/react";

import { CardVerticalSkeleton } from "@/ui/components";

const meta = {
  title: "Components/Skeleton/CardVertical",
  component: CardVerticalSkeleton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardVerticalSkeleton>;

export default meta;
type Story = StoryObj<typeof CardVerticalSkeleton>;

export const Default: Story = {};
