import type { Meta, StoryObj } from '@storybook/react';

import { TitleSection } from '@/ui/components';

const meta = {
  title: 'Components/TitleSection',
  component: TitleSection,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TitleSection>;

export default meta;
type Story = StoryObj<typeof TitleSection>;

export const PopularTitleSection: Story = {
  args: {
    title: 'Popular Posts',
  },
};

export const TitleSectionWithOnClick: Story = {
    args: {
      title: 'Trendy Posts',
      onClickArrowLeft: () => alert('Arrow left'),
      onClickArrowRight: () => alert('Arrow right'),
    },
  };