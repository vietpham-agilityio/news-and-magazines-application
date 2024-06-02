import type { Meta, StoryObj } from '@storybook/react';

import { BoxIcon } from '.';
import { Close } from '@/ui/components/Icons';

const meta = {
  title: 'Components/BoxIcon',
  component: BoxIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BoxIcon>;

export default meta;
type Story = StoryObj<typeof BoxIcon>;

export const BoxIconWithIcon: Story = {
  args: {
    icon: <Close />,
    width: '10',
    height: '10',
    onClick: () => alert('Clicked'),
  },
};
