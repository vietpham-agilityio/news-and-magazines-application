import type { Meta, StoryObj } from '@storybook/react';

import { TagGroup } from '@/ui/features';

// mock data
import { listTagItems } from '@/mocks';

const meta = {
  title: 'Components/Feature/TagGroup',
  component: TagGroup,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TagGroup>;

export default meta;
type Story = StoryObj<typeof TagGroup>;

export const TagGroupDefault: Story = {
  args: {
    listTags: listTagItems,
  },
};
