import Component from "../core/Component";
import { IListData } from "../pages/MainPage";

export default class ItemList extends Component {
  template() {
    const list = this.props.listHtml;
    const filteredList = list.filter((v: IListData) => v.type === this.props.type);
    return filteredList
      .map((v: IListData) => {
        return `
            <li>
              <a class="navigate" href="javascript:void(0);" data-navigate="/detail/${v.id}">
                <div class="list-img">
                    <img src="${v.img}" alt="" />
                </div>

                <div class="list-content">
                    <h3>${v.title}</h3>
                    <p>${v.desc}</p>
                    <span>${v.date}</span>
                </div>
              </a>
            </li>`;
      })
      .join("");
  }
}
