import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import HelloWorld from "./Hello";

describe("renders Hello Component", () => {
  it("renders name", async () => {
    render(<HelloWorld name="Vitest" />);

    expect(screen.getByText("Hello Vitest x1!")).toBeInTheDocument();
    const button = screen.getByRole("button", { name: "Increment" });
    await userEvent.click(button);

    expect(screen.getByText("Hello Vitest x2!")).toBeInTheDocument();
  });
});
