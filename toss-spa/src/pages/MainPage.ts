import ItemList from "../components/ItemList";
import Component from "../core/Component";

export interface IListData {
  id: number;
  title: string;
  img: string;
  desc: string;
  date: string;
  type: string;
}

export default class MainPage extends Component {
  template() {
    return `
      <h2 class="content-title">${this.props.type === "tech" ? "개발" : "디자인"}</h2>
      
      <section class="${this.props.type}">
          <ul class="item-list">

          </ul>
      </section>`;
  }

  mounted() {
    if (!this.state) {
      this.getData();
    }
  }

  getData() {
    (async () => {
      if (this.props.type) {
        try {
          const response = await fetch(`/api/list`);
          const data = await response.json();
          this.updated(data);
          if (this.$target) {
            new ItemList(this.$target.querySelector(".item-list"), { type: this.props.type, listHtml: this.state.listHtml });
          }
        } catch (err) {
          console.dir(err);
        }
      }
    })();
  }

  updated(data: IListData[]) {
    this.setState({ listHtml: data });
  }
}
