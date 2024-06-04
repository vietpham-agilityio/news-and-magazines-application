import type { Meta, StoryObj } from "@storybook/react";

import { DetailPostSkeleton } from "@/ui/components";

const meta = {
  title: "Components/Skeleton/DetailPost",
  component: DetailPostSkeleton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DetailPostSkeleton>;

export default meta;
type Story = StoryObj<typeof DetailPostSkeleton>;

export const Default: Story = {};
