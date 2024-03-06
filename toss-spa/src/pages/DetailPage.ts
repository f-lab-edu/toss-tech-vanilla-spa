import Component from "../core/Component";
import { IListData } from "./MainPage";

export default class DetailPage extends Component {
  template() {
    if (!this.state) {
      return "";
    }
    return `
    <div class="detail">
      <img src="${this.state?.DetailHtml.img}" alt="${this.state?.DetailHtml.title}" />
      <h2>${this.state?.DetailHtml.title}</h2>
      <p>${this.state.DetailHtml.desc}</p>
    </div>
    `;
  }

  mounted() {
    if (!this.state) {
      this.getData();
    }
  }

  getData() {
    (async () => {
      const propsId = this.props.params.id;
      if (propsId) {
        try {
          const response = await fetch(`/api/list`);
          const data = await response.json();
          const detailData = data.find((v: IListData) => Number(v.id) === Number(propsId));
          this.updated(detailData);
        } catch (err) {
          console.dir(err);
        }
      }
    })();
  }

  updated(data: IListData) {
    this.setState({ DetailHtml: data });
  }
}
