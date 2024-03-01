import ItemList from "../components/ItemList";
import Component from "../core/Component";

export default class MainPage extends Component {
  template() {
    return `<h2 class="content-title">개발</h2>
    
        <section class="tech">
            <ul class="item-list">

            </ul>
        </section>`;
  }

  mounted() {
    if (this.$target) {
      new ItemList(this.$target.querySelector(".item-list"));
    }
  }
}
