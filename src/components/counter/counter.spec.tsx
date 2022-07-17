import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "./counter";
import user from "@testing-library/user-event";

describe("init", () => {
  const exeCounter = (description: string, defaultCount: number) =>
    render(<Counter description={description} defaultCount={defaultCount} />);

  const exeFireEvent = (name: string) => {
    fireEvent.click(screen.getByRole("button", { name: name }));
  };

  describe('initialized with defaultCount={10} and description="www"', () => {
    it('renders currentCount="10"', () => {
      exeCounter("www", 10);
      expect(screen.getByText("Current Count: 10")).toBeInTheDocument();
      expect(screen.getByText(/www/i)).toBeInTheDocument();
    });
  });
  describe("Static text check", () => {
    it("defaultCount=0", () => {
      exeCounter("My Counter", 0);
      expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
      expect(screen.getByText(/my counter/i)).toBeInTheDocument();
    });
  });

  describe("When + is clicked", () => {
    it("defaultCount=0, then + clicked counter= 1", () => {
      exeCounter("My Counter", 0);
      exeFireEvent("Add to Counter");
      expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
    });
  });

  describe("When - is clicked", () => {
    it("defaultCount=0, then + clicked counter= 1", () => {
      exeCounter("My Counter", 0);
      exeFireEvent("Subtract from Counter");
      expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
    });
  });
});
