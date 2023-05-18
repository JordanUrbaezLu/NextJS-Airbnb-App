import { render } from "@testing-library/react";
import DatePicker from "../components/inputs/DatePicker";

describe("DatePicker", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <DatePicker
        value={{
          startDate: new Date(2023, 5, 2),
          endDate: new Date(2023, 5, 2),
          key: "selection",
        }}
        onChange={jest.fn()}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
