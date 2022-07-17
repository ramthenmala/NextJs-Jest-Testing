import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "./counter";

describe("init", () => {
  const exeCounter = () =>
    render(<Counter description="My Counter" defaultCount={0} />);

  const exeFireEvent = (name: string): void => {
    fireEvent.click(screen.getByRole("button", { name: name }));
  };

  it("defaultCount=0", () => {
    exeCounter();
    expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
    expect(screen.getByText(/my counter/i)).toBeInTheDocument();
  });

  describe("When + is clicked", () => {
    it("defaultCount=0, then + clicked counter= 1", () => {
      exeCounter();
      exeFireEvent("Add to Counter");
      expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
    });
  });

  describe("When - is clicked", () => {
    it("defaultCount=0, then + clicked counter= 1", () => {
      exeCounter();
      exeFireEvent("Subtract from Counter");
      expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
    });
  });
});
