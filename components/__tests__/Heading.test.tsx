import { render, screen } from "@testing-library/react";
import Heading from "../Heading";

describe("Heading", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<Heading title="Airbnb" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe("Props", () => {
    test("Should render center prop correctly", () => {
      render(<Heading title="Airbnb" center />);

      expect(screen.getByRole("heading")).toHaveClass("text-center");
    });
  });
});
