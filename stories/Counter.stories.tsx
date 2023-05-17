import type { Meta } from "@storybook/react";

import Counter from "../app/components/inputs/Counter";
import { useState } from "react";

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
