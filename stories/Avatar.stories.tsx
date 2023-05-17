import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "../app/components/Avatar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Avatar> = {
  title: "Airbnb/Avatar",
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: undefined,
};
