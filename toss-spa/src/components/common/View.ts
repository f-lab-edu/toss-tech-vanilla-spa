import Component from "../../core/Component";
import DetailPage from "../../pages/DetailPage";
import MainPage from "../../pages/MainPage";

export default class View extends Component {
  template() {
    return `
        <div class="main-wrap">
            
        </div>
    `;
  }

  mounted() {
    if (this.$target) {
      // 만약 path가 DetailPage가 아니라면
      const path = window.location.pathname;
      if (path === "/design" || path === "/tech") {
        new MainPage(this.$target.querySelector(".main-wrap"), { type: path.replace("/", "") });
      } else if (path === "/detail") {
        new DetailPage(this.$target.querySelector(".main-wrap"));
      }
    }
  }
}
