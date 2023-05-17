import type { Meta } from "@storybook/react";

import { useState } from "react";
import Counter from "../components/inputs/Counter";

const meta: Meta<typeof Counter> = {
  title: "Airbnb/Counter",
  component: Counter,
};

export default meta;

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
