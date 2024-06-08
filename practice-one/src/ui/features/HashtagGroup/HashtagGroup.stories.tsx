import type { Meta, StoryObj } from '@storybook/react';

import { HashtagGroup } from '@/ui/features';

// mock
import { listHashtagsItem } from '@/mocks';

const meta = {
  title: 'Components/Feature/HashtagGroup',
  component: HashtagGroup,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HashtagGroup>;

export default meta;
type Story = StoryObj<typeof HashtagGroup>;

export const HashtagGroupDefault: Story = {
  args: {
    listHashtags: listHashtagsItem
  },
};
