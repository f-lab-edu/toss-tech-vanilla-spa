import View from "../components/common/View";
import { IRouter, IRouterWithParams } from "../router";

export const ROUTE_PARAMETER_REGEXP = /:(\w+)/g; // :name, :song등 path parameters를 매칭하기 위한 정규표현식
export const URL_REGEXP = "([^\\/]+)";

export const PATH = {
  TECH: "/tech",
  DESIGN: "/design",
  DETAIL: "/detail/:id",
} as const;

export const routes: IRouter[] = [
  {
    path: PATH.TECH,
    view: () => new View(document.querySelector("main")),
  },
  {
    path: PATH.DESIGN,
    view: () => new View(document.querySelector("main")),
  },
  {
    path: PATH.DETAIL,
    view: (params) => new View(document.querySelector("main"), { params }),
  },
];

export const parsePath = (fragment: string) => {
  const params: string[] = [];
  const parsedFragment = fragment
    .replace(ROUTE_PARAMETER_REGEXP, (_, paramName) => {
      params.push(paramName); // path parameter 이름을 추출하여 배열에 넣어줍니다. ["name", "song"]
      return URL_REGEXP; // path parameter에 매치되는 문자를 URL_REGEXP로 치환합니다.
    })
    .replace(/\//g, "\\/"); // "/" 의 텍스트로써 사용을 위해 모든 "/" 앞에 이스케이프 문자("\")를 추가해줍니다.

  return {
    fragmentRegExp: new RegExp(`^${parsedFragment}$`),
    params,
  };
};

export const getUrlParams = (route: IRouterWithParams, path: string) => {
  const params: { [key: string]: string } = {};
  const matches = path.match(route.fragmentRegExp);

  if (!matches) return;
  matches.shift(); // 배열의 첫번째 값에는 url 전체가 담겨있으므로 제거해줍니다.
  matches.forEach((paramValue, index) => {
    const paramName = route.params[index];
    params[paramName] = paramValue;
  });
  return params;
};
