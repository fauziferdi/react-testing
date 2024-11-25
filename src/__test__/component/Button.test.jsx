import { render, screen } from "@testing-library/react";
import Button from "../../component/Button.jsx";

describe("Button component testing", () => {
  test("renders button label", () => {
    render(<Button label="click me" />);
    expect(screen.getByText("click me")).toBeInTheDocument();
  });
});
