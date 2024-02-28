import { http, HttpResponse } from "msw";
import techData from "./techData.json";
import designData from "./designData.json";
export const handlers = [
  http.get("/api/tech", () => {
    return HttpResponse.json(techData);
  }),

  http.get("/api/design", () => {
    return HttpResponse.json(designData);
  }),
];
