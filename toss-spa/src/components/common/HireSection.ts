import Component from "../../core/Component";

export default class HireSection extends Component {
  template() {
    return `
        <div class="hire-wrap">
            <img src="/img/website_code_blue_alpha.png" alt="" />
            <div class="hire-content">
                <span class="content-title">토스팀이 만드는 수많은 혁신의 순간들</span>
                <p>당신과 함께 만들고 싶습니다. <br/> 지금, 토스팀에 합류하세요.</p>
                <button class="toss-btn">채용 중인 공고 보기</button>
            </div>
        </div>
`;
  }
}
