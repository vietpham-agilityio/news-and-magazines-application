import type { Meta, StoryObj } from '@storybook/react';

import { SubmitButton } from '@/ui/components';
import { ChatBoxSmall } from '@/ui/components/Icons';

const meta = {
  title: 'Components/SubmitButton',
  component: SubmitButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SubmitButton>;

export default meta;
type Story = StoryObj<typeof SubmitButton>;

export const Default: Story = {
  args: {
    label: 'Submit Button',
    leftIcon: <ChatBoxSmall />
  },
};