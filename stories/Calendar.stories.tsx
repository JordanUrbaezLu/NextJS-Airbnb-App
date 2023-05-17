import type { Meta } from "@storybook/react";

import Calendar from "../app/components/inputs/Calendar";
import { Range } from "react-date-range";
import { useState } from "react";

const meta: Meta<typeof Calendar> = {
  title: "Airbnb/Calendar",
  component: Calendar,
};

export default meta;

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
