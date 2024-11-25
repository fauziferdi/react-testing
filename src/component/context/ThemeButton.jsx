import React from "react";
import { useTheme } from "./ThemeContext";

export default function ThemeButton() {
  const theme = useTheme();
  return <button style={{ backgroundColor: theme }}>Klik saya</button>;
}
