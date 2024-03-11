# 토스 테크 블로그 SPA 클론 코딩

토스 테크 블로그를 Vanilla js로 직접 클론코딩 해보며 우리가 주로 사용하는 spa library/framework에서 많이 사용했던 컴포넌트 방식의 개발을 하기위해 어떤 작업을 해야하는지,
SPA구현을 위해 router는 어떻게 작성하는지, 그리고 리액트의 생명주기에 대해서 조금 더 공부해 볼 수 있었고 직접 만들어 본 좋은 기회가 되었습니다.

## 목차
[1.실행 방법](#실행-방법)
[2.페이지 미리보기](#페이지-미리보기)
[3.주요 파일 및 코드](#주요-파일-및-코드)
[4.추가 개발](#추가-개발)


### 실행 방법

```
cd toss-spa
```

```
npm install
```

```
npm run dev
```

---

### 페이지 미리보기
![chrome_w2zByWbO18](https://github.com/f-lab-edu/toss-tech-vanilla-spa/assets/73930706/d4ed160e-4968-4dbb-99a8-fdf35f2b4bf8)


---

### 주요 파일 및 코드 

#### - Component.ts
``` javascript
export default class Component {
  $target; //컴포넌트를 넣을 부모 요소
  $props; // 부모로 부터 전달 받을 요소
  $state; // 컴포넌트 state

  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {} // 컴포넌트의 state 설정 및 초기화

  mounted() {} // 컴포넌트가 마운트 되었을때 실행

  template() { // 컴포넌트의 UI를 구성하며 return
    return ''; 
  }

  render() { // 컴포넌트의 렌더링
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  setEvent() {} // 컴포넌트의 이벤트를 미리 설정

  setState(newState) { // 컴포넌트의 state를 변경하고 리렌더링
    this.$state = { ...this.$state, ...newState };
    this.render();
  }

}
```

모든 컴포넌트의 core가 되는 Component class의 코드로써 Component는 export default로 다른 컴포넌트에서 상속받아 사용이 가능하며 필요에 따라 오버라이딩하여 사용이 가능 합니다.

class가 만들어질때 인자로 받은 target, props를 이 컴포넌트의 target과 props값으로 할당 해준 뒤, 순서에 맞게 setup으로 초기화를 해줍니다.

그 후 setEvent로 해당 컴포넌트에서 쓰일 이벤트를 set해준 뒤 컴포넌트를 render 합니다.

render는 작성한 컴포넌트의 view를 return하는 template 메서드를 실행 후 mounted를 실행하는 순서를 기본적으로 가지게 하여 리액트의 동작과 비슷하게 구성해보고자 이렇게 작성했습니다.

--- 

#### - router/index.ts
``` typescript
import { routes, parsePath, getUrlParams } from "./route";

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
          if (!anchorTarget) return;
          const { navigate } = anchorTarget.dataset;
          // MainPage 전환시 API 호출 방지
          if (!anchorTarget.matches("a[data-navigate]") || navigate === window.location.pathname) return;
          if (navigate === "/") {
            history.pushState("", "", "/tech");
          } else {
            history.pushState("", "", navigate);
          }
          window.scrollTo(0, 0);
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
```

#### - router/route.ts
``` typescript
import View from "../components/common/View";
import { IRouter, IRouterWithParams } from "../router";

const ROUTE_PARAMETER_REGEXP = /:(\w+)/g; // :name, :song등 path parameters를 매칭하기 위한 정규표현식
const URL_REGEXP = "([^\\/]+)";

export const routes: IRouter[] = [
  {
    path: "/tech",
    view: () => new View(document.querySelector("main")),
  },
  {
    path: "/design",
    view: () => new View(document.querySelector("main")),
  },
  {
    path: "/detail/:id",
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
  const params: Record<string, string> = {};
  const matches = path.match(route.fragmentRegExp);

  if (!matches) return;
  matches.shift(); // 배열의 첫번째 값에는 url 전체가 담겨있으므로 제거해줍니다.
  matches.forEach((paramValue, index) => {
    const paramName = route.params[index];
    params[paramName] = paramValue;
  });
  return params;
};
```

route는 history를 이용하여 구현했으며 해당 프로젝트는 총 3개의 페이지로 구분되어 있고, routes는 각각 path와 view로 구성되어 있습니다.

라우터 기능을 하는 a tag에 data-navigate라는 dataset을 주었고, router의 init() 메서드를 실행하면 라우팅이 시작되며 동작 순서는 아래와 같습니다.

1. click한 a tag가 a[data-navigate]를 만족하는지 검사 후 맞다면 그 값을 pushState합니다.
  
2. routes 배열을 map을 돌려 각요소 route와 parsePath함수를 실행 하여 path와 parameter로 분리 후,
각각 path가 존재하는지 유추하는 정규식과 parameter를 push한 params 배열을
{
  fragmentRegExp: new RegExp(`^${parsedFragment}$`),
  params
 }  의 형태로 return되는 값을 넣어줍니다.

3. 그 후 전달받은 정규식 값이 window.location.pathname과 같은지 판별하는 matchRoute배열을 생성합니다.

4. matchRoute배열에 params가 존재 한다면 params의 name과 현재 pathname에 존재하는 매개변수값을 value로써 넣고 그 값들을 view함수의 파라미터로 전달 후 view를 보여줍니다.

5. 만약 params가 존재하지 않다면 위 과정은 생략한 후 view를 보여주게 됩니다.

위 순서 사이사이에 "/"값이 들어올때는 "/tech"로 리다이렉트 시키는 조건과 페이지 이동시 scroll을 위로 올려주는 코드들을 추가하였습니다.

---

### 추가 개발
기존 토스 테크 블로그에는 있지 않았지만 api response를 기다리는 동안 데이터를 불러오고 있다는 신호를 주고싶어 Spinner를 구현했습니다.

#### - 화면 스크린샷
![chrome_1Qg23Pa1Gs](https://github.com/f-lab-edu/toss-tech-vanilla-spa/assets/73930706/4b3885fb-46a9-4b2e-a51c-01acf80df11a)

개인적으로 흰색 화면이 보였다가 데이터가 바로 나오는것 보다는 로딩창을 보여준 후 데이터가 뜨는것이 더 자연스럽고 사용자 경험에 더 좋다고 생각하여 구현하게 되었습니다.

<div align="right">
  
[목차로 돌아가기](#목차)

</div>
