import { routes, parsePath, getUrlParams } from "./utils/RouterFunctions";

export interface IRouter {
  path: string;
  view: (params?: { [key: string]: string }) => void;
}

export interface IRouterWithParams {
  route: IRouter;
  fragmentRegExp: RegExp;
  params: string[];
}

export default class Router {
  init() {
    document.addEventListener("DOMContentLoaded", () => {
      document.body.addEventListener("click", (e) => {
        if (e.target !== null) {
          const target = e.target as HTMLElement;
          const anchorTarget = target.closest("a");
          if (!(anchorTarget instanceof HTMLAnchorElement)) return;

          e.preventDefault();
          history.pushState("", "", anchorTarget.href);
          this.checkRoutes();
        }
      });
      // 뒤로가기, 앞으로 가기는 popstate 발생. App을 재호출
      window.addEventListener("popstate", () => {
        this.checkRoutes();
      });

      this.checkRoutes();

      return;
    });
  }

  checkRoutes() {
    // /tech로 리다이렉팅

    if (window.location.pathname === "/") {
      history.pushState("", "", "/tech");
    }

    const pageMatch = routes.map((route: IRouter) => {
      return {
        route,
        ...parsePath(route.path),
      };
    });

    let matchRoute = pageMatch.find((route) => route.fragmentRegExp.test(window.location.pathname));

    if (matchRoute?.params.length) {
      const urlParams = getUrlParams(matchRoute, window.location.pathname);
      matchRoute.route.view(urlParams);
    } else {
      if (matchRoute) {
        matchRoute.route.view();
      }
    }
    return matchRoute?.route;
  }
}
