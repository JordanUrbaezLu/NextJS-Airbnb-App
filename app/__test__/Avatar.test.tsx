import { render } from "@testing-library/react";
import Avatar from "../components/Avatar";

describe("Avatar", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<Avatar src={undefined} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
