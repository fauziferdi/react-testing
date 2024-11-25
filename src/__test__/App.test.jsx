import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App component testing", () => {
  test("render component", () => {
    render(<App />);
    const viteLogo = screen.getByAltText("Vite logo");
    expect(viteLogo).toBeInTheDocument();
  });

  test("render react logo", () => {
    render(<App />);
    const reactLogo = screen.getByAltText("React logo");
    expect(reactLogo).toBeInTheDocument();
  });

  test("display initial count 0", () => {
    render(<App />);
    const countElement = screen.getByText(/count is 0/i);
    expect(countElement).toBeInTheDocument();
  });

  test("increment count", () => {
    render(<App />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const countElement = screen.getByText(/count is 1/i);
    expect(countElement).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
