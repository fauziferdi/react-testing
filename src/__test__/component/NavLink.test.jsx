import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavLink from "../../component/NavLink";

describe("NavLink component testing", () => {
  test("render Link with correct href", () => {
    render(
      <MemoryRouter>
        <NavLink />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", { name: /about/i }).closest("a")
    ).toHaveAttribute("href", "/about");
  });
});
