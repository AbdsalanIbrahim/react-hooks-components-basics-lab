import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders without errors", () => {
  expect(() => render(<App />)).not.toThrow();
});

test("renders the correct child components", () => {
  render(<App />);

  // Check for the nav link text in NavBar
  expect(screen.getByText("I'm a link!")).toBeInTheDocument();

  // Check for Home heading text
  expect(screen.getByRole("heading", { name: /home/i })).toBeInTheDocument();

  // Check for About heading text
  expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
});
