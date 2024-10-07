import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Pagination from "./Pagination";

describe("Pagination", () => {
  it("renders a list of pages", async () => {
    render(
      <Pagination
        total={50}
        limit={10}
        currentPage={1}
        selectPage={() => {}}
      />,
    );

    const pageItems = screen.getAllByTestId("page-item");
    expect(pageItems).toHaveLength(5);
    expect(pageItems[0]).toHaveTextContent("1");
  });

  it("should select page 2", async () => {
    const handleClick = vi.fn();

    render(
      <Pagination
        total={50}
        limit={10}
        selectPage={handleClick}
        currentPage={1}
      />,
    );

    const pageItems = screen.getAllByTestId("page-item");
    await userEvent.click(pageItems[3]);
    expect(handleClick).toHaveBeenCalledTimes(1);

    await userEvent.click(pageItems[1]);
    expect(handleClick).toHaveBeenCalledWith(2);
  });
});
