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

export const TrendyTitleSection: Story = {
  args: {
    title: 'Trendy Posts',
  },
};
