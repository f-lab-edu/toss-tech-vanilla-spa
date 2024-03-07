import Spinner from "../components/common/Spinner";
import Component from "../core/Component";
import { IListData } from "./MainPage";

export default class DetailPage extends Component {
  template() {
    if (!this.state) {
      return `${Spinner.template()}`;
    }
    return `
    <div class="detail">
      <img src="${this.state?.DetailData.img}" alt="${this.state?.DetailData.title}" />
      <h2>${this.state?.DetailData.title}</h2>
      <div class="auth-profile">
        <img src="${this.state?.DetailData.avatar}">
        <div class="profile-content">
          <div class="profile-name">${this.state.DetailData.auth}</div>
          <span class="profile-date">${this.state.DetailData.date}</span>
        </div>
      </div>
      <p>${this.state.DetailData.content}</p>
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
          const detailData: IListData = data.find((v: IListData) => Number(v.id) === Number(propsId));
          this.updated(detailData);
        } catch (err) {
          console.dir(err);
        }
      }
    })();
  }

  updated(data: IListData) {
    this.setState({ DetailData: data });
  }
}
