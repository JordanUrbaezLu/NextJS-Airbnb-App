import type { Meta } from "@storybook/react";

import { useState } from "react";
import { Range } from "react-date-range";
import Calendar from "../components/inputs/Calendar";

const meta: Meta<typeof Calendar> = {
  title: "Airbnb/Calendar",
  component: Calendar,
};

export default meta;

export const Default = () => {
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(2023, 5, 2),
    endDate: new Date(2023, 5, 2),
    key: "selection",
  });
  return (
    <Calendar
      onChange={(value) => setDateRange(value.selection)}
      value={dateRange}
    />
  );
};
