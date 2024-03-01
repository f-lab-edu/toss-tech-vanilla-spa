import Component from "../../core/Component";
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
      new MainPage(this.$target.querySelector(".main-wrap"));
    }
  }
}
