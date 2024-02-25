import ContentList from "../components/content-list";

const List = new ContentList("tech");

class Tech {
  template() {
    return `
        <main>
            <div class="main-wrap">
                <h2 class="content-title">개발</h2>
        
                <section class="tech">
                    ${List.template()}
                </section>
            </div>
        </main>
        `;
  }
}

export default new Tech();
