import type { Meta, StoryObj } from "@storybook/react";

import Search from "../components/navbar/Search";

const meta: Meta<typeof Search> = {
  title: "Airbnb/Search",
  component: Search,
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: undefined,
};
