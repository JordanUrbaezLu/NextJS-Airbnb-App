import type { Meta, StoryObj } from "@storybook/react";

import Button from "../app/components/Button";

const meta: Meta<typeof Button> = {
  title: "Airbnb/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Button",
  },
};
