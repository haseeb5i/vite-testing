import { describe, expect, it } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import Fetch from "./Fetch";

describe.todo("Fetch", () => {
  it.todo("loads and displays greeting", async () => {
    render(<Fetch url="/greeting" />);

    fireEvent.click(screen.getByText("Load Greeting"));

    await screen.findByRole("heading");
    expect(screen.getByRole("heading")).toHaveTextContent("hello there");
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("handles server error", async () => {
    render(<Fetch url="/greeting-err" />);

    fireEvent.click(screen.getByText("Load Greeting"));

    await screen.findByRole("alert");

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Oops, failed to fetch!",
    );
    expect(screen.getByRole("button")).not.toBeDisabled();
  });
});
