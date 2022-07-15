import { render, screen } from "@testing-library/react";
import Hello from "./Hello";
it("Should return string Hello World", () => {
  render(<Hello />);
  const helloText = screen.getByText("Hello world");
  expect(helloText).toBeInTheDocument();
});
