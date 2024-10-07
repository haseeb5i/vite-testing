import { describe, it, expect } from "vitest";
import { screen, render, waitFor } from "@testing-library/react";
import TodoDetail from "./Todos";

describe.only("Todo", () => {
  it("displays todo title and status", async () => {
    render(<TodoDetail id={1} />);
    const todoTitle = await screen.findByRole("heading");
    expect(todoTitle).toBeInTheDocument();
  });

  it("displays not found if no data found", async () => {
    render(<TodoDetail id={210} />);
    await waitFor(() => {
      expect(screen.getByText(/no todo found/i)).toBeInTheDocument();
    }, );
  });
});
