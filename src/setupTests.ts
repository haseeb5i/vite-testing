import { afterAll, afterEach, beforeAll } from "vitest";
import { cleanup } from "@testing-library/react";
import { mockServer } from "./lib/mock-server";
import "@testing-library/jest-dom/vitest";

beforeAll(() => mockServer.listen());

afterAll(() => mockServer.close());

afterEach(() => {
  cleanup();
  mockServer.resetHandlers();
});
