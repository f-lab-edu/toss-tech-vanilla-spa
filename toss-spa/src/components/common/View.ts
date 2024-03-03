import Component from "../../core/Component";
import DetailPage from "../../pages/DetailPage";
import MainPage from "../../pages/MainPage";
import { PATH } from "../../router";

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
      if (path === PATH.TECH || path === PATH.DESIGN) {
        new MainPage(this.$target.querySelector(".main-wrap"), { type: path.replace("/", "") });
      } else if (path === PATH.DETAIL) {
        new DetailPage(this.$target.querySelector(".main-wrap"));
      }
    }
  }
}
