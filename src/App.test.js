import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Aaron portfolio heading", () => {
  render(<App />);
  const heading = screen.getByText(/Say Hi from/i);
  expect(heading).toBeInTheDocument();
});
