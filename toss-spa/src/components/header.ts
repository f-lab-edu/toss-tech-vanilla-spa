class Header {
  template() {
    return `
    <header>
        <div class="header-wrap">
            <div class="header-wrap__inner">
                <h1 id="logo">
                    <img src="/img/common/logo.png" alt="tosstech"/>
                </h1>
                <ul>
                    <li><a id="designLink" href="/design">디자인</a></li>
                    <li><a id="techLink" href="/tech">개발</a></li>
                    <li><button class="toss-btn">채용 바로가기</button></li>
                </ul>
            </div>

        </div>
    </header>
`;
  }
}
export default new Header();
