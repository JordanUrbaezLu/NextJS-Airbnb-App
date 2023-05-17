import type { Meta, StoryObj } from "@storybook/react";

import Search from "../app/components/navbar/Search";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Search> = {
  title: "Airbnb/Search",
  component: Search,
};

export default meta;
type Story = StoryObj<typeof Search>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: undefined,
};
