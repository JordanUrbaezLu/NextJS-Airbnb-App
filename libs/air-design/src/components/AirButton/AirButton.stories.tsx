import type { Meta, StoryObj } from "@storybook/react";

import AirButton from "./AirButton";

import { FcReddit } from "react-icons/fc";

const meta: Meta<typeof AirButton> = {
  title: "Airbnb/AirButton",
  component: AirButton,
};

export default meta;
type Story = StoryObj<typeof AirButton>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: "Icon",
    icon: FcReddit,
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    outline: true,
  },
};

export const OutlineAndSmall: Story = {
  args: {
    children: "Outline",
    small: true,
    outline: true,
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    small: true,
  },
};

export const SmallWithIcon: Story = {
  args: {
    children: "Small + Icon",
    small: true,
    icon: FcReddit,
  },
};
