import { http, HttpResponse } from "msw";
import ListData from "./data/ListData.json";

export const handlers = [
  // MainPage의 list목록 전체
  http.get("/api/list", () => {
    return HttpResponse.json(ListData);
  }),

  // DetailPage에서 params로 받은것에 대한 내용
  http.get("/api/list/:id", (req) => {
    const { id } = req.params;
    const filteredListData = ListData.find((item) => item.id === Number(id));
    return HttpResponse.json(filteredListData);
  }),
];
