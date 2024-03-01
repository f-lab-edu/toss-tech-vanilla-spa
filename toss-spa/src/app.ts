import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import HireSection from "./components/common/HireSection";
import Component from "./core/Component";
import View from "./components/common/View";
// import NotFound from "./pages/NotFound";

export default class App extends Component {
  template() {
    // if(라우터 path에 포함된다면 아래 클래스들 그렇지 않다면 404페이지만)
    return `
      <header></header>
      <main></main>
      <section class="hire-section"></section>
      <footer></footer>
    `;
    // return `${NotFound.template()}`;
  }

  mounted() {
    if (this.$target) {
      new Header(this.$target.querySelector("header"));
      new View(this.$target.querySelector("main"));
      new HireSection(this.$target.querySelector(".hire-section"));
      new Footer(this.$target.querySelector("footer"));
    }
  }
}
