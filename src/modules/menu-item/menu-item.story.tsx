import type { Meta, StoryObj } from '@storybook/react';
import { MenuItem } from './menu-item.component';

const meta = {
  title: 'Menu/MenuItem',
  component: MenuItem,
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    primary: true,
    label: 'MenuItem',
  },
};
