import type { Meta, StoryObj } from "@storybook/react";

import { BurgerMenu } from "@/ui/components";

// mock
import { listCategories } from "@/mocks";

const meta = {
  title: "Components/BurgerMenu",
  component: BurgerMenu,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BurgerMenu>;

export default meta;
type Story = StoryObj<typeof BurgerMenu>;

export const Default: Story = {
  args: {
  listCategories: listCategories
  },
};
