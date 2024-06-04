import type { Meta, StoryObj } from '@storybook/react';

// component
import { Tag } from '@/ui/components';

// icons
import { File } from '@/ui/components/Icons';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof Tag>;

export const TagWithIcon: Story = {
  args: {
    content: 'Category: Sport',
    icon: <File />
  },
};

export const TagWithLongContent: Story = {
    args: {
      content: 'This is a long story',
      icon: <File />
    },
  };