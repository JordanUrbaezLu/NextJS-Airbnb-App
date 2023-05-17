import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

describe("Button", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<Button onClick={jest.fn()} label="Airbnb" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe("Props", () => {
    test("Should render outline prop correctly", () => {
      render(<Button onClick={jest.fn()} label="Airbnb" outline />);

      expect(screen.getByRole("button", { name: "Airbnb" })).toHaveClass(
        "bg-white"
      );
    });

    test("Should render small prop correctly", () => {
      render(<Button onClick={jest.fn()} label="Airbnb" small />);

      expect(screen.getByRole("button", { name: "Airbnb" })).toHaveClass(
        "text-sm"
      );
    });
  });
});
