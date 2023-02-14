import { useParams } from "react-router-dom";
import { getAllId, getPrdDes } from "../assets";

function ProductSideBar() {
  const { itemId } = useParams();
  const item = getAllId(itemId);
  const itemDes = getPrdDes(itemId);
  const { celeb, title, price, costPrice, dcRate } = item;
  const { des } = itemDes;
  const filterDes = des.filter((el) => el !== null);
  return (
    <div className="prdSbWrapper">
      <section className="headingArea">
        <ul className="titleWrapper">
          <li>{celeb}</li>
          <li>{title}</li>
        </ul>
        <div className="priceWrapper">
          <ul className="priceContainer">
            <li className="price">{price}</li>
            <li className="costPrice">{costPrice}</li>
            <li className="dcRate">{dcRate}</li>
          </ul>
          <div className="share">share</div>
        </div>
      </section>
      <section className="saveDes">
        <div>
          <div className="save">
            <span>적립금</span>
            <span>0.50%</span>
            <span className="arrowIcon">arrowIcon</span>
          </div>
          <div className="hoverWrapper">
            <div className="grade">
              <span>회원등급별</span>
              <span>PINK SILVER 기본적립금 +0.2%</span>
            </div>
            <div className="savePlus">
              <span>추가적립금</span>
              <span>PINK GOLD 기본적립금 +0.5%</span>
            </div>
          </div>
        </div>
        <ul className="des">
          {filterDes.map((el) => {
            return <li key={el.idx}>{el}</li>;
          })}
        </ul>
      </section>
      <section className="orderWrapper">
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
