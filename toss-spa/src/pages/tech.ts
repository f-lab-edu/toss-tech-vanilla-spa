import ContentList from "../components/contentList";

const List = new ContentList("tech");

class Tech {
  template() {
    return `
        <main>
            <div class="main-wrap">
                <h2 class="content-title">개발</h2>

                <section class="tech">
                <ul class="item-list">
                    ${List.template()}
                </ul>
                </section>
            </div>
        </main>
    `;
  }
}

export default new Tech();
