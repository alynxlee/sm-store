import { useParams } from 'react-router-dom';
import { getAllId } from '../assets';

function ProductSideBar() {
  const { itemId } = useParams();
  const item = getAllId(itemId);
  const { celeb, title, dcPrice, price, dcRate } = item;
  return (
    <div className="prdSbWrapper">
      <section className="headingArea">
        <ul className="titleWrapper">
          <li>{celeb}</li>
          <li>{title}</li>
        </ul>
        <ul className="priceWrapper">
          <li>{dcPrice}</li>
          <li>{price}</li>
          <li>{dcRate}</li>
          <li>share</li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <span>적립금</span>
            <span>-</span>
            <span>arrowIcon</span>
          </li>
          <li>
            <span>회원등급별</span>
            <span>silver</span>
          </li>
          <li>
            <span>추가적립금</span>
            <span>gold</span>
          </li>
        </ul>
        <ul>
          <li>해당 상품은 어쩌구</li>
        </ul>
      </section>
      <section>
        <div>
          <span>{title}</span>
          <ul>
            <li>개수</li>
            <li>{price}</li>
          </ul>
        </div>
        <div>
          <span>total</span>
          <span>
            {price} <em>(1개)</em>
          </span>
        </div>
        <div className="btnWrapper">
          <button className="orderNow">바로 구매하기</button>
          <div>
            <button className="inCart">장바구니 담기</button>
            <button className="inWish">위시리스트 담기</button>
          </div>
        </div>
      </section>
      <section>
        <div className="betterTogether">
          <div>함께하면 좋은 상품!</div>
          <div>swiper</div>
        </div>
      </section>
    </div>
  );
}

export default ProductSideBar;
