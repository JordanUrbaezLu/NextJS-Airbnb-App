import { render } from "@testing-library/react";
import Avatar from "../Avatar";

describe("Avatar", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<Avatar src={undefined} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
