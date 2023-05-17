import { render } from "@testing-library/react";
import Calendar from "../components/inputs/Calendar";

describe("Calendar", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Calendar
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
