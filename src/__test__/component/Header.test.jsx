import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../component/Header";

describe("Header component testing", () => {
  test("renders Header text", () => {
    render(<Header />);
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toHaveTextContent("Header Page");
  });
});
