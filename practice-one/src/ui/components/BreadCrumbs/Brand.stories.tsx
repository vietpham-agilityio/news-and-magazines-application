import type { Meta, StoryObj } from '@storybook/react';

import { BreadCrumbs } from '@/ui/components';

// mock data
import { listBreadCrumb } from '@/mocks';
import { IBreadCrumbItem } from '@/types';

const listBreadCrumbThreeItems: IBreadCrumbItem[] = [
  ...listBreadCrumb,
  { id: '3', name: 'Street Ways To The Corner', path: '/' },
];

const meta = {
  title: 'Components/BreadCrumbs',
  component: BreadCrumbs,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BreadCrumbs>;

export default meta;

type Story = StoryObj<typeof BreadCrumbs>;

export const BreadCrumbsWithTwoItems: Story = {
  args: {
    listBreadCrumb: listBreadCrumb,
  },
};

export const BreadCrumbsWithThreeItems: Story = {
  args: {
    listBreadCrumb: listBreadCrumbThreeItems,
  },
};
