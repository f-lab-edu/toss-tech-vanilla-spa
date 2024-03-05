import { http, HttpResponse } from "msw";
import techData from "./data/TechData.json";
import designData from "./data/DesignData.json";

export const handlers = [
  http.get("/api/tech", () => {
    return HttpResponse.json(techData);
  }),

  http.get("/api/design", () => {
    return HttpResponse.json(designData);
  }),
];
