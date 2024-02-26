import Footer from "./components/common/footer";
import Header from "./components/common/header";
import HireSection from "./components/common/hire-section";
import NotFound from "./pages/not-found";
import { IRouter, tossRouter } from "./router";
import { navigate } from "./util/navigate";
import { worker } from "./mocks/browser";

worker.start();
const router = tossRouter;

export const App = async () => {
  const pageMatch = router.map((route: IRouter) => {
    return {
      route,
      isMatch: window.location.pathname === route.path,
    };
  });

  let match = pageMatch.find((route) => route.isMatch);
  const View = match?.route.view() ?? NotFound.template();

  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    ${Header.template()}
    ${View}
    ${HireSection.template()}
    ${Footer.template()}
  `;
};

App();

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target !== null) {
      const target = e.target as HTMLElement;
      const anchorTarget = target.closest("a");
      if (!(anchorTarget instanceof HTMLAnchorElement)) return;

      e.preventDefault();
      navigate(anchorTarget.href);
    }
  });
  App();

  // 뒤로가기, 앞으로 가기는 popstate 발생. App을 재호출
  window.addEventListener("popstate", App);
});
