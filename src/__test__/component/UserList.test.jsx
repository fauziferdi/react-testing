import { render, screen } from "@testing-library/react";
import UserList from "../../component/UserList";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve([{ id: 1, name: "John Doe" }]),
  });
});

describe("UserList component testing", () => {
  test("render user list", async () => {
    render(<UserList />);
    expect(await screen.findByText("John Doe")).toBeInTheDocument();
  });
});
