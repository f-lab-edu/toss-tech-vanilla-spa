import Component from "../core/Component";
import { IListData } from "../pages/MainPage";

export default class ItemList extends Component {
  template() {
    const list = this.props.listHtml;
    return list
      .map((v: IListData) => {
        return `
            <li>
              <a href="/detail/${v.id}">
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
