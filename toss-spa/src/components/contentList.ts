interface IListData {
  id: number;
  title: "string";
  desc: "string";
  date: "string";
}

class ContentList {
  private type: string;
  private listData: IListData[] = [];

  constructor(type: string) {
    this.type = type;
  }

  template() {
    this.getListData();
    return `
    <ul class="item-list">
        <li>
          <a href="javascript:;">
          <div class="list-img">
              <img src="https://static.toss.im/assets/payments/contents/payments-frontend-thumb-2.jpg" alt="" />
          </div>
          <div class="list-content">
              <h3>타이틀</h3>
              <p>설명</p>
              <span>2023.12.20</span>
          </div>
          </a>
      </li>
    </ul>`;
  }

  async getListData() {
    // MSW 모킹 예정
    if (this.type) {
      try {
        const response = await fetch(`/${this.type}`);
        this.listData = await response.json();
        console.log(this.listData);
      } catch (err) {
        console.dir(err);
      }
    }
  }
}

export default ContentList;
