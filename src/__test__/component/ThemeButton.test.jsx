import { render, screen } from "@testing-library/react";
import ThemeProvider from "../../component/context/ThemeContext";
import ThemeButton from "../../component/context/ThemeButton";

describe("Theme Butoon component testing", () => {
  test("render button with correct theme", () => {
    render(
      <ThemeProvider value="red">
        <ThemeButton />
      </ThemeProvider>
    );
    expect(screen.getByRole("button")).toHaveStyle({ backgroundColor: "red" });
  });
});
