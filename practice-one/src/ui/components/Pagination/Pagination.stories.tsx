import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "@/ui/components";
import { listPaginationPage } from "@/mocks";

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
    listPagination: listPaginationPage
  },
};
