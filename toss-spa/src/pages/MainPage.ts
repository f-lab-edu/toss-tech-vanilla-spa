import ItemList from "../components/ItemList";
import Component from "../core/Component";

export default class MainPage extends Component {
  template() {
    return `<h2 class="content-title">${this.props.type === "tech" ? "개발" : "디자인"}</h2>
    
        <section class="${this.props.type}">
            <ul class="item-list">

            </ul>
        </section>`;
  }

  mounted() {
    if (this.$target) {
      new ItemList(this.$target.querySelector(".item-list"), { type: this.props.type });
    }
  }
}
