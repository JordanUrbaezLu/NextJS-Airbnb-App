import { render } from "@testing-library/react";
import MenuItem from "../components/navbar/MenuItem";

describe("MenuItem", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <MenuItem label="Airbnb" onClick={jest.fn()} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
