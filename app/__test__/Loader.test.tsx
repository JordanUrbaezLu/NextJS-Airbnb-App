import { render } from "@testing-library/react";
import Loader from "../components/Loader";

describe("Loader", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<Loader />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
