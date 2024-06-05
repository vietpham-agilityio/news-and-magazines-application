import type { Meta, StoryObj } from '@storybook/react';

import { SearchBar } from '@/ui/components';
import { ThreeDots, Search } from '@/ui/components/Icons';

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const SearchBarWithPlaceHolder: Story = {
  args: {
    name: 'search',
    type: 'text',
    placeholder: 'Search everything',
  },
};
