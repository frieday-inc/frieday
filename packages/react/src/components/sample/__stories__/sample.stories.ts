import type { Meta, StoryObj } from '@storybook/react';

import Sample from '../sample';

const meta: Meta<typeof Sample> = {
  title: 'Samples/SampleDiv',
  component: Sample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
