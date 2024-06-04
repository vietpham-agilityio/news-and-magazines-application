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

export const Default: Story = {};
