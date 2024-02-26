import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/tech", () => {
    return HttpResponse.json([{ id: 1, title: "dongmin", desc: "qlsnaos12@naver.com", date: "2024.02.05" }]);
  }),

  http.get("/design", () => {
    return HttpResponse.json([{ id: 1, title: "dongmin", desc: "qlsnaos12@naver.com", date: "2024.02.05" }]);
  }),
];
