import Component from "../../core/Component";

export default class Header extends Component {
  template() {
    return `
        <div class="header-wrap">
            <div class="header-wrap__inner">
                <h1 id="logo">
                    <a data-navigate="/" href="javascript:void(0);"><img src="/img/common/logo.png" alt="tosstech"/></a>
                </h1>
                <ul>
                    <li><a href="javascript:void(0);" data-navigate="/design">디자인</a></li>
                    <li><a href="javascript:void(0);" data-navigate="/tech">기술</a></li>
                    <li><button class="toss-btn"><a href="https://toss.im/career/jobs">채용 바로가기</a></button></li>
                </ul>
            </div>

        </div>
    `;
  }
}
