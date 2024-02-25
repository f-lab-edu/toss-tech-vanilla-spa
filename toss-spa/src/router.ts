import Design from "./pages/design";
import Tech from "./pages/tech";

export interface IRouter {
  path: string;
  view: () => string;
}

export const tossRouter: IRouter[] = [
  {
    path: "/tech",
    view: () => Tech.template(),
  },
  {
    path: "/design",
    view: () => Design.template(),
  },
];
