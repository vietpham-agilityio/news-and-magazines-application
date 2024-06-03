import type { Meta, StoryObj } from '@storybook/react';

import { SubMenu } from '@/ui/components';

import { listCategories } from '@/mocks';

const meta = {
  title: 'Components/SubMenu',
  component: SubMenu,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SubMenu>;

export default meta;
type Story = StoryObj<typeof SubMenu>;

export const SubMenuWithListItem: Story = {
  args: {
    listItem: listCategories,
  },
};

export const SubMenuWithOnClickEvent: Story = {
  args: {
    ...SubMenuWithListItem.args,
    onClick: () => alert('Item clicked'),
  },
};
