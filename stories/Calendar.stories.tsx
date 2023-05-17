import type { Meta, StoryObj } from "@storybook/react";

import Calendar from "../app/components/inputs/Calendar";
import { Range } from "react-date-range";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Calendar> = {
  title: "Airbnb/Calendar",
  component: Calendar,
};

export default meta;
type Story = StoryObj<typeof Calendar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = () => {
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  return (
    <Calendar
      onChange={(value) => setDateRange(value.selection)}
      value={dateRange}
    />
  );
};
