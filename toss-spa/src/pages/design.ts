import ContentList from "../components/contentList";

const List = new ContentList("design");

class Design {
  template() {
    return `
      <main>
          <div class="main-wrap">
              <h2 class="content-title">디자인</h2>

              <section class="design">
                <ul class="item-list">
                  ${List.template()}
                </ul>
              </section>
          </div>
      </main>
    `;
  }
}

export default new Design();
