import Component from "../core/Component";

export default class DetailPage extends Component {
  template() {
    return `<div class="detail">detail ${this.props?.params.id}</div>`;
  }

  mounted() {
    console.log("Params:", this.props?.params);
  }
}
