import { act, renderHook } from "@testing-library/react";

import { useCounter } from "./useCounter";
import { describe, expect, it } from "vitest";

describe("useCounter()", () => {
  it("should use counter", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
    expect(typeof result.current.setCount).toBe("function");
  });

  it("should increment counter", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it("should decrement counter", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });

  // it("should default value works", () => {});
  //
  // it("should decrement counter with default value", () => {});
  //
  // it("should set counter", () => {});
  //
  // it("should reset counter", () => {});
});
