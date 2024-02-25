class Footer {
  template() {
    `
    <footer>
        <div class="footer-wrap">
            <div class="footer-site">
                <ul>
                    <li class="footer-site__title">토스테크</li>
                    <li><a href="mailto:techblog@toss.im">의견 보내기</a></li>
                </ul>

                <ul>
                    <li class="footer-site__title">토스</li>
                    <li><a href="https://toss.im">홈페이지</a></li>
                    <li><a href="https://toss.im/team">회사 소개</a></li>
                    <li><a href="https://toss.im/career">채용</a></li>
                </ul>

                <ul class="flex1">
                    <li class="footer-site__title">고객센터</li>
                    <li><a href="tel:1599-4905">전화: 1599-4905 (24시간 연중무휴)</a></li>
                    <li><a href="mailto:support.toss.im">이메일: support@toss.im</a></li>
                    <li><a href="https://goto.kakao.com/@toss">카카오톡: @toss</a></li>
                </ul>
            </div>

            <address>
                <strong>㈜비바리퍼블리카</strong>
                Copyright © Viva Republica, Inc. All Rights Reserved.
            </address>

            <ul class="footer-social">
                <li class="footer-social__item">
                    <a aria-label="Toss Facebook" target="_blank" href="https://www.facebook.com/toss.official">
                        <img src="/img/common/icn-facebook.svg" alt="Toss Facebook"/>
                    </a>
                </li>

                <li class="footer-social__item">
                    <a aria-label="Toss blog" target="_blank" href="https://blog.toss.im">
                        <img src="/img/common/icn-blog.svg" alt="Toss blog"/>
                    </a>
                </li>

                <li class="footer-social__item">
                    <a aria-label="Toss Naver Post" target="_blank" href="https://post.naver.com/tossblog">
                       <img src="/img/common/icn-naver.svg" alt="Toss Naver Post"/>
                    </a>
                </li>

                <li class="footer-social__item">
                    <a aria-label="Toss Twitter" target="_blank" href="https://twitter.com/toss__official">
                       <img src="/img/common/icn-twitter.svg" alt="Toss Twitter"/>
                    </a>
                </li>

                <li class="footer-social__item">
                    <a aria-label="Toss Instagram" target="_blank" href="https://www.instagram.com/toss.im/">
                    <img src="/img/common/icn-instagram.svg" alt="Toss Instagram"/>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
`;
  }
}

export default new Footer();
