class ContentList {
  private type;
  constructor(type: string) {
    this.type = type;
  }
  template() {
    return this.type === "tech"
      ? `
    <ul class="item-list">
        <li>
            <a href="javascript:;">
            <div class="list-img">
                <img src="https://static.toss.im/assets/payments/contents/payments-frontend-thumb-2.jpg" alt="" />
            </div>
            <div class="list-content">
                <h3>프론트엔드 로깅 신경 안 쓰기</h3>
                <p>프론트엔드 개발자라면 한 번쯤 고민해봤을 클라이언트 로깅 개선 과정을 공유합니다.</p>
                <span>2023.12.20</span>
            </div>
            </a>
        </li>

        <li>
            <a href="javascript:;">
            <div class="list-img">
                <img src="https://static.toss.im/assets/payments/contents/contents-fx-thumb.jpg" alt="" />
            </div>
            <div class="list-content">
                <h3>인자가 많은 메서드는 왜 나쁠까?</h3>
                <p>인자가 많은 메서드를 함께 리팩토링 하면서 코드 사용자 입장에서 코드 복잡성을 관리하는 방법을 알아봅니다.</p>
                <span>2023.11.29</span>
            </div>
            </a>
        </li>
    </ul>`
      : `<ul class="item-list">
        <li>
            <a href="javascript:;">
            <div class="list-img">
                <img src="https://static.toss.im/assets/toss-tech/design-article-toss-money-transfer-bank-recommendation.png" alt="" />
            </div>
            <div class="list-content">
                <h3>토스에서 하루 만에 제품 출시하는 법</h3>
                <p>모든 토스 디자이너가 사용하는 제품, 하루 만에 만들 수 있을까요?</p>
                <span>2024.2.15</span>
            </div>
            </a>
        </li>

        <li>
            <a href="javascript:;">
            <div class="list-img">
                <img src="https://static.toss.im/illusts-common/research_blog.png" alt="" />
            </div>
            <div class="list-content">
                <h3>UX 리서처, 신입은 어디에서 경력을 쌓나요?</h3>
                <p>유저 리서치 팀에서는 처음으로 신입 리서처를 채용했어요. 새롭게 설계한 채용 과정을 소개할게요.</p>
                <span>2024.1.30</span>
            </div>
            </a>
        </li>
    </ul>`;
  }

  getListData() {
    // MSW 모킹 예정
  }
}

export default ContentList;
