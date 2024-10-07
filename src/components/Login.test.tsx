import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";

import { mockServer } from "../lib/mock-server";
import Login from "./Login";

describe("Login", () => {
  it.todo("allows the user to login successfully", async () => {
    const fakeUserResponse = { token: "fake_user_token" };

    mockServer.use(
      http.post("/api/login", () => {
        return HttpResponse.json(fakeUserResponse);
      })
    );

    render(<Login />);

    // get input elements and type some values

    // submit the form

    // check if you have congrats message

    // check if window.localStorage has token and it is same as above
  });
});
