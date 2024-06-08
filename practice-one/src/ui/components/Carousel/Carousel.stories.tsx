import type { Meta, StoryObj } from '@storybook/react';

import { Carousel } from '@/ui/components';

// mock
import { listSlider } from '@/mocks';

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof Carousel>;

export const CarouselDefault: Story = {
  args: {
    listSlider: listSlider,
  },
};

export const CarouselWithoutAutoPlay: Story = {
  args: {
    ...CarouselDefault.args,
    autoPlay: false,
  },
};

export const CarouselWithDefineAutoPlayTime: Story = {
  args: {
    ...CarouselDefault.args,
    autoPlayTime: 1000,
  },
};
