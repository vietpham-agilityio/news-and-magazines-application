import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/ui/components';
import { ArrowRight } from '@/ui/components/Icons';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonWithIcon: Story = {
  args: {
    rightIcon: <ArrowRight />,
    label: 'Next',
    bgColor: 'bg-primary-100',
    textColor: 'text-dark-100',
    onClick: () => alert('Clicked'),
  },
};

export const ButtonWithMarginBottom: Story = {
  args: {
    rightIcon: <ArrowRight />,
    label: 'Next',
    bgColor: 'bg-primary-100',
    textColor: 'text-dark-100',
    isMarginBottom: true,
  },
};
