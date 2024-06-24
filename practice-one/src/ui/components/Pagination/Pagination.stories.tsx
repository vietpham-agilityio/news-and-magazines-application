import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "@/ui/components";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    pageCount: 4,
    categoryId: 2,
  },
};
