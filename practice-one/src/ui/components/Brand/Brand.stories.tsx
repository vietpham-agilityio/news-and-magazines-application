import type { Meta, StoryObj } from "@storybook/react";

import { Brand } from "@/ui/components";

const meta = {
  title: "Components/Brand",
  component: Brand,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Brand>;

export default meta;
type Story = StoryObj<typeof Brand>;

export const BrandWithoutLink: Story = {
  args: {
   brandName: "News"
  },
};

export const BrandWithLink: Story = {
  args: {
    brandName: "MEGA.news",
    url: "https://storybook.js.org/"
  }
};
