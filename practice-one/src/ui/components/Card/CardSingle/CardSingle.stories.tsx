import type { Meta, StoryObj } from '@storybook/react';

import { CardSingle } from '@/ui/components';

const meta = {
  title: 'Components/CardSingle',
  component: CardSingle,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardSingle>;

export default meta;
type Story = StoryObj<typeof CardSingle>;

export const CardSingleWithImage: Story = {
  args: {
    imageSrc:
      'https://images.unsplash.com/photo-1716223996699-9738f0f12805?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    alt: 'image cover',
  },
};

export const CardSingleWithContent: Story = {
  args: {
    ...CardSingleWithImage.args,
    title: 'Street Way To The Conner',
    content:
      "Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users. ",
  },
};
