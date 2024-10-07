import { describe, expect, it, } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import HiddenMessage from "./Message";

describe("shows and hides message based on check", () => {
  it("shows the children when the checkbox is checked", async () => {
    const testMessage = "Test Message";
    render(<HiddenMessage>{testMessage}</HiddenMessage>);

    // assert messaeg is not shown
    expect(screen.queryByText(testMessage)).toBeNull();

    await userEvent.click(screen.getByLabelText(/show/i));

    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
