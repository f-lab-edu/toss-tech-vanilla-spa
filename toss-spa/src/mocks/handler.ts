import { http, HttpResponse } from "msw";
import techData from "./data/ListData.json";

export const handlers = [
  http.get("/api/list", () => {
    return HttpResponse.json(techData);
  }),
];
