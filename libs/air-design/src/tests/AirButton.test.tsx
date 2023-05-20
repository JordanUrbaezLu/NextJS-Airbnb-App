import { render, screen } from "@testing-library/react";
import AirButton from "../components/AirButton/AirButton";
import { FcGoogle } from "react-icons/fc";
import { axe } from "jest-axe";

describe("AirButton", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <AirButton onClick={jest.fn()}>Airbnb</AirButton>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  describe("Accessibility", () => {
    test("Should have no accessibility violations.", async () => {
      const { container } = render(
        <AirButton onClick={jest.fn()}>Airbnb</AirButton>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe("Interaction", () => {
    test("Should trigger onClick when clicked", () => {
      const onClick = jest.fn();
      render(<AirButton onClick={onClick}>Airbnb</AirButton>);

      screen.getByRole("button", { name: "Airbnb" }).click();

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Props", () => {
    test("Should render children correctly", () => {
      render(<AirButton onClick={jest.fn()}>Airbnb</AirButton>);
      expect(
        screen.getByRole("button", { name: "Airbnb" })
      ).toBeInTheDocument();
    });

    test("Should render disabled prop correctly", () => {
      render(
        <AirButton disabled onClick={jest.fn()}>
          Airbnb
        </AirButton>
      );
      expect(screen.getByRole("button", { name: "Airbnb" })).toHaveAttribute(
        "disabled"
      );
    });

    test("Should render outline prop correctly", () => {
      render(
        <AirButton onClick={jest.fn()} outline>
          Airbnb
        </AirButton>
      );

      expect(screen.getByRole("button", { name: "Airbnb" })).toHaveClass(
        "bg-white"
      );
    });

    test("Should render small prop correctly", () => {
      render(
        <AirButton onClick={jest.fn()} small>
          Airbnb
        </AirButton>
      );

      expect(screen.getByRole("button", { name: "Airbnb" })).toHaveClass(
        "text-sm"
      );
    });

    test("Should render icon prop correctly", () => {
      render(
        <AirButton onClick={jest.fn()} icon={FcGoogle}>
          Airbnb
        </AirButton>
      );

      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    test("Should render small icon prop correctly", () => {
      render(
        <AirButton onClick={jest.fn()} icon={FcGoogle} small>
          Airbnb
        </AirButton>
      );

      expect(screen.getByRole("img")).toHaveClass("top-0");
    });
  });
});
