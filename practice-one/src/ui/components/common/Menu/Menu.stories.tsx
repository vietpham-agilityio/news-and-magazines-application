import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from '@/ui/components';

import { listCategories } from '@/constants';

const meta = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof Menu>;

export const MenuWithName: Story = {
  args: {
    name: 'Category',
  },
};

export const MenuWithSubMenu: Story = {
  args: {
    ...MenuWithName.args,
    listMenu: listCategories,
  },
};
