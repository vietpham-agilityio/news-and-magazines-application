import type { Meta, StoryObj } from '@storybook/react';

import { Information } from '@/ui/components';

const meta = {
  title: 'Components/Information',
  component: Information,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Information>;

export default meta;
type Story = StoryObj<typeof Information>;

export const InformationWithName: Story = {
  args: {
    name: "Raiden Shogun",
  },
};

export const ButtonWithInformation: Story = {
  args: {
    ...InformationWithName.args,
    information: "23/12/2018"
  },
};
