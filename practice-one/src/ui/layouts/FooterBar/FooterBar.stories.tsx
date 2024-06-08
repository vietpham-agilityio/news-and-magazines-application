import type { Meta, StoryObj } from '@storybook/react';

import { FooterBar } from '@/ui/layouts';

const meta = {
  title: 'Components/Layouts/FooterBar',
  component: FooterBar,
} satisfies Meta<typeof FooterBar>;

export default meta;
type Story = StoryObj<typeof FooterBar>;

export const FooterBarDefault: Story = {
  args: {},
};
