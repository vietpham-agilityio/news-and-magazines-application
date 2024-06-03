import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@/ui/components';
import { ArrowRight } from '@/ui/components/Icons';
import { FontWeight, Size } from '@/types';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof Typography>;

export const TypographyWithH1: Story = {
  args: {
    children: 'This typography with h1 tag element',
    tag: 'h1',
    textSize: Size.XXL,
    weight: FontWeight.Medium,
    additionalClasses: 'text-xxl',
  },
};

export const TypographyWithH2: Story = {
  args: {
    children: 'This typography with h2 tag element',
    tag: 'h2',
    textSize: Size.XL,
    weight: FontWeight.Medium,
    additionalClasses: 'text-xl',
  },
};

export const TypographyWithH3: Story = {
    args: {
      children: 'This typography with h3 tag element',
      tag: 'h3',
      textSize: Size.LG,
      weight: FontWeight.Medium,
    },
  };

  export const TypographyWithH4: Story = {
    args: {
      children: 'This typography with h4 tag element',
      tag: 'h4',
      textSize: Size.MD,
      weight: FontWeight.Medium,
    },
  };

  export const TypographyWithH5: Story = {
    args: {
      children: 'This typography with h5 tag element',
      tag: 'h5',
      textSize: Size.SM,
      weight: FontWeight.Medium,
    },
  };

  export const TypographyWithH6: Story = {
    args: {
      children: 'This typography with h6 tag element',
      tag: 'h6',
      textSize: Size.XS,
      weight: FontWeight.Medium,
    },
  };

  export const TypographyWithPtag: Story = {
    args: {
      children: 'This typography with p tag element',
      tag: 'p',
      textSize: Size.XS,
      weight: FontWeight.Medium,
    },
  };
