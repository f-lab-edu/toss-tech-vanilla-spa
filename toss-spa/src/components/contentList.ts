export interface IListData {
  id: number;
  title: string;
  img: string;
  desc: string;
  date: string;
  type: string;
}

class ContentList {
  private type: string;
  constructor(type: string) {
    this.type = type;
  }

  async template() {
    const data = await this.getListData();
    const listHtml = data
      .map((list: IListData) => {
        return `
            <li id="${list.type}${list.id}">
                <a href="/article/${list.type}${list.id}">
                <div class="list-img">
                    <img src="${list.img}" alt="" />
                </div>
                <div class="list-content">
                    <h3>${list.title}</h3>
                    <p>${list.desc}</p>
                    <span>${list.date}</span>
                </div>
                </a>
            </li>`;
      })
      .join("");

    const $List = document.querySelector(".item-list") as HTMLElement;
    $List.innerHTML = listHtml;
  }

  async getListData() {
    // MSW 모킹 예정
    if (this.type) {
      try {
        const response = await fetch(`/api/${this.type}`);
        const data = await response.json();
        return data;
      } catch (err) {
        console.dir(err);
      }
    }
  }
}

export default ContentList;
