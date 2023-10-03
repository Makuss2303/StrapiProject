import Image from "next/image"

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <figure className="footer__logo">
          <Image
            src="/images/footer-logo.png"
            alt="footer-logo"
            fill
            sizes="(max-width: 500px) 100vw"
          />
        </figure>
        <div className="footer__info">
          <div className="footer__info-left">
            <p>〒160-0022</p>
            <p>東京都新宿区新宿２丁目３－１１ ＶＯＲＴ新宿御苑 ８階</p>
            <p>TEL：03-3353-4811（平日10:00-19:00）</p>
          </div>
          <div className="footer__info-right">
            <div className="footer__info-right-text">
              <ul className="moreinfo">
                <li><a href="https://wakka-inc.com/company/">会社概要</a></li>
                <li><a href="https://wakka-inc.com/privacy-policy/">個人情報保護方針</a></li>
              </ul>
              <div className="copyright">
                © 2022 Wakka Inc. All right reserved.
              </div>
            </div>
            <a className="footer__info-right-img" href="https://wakka-inc.com/privacy-policy/">
              <Image
                src="/images/privacy.png"
                alt="footer-logo"
                fill
                sizes="(max-width: 500px) 100vw"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
