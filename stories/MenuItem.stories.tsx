import type { Meta, StoryObj } from "@storybook/react";

import MenuItem from "../app/components/navbar/MenuItem";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MenuItem> = {
  title: "Airbnb/MenuItem",
  component: MenuItem,
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    onClick: () => undefined,
    label: "My reservations",
  },
};
