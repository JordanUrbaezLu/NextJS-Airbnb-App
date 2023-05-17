import type { Meta, StoryObj } from "@storybook/react";

import Heading from "../app/components/Heading";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Heading> = {
  title: "Airbnb/Heading",
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: "Airbnb",
  },
};
