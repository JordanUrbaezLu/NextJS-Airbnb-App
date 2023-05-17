import type { Meta, StoryObj } from "@storybook/react";

import MenuItem from "../app/components/navbar/MenuItem";

const meta: Meta<typeof MenuItem> = {
  title: "Airbnb/MenuItem",
  component: MenuItem,
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
  args: {
    onClick: () => undefined,
    label: "My reservations",
  },
};
