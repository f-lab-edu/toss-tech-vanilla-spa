import Component from "../../core/Component";

export default class Header extends Component {
  template() {
    return `
        <div class="header-wrap">
            <div class="header-wrap__inner">
                <h1 id="logo">
                    <a href="/"><img src="/img/common/logo.png" alt="tosstech"/></a>
                </h1>
                <ul>
                    <li><a href="/design">디자인</a></li>
                    <li><a href="/tech">개발</a></li>
                    <li><button class="toss-btn">채용 바로가기</button></li>
                </ul>
            </div>

        </div>
    }`;
  }
}
