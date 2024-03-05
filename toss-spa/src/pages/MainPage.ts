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

console.log("render");
export default class MainPage extends Component {
  template() {
    console.log("template");
    return `
      <h2 class="content-title">${this.props.type === "tech" ? "개발" : "디자인"}</h2>
      
      <section class="${this.props.type}">
          <ul class="item-list">

          </ul>
      </section>`;
  }

  mounted() {
    console.log("mount");
    if (!this.state) {
      this.getData();
    }
  }

  getData() {
    (async () => {
      if (this.props.type) {
        console.log("getData");
        try {
          const response = await fetch(`/api/${this.props.type}`);
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
    console.log("update");
    this.setState({ listHtml: data });
  }
}
