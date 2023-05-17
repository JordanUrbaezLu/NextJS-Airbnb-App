import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "../components/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Airbnb/Avatar",
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: undefined,
};
