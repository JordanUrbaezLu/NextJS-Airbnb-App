import { render, screen } from "@testing-library/react";
import Counter from "../components/inputs/Counter";

describe("Counter", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Counter
        onChange={jest.fn()}
        title="Airbnb"
        value={0}
        subtitle="subtitle"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  describe("Interaction", () => {
    test("Should trigger onChange on add and decrease", () => {
      const onChange = jest.fn();

      const { rerender } = render(
        <Counter
          onChange={onChange}
          title="Airbnb"
          value={0}
          subtitle="subtitle"
        />
      );
      const subtractButton = screen.getAllByRole("button")[0];
      const addButton = screen.getAllByRole("button")[1];

      subtractButton.click();
      expect(onChange).toHaveBeenCalledTimes(1);

      addButton.click();
      expect(onChange).toHaveBeenCalledTimes(2);

      rerender(
        <Counter
          onChange={onChange}
          title="Airbnb"
          value={1}
          subtitle="subtitle"
        />
      );

      subtractButton.click();
      expect(onChange).toHaveBeenCalledTimes(2);
    });
  });
});
