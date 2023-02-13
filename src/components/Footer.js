// style
import '../styles/footer.scss';

// svg
import { ReactComponent as FooterSMLogo } from '../assets/images/footerSMLogo.svg';
import { ReactComponent as FooterPopUp } from '../assets/images/footerPopUp.svg';
import { ReactComponent as FooterFacebook } from '../assets/images/footerFacebook.svg';
import { ReactComponent as FooterTwitter } from '../assets/images/footerTwitter.svg';
import { ReactComponent as FooterYoutube } from '../assets/images/footerYoutube.svg';
import { ReactComponent as FooterInstagram } from '../assets/images/footerInstagram.svg';
import { ReactComponent as FooterAppStore } from '../assets/images/footerAppStore.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <section className="footerSection1">
          <ul className="fLeft">
            <li>
              <Link>제휴문의</Link>
            </li>
            <li>
              <Link>이용약관</Link>
            </li>
            <li>
              <Link>개인정보처리방침</Link>
            </li>
          </ul>
          <ul className="fRight">
            <li>
              <Link>이용안내</Link>
            </li>
            <li>
              <Link>공지사항</Link>
            </li>
            <li>
              <Link>1:1문의</Link>
            </li>
            <li>
              <Link>주문조회</Link>
            </li>
            <li>
              <select name="family" className="family">
                <option value="familySite">FAMILY SITE</option>
                <option value="smtown">SMTOWN</option>
                <option value="smtownNow">SMTOWNnow</option>
                <option value="everysing">everysing</option>
                <option value="smc&c">SM C&C</option>
                <option value="smtownTravel">에스엠타운 트레블</option>
                <option value="tourExpress">투어익스프레스</option>
                <option value="hotelTrees">호텔트리스</option>
                <option value="smGrobalPackage">SM GROBAL PACKAGE</option>
                <option value="smJapan">SM JAPAN</option>
                <option value="galaxiaSm">GalaxiaSM</option>
                <option value="esteem">Esteem</option>
                <option value="mystic">MYSTIC Entertainment</option>
                <option value="globalShop">SM Global Shop</option>
              </select>
            </li>
          </ul>
        </section>
        <section className="footerSection2">
          <FooterSMLogo fill="#fff" />
        </section>
        <section className="footerSection3">
          <span className="desWrapper">
            <em>회사명</em>
            <span className="des">(주)에스엠브랜드마케팅</span>
          </span>
          <span className="desWrapper">
            <em>대표자명</em>
            <span className="des">한경진, 진현주</span>
          </span>
          <span className="desWrapper">
            <em>주소</em>
            <span className="des">
              04769 서울특별시 성동구 왕십리로 83-21 (성수동1가) 아크로서울포레스트 6층
            </span>
          </span>
          <span className="desWrapper">
            <em>대표번호</em>
            <span className="des">1661-6110</span>
          </span>
          <br />
          <span className="desWrapper">
            <em>사업자등록번호</em>
            <span className="des">
              211-88-17109
              <FooterPopUp fill="#fff" className="popUp" />
            </span>
          </span>
          <span className="desWrapper">
            <em>통신판매업 신고번호</em>
            <span className="des">제 2021-서울성동-01975호</span>
          </span>
          <span className="desWrapper">
            <em>개인정보보호책임자</em>
            <span className="des">정성아 / responsibility@smtown.com</span>
          </span>
          <br />
          <span className="desWrapper">
            <em>호스팅서비스 제공자</em>
            <span className="des">카페24(주)</span>
          </span>
          <span className="desWrapper">
            <em>구매안전서비스</em>
            <span className="des">
              이용확인
              <FooterPopUp fill="#fff" className="popUp" />
            </span>
          </span>
          <p>SMTOWN &STORE의 모든 콘텐츠는 저작권의 보호를 받고 있습니다.</p>
        </section>
        <section className="footerSection4">
          <ul className="fLeft">
            <li>
              <FooterFacebook fill="#999a9f" />
            </li>
            <li>
              <FooterTwitter fill="#999a9f" />
            </li>
            <li>
              <FooterYoutube fill="#999a9f" />
            </li>
            <li>
              <FooterInstagram fill="#999a9f" />
            </li>
            <li className="line"></li>
            <li>
              <FooterAppStore fill="#999a9f" />
            </li>
          </ul>
          <ul className="fRight">
            <li>에스엠타운</li>
            <li>써클차트</li>
            <li>한터차트</li>
            <li>공정거래위원회</li>
            <li>KSNET</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Footer;
