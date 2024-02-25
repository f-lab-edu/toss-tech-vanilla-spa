class Design {
  template() {
    return `
<main>
    <div class="main-wrap">
        <h2 class="content-title">디자인</h2>

        <section class="design">
            <ul class="item-list">
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
            </ul>
        </section>
    </div>
</main>
`;
  }
}

export default new Design();
