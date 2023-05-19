import type { Meta } from "@storybook/react";

import { useState } from "react";
import { Range } from "react-date-range";
import DatePicker from "../components/inputs/DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Airbnb/DatePicker",
  component: DatePicker,
};

export default meta;

export const Default = () => {
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(2023, 5, 2),
    endDate: new Date(2023, 5, 2),
    key: "selection",
  });
  return (
    <DatePicker
      onChange={(value) => setDateRange(value.selection)}
      value={dateRange}
    />
  );
};
