import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllId, getPrdDes, addWishList } from '../assets';

function ProductSideBar() {
  const { itemId } = useParams();
  const item = getAllId(itemId);
  const itemDes = getPrdDes(itemId);
  const { celeb, title, costPrice, dcRate } = item;
  const price = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const [count, setCount] = useState(1);
  const onDecrease = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };
  const onIncrease = () => {
    if (count < 5) {
      setCount(prevCount => prevCount + 1);
    } else if (count === 5) {
      alert(`최대 주문수량은 5개입니다.`);
    }
  };

  const countPrice = item.price * count;
  const totalPrice = countPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const { des } = itemDes;
  const filterDes = des.filter(el => el !== null);

  let saveMoney = item.price * 0.005;

  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(!showPopup);
  };

  const navigate = useNavigate();
  const handleWishList = () => {
    addWishList(item.id);
    navigate('/wishlist');
  };

  return (
    <>
      <div className="prdSbWrapper">
        <section className="headingArea">
          <ul className="titleWrapper">
            <li>{celeb}</li>
            <li>{title}</li>
          </ul>
          <div className="priceWrapper">
            <ul className="priceContainer">
              <li className="price">₩ {price}</li>
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
              <span>0.50% ({saveMoney}P)</span>
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
            {filterDes.map(el => {
              return <li key={el.idx}>{el}</li>;
            })}
          </ul>
        </section>
        <section className="orderWrapper">
          <div className="quan">
            <span className="quanTitle">{title}</span>
            <ul>
              <li className="countWrapper">
                <button className="minus" onClick={onDecrease}>
                  -
                </button>
                <span>{count}</span>
                <button className="plus" onClick={onIncrease}>
                  +
                </button>
              </li>
              <li>₩ {totalPrice}</li>
            </ul>
          </div>
          <div className="totalPrice">
            <span>TOTAL</span>
            <span>
              ₩ {totalPrice} <em>(1개)</em>
            </span>
          </div>
          <div className="btnWrapper">
            <button className="orderNow">바로 구매하기</button>
            <div>
              <button className="inCart">장바구니 담기</button>
              <button className="inWish" onClick={openPopup}>
                위시리스트 담기
              </button>
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
      {showPopup ? (
        <div className="wishPopup">
          <div className="header">
            <h3>관심상품 담기</h3>
            <div className="close" onClick={openPopup}></div>
          </div>
          <div className="content">
            <p>
              선택하신 상품을 관심상품에 담았습니다. <br />
              지금 관심상품을 확인하시겠습니까?
            </p>
          </div>
          <div className="actionBtn">
            <button className="keep" onClick={openPopup}>
              쇼핑 계속하기
            </button>
            <button className="goWish" onClick={handleWishList}>
              관심상품 확인
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ProductSideBar;
