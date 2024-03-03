import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import HireSection from "./components/common/HireSection";
import Component from "./core/Component";
import View from "./components/common/View";
import Router from "./router";
import NotFound from "./pages/NotFound";
// import NotFound from "./pages/NotFound";

const router = new Router();
const checkedRoute = router.checkRoutes();

router.init();

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
