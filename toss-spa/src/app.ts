import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import HireSection from "./components/common/HireSection";
import Component from "./core/Component";
import View from "./components/common/View";
import Router from "./router/index";
import NotFound from "./pages/NotFound";
import { worker } from "./mocks/browser";

const router = new Router();
const checkedRoute = router.checkRoutes();

router.init();

if (process.env.NODE_ENV === "development") {
  await worker.start();
}

export default class App extends Component {
  template() {
    return checkedRoute
      ? `
    <header></header>
    <main></main>
    <section class="hire-section"></section>
    <footer></footer>
  `
      : `${NotFound.template()}`;
  }

  setup() {}

  mounted() {
    if (this.$target && checkedRoute) {
      new Header(this.$target.querySelector("header"));
      new View(this.$target.querySelector("main"));
      new HireSection(this.$target.querySelector(".hire-section"));
      new Footer(this.$target.querySelector("footer"));
    }
  }
}
