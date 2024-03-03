import View from "./components/common/View";

interface IRouter {
  path: string;
  view: () => void;
}

const routes: IRouter[] = [
  {
    path: "/tech",
    view: () => new View(document.querySelector("main")),
  },
  {
    path: "/design",
    view: () => new View(document.querySelector("main")),
  },
  {
    path: "/detail",
    view: () => new View(document.querySelector("main")),
  },
];

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
    const path = window.location.pathname;

    // /tech로 리다이렉팅
    if (path === "/") {
      history.pushState("", "", "/tech");
    }

    const pageMatch = routes.map((route: IRouter) => {
      return {
        route,
        isMatch: path === route.path,
      };
    });

    let matchRoute = pageMatch.find((route) => route.isMatch);
    if (matchRoute) {
      // 매칭된 라우트의 view 메서드를 호출하여 페이지 일부 업데이트
      matchRoute.route.view();
    }
    return matchRoute?.route;
  }
}
