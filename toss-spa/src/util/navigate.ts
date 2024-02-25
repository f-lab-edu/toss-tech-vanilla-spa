import { App } from "../app";

export const navigate = (url: string) => {
  history.pushState("", "", url);
  App();
};
