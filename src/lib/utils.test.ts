import { describe, expect, it } from "vitest";
import { formatAddress, formatDate } from "./utils";

describe("tests for helper functions", () => {
  it("formats the address ", () => {
    expect(formatAddress("0x1234567890123456789012345678901234567890")).toBe(
      "0x1234...7890",
    );
  });

  it("formats the date", () => {
    expect(formatDate("2022-01-01T00:00:00.000Z")).toStrictEqual("01/01/2022");
  });
});
