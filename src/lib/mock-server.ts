import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";

const handlers = [
  http.get("https://rest-endpoint.example/path/to/posts", () => {
    return HttpResponse.json([]);
  }),
  http.get("/greeting", () => {
    return HttpResponse.json({ greeting: "hello there" });
  }),
  http.get("/greeting-err", () => {
    return new HttpResponse(null, { status: 500 });
  }),
  http.get("https://jsonplaceholder.typicode.com/todos/1", () => {
    return HttpResponse.json({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    });
  }),
  http.get("https://jsonplaceholder.typicode.com/todos/210", () => {
    return new HttpResponse(null, { status: 404 });
  }),
];

export const mockServer = setupServer(...handlers);
