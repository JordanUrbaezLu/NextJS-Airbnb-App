import type { Meta, StoryObj } from "@storybook/react";

import Counter from "../app/components/inputs/Counter";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Counter> = {
  title: "Airbnb/Counter",
  component: Counter,
};

export default meta;
type Story = StoryObj<typeof Counter>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <Counter
      title="Counter"
      subtitle="Subtitle"
      value={count}
      onChange={(count) => setCount(count)}
    />
  );
};
