import type { Meta, StoryObj } from '@storybook/react';

// components
import { SearchBar } from '@/ui/components';

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
