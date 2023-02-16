import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllId, getPrdDes, addWishList } from '../assets';
import { addCart } from '../store/actions';

function ProductSideBar() {
  const dispatch = useDispatch();
  const cart = useSelector(store => store.cartReducer);
  const { itemId } = useParams();
  const item = getAllId(itemId);
  const itemDes = getPrdDes(itemId);
  const { celeb, title, costPrice, dcRate, qty } = item;
  const price = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const [count, setCount] = useState(qty);
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

  const [showWishPop, setShowWishPop] = useState(false);
  const openWishPop = () => {
    setShowWishPop(!showWishPop);
    // dispatch(addCart(product));
  };

  const [showCartPop, setShowCartPop] = useState(false);
  const openCartPop = () => {
    setShowCartPop(!showCartPop);
    dispatch({ type: 'addItem' });
  };

  const navigate = useNavigate();
  const handleWishList = () => {
    addWishList(item.id);
    navigate('/wishlist');
  };

  const handleCart = () => {
    navigate('/cart');
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
              <button className="inCart" onClick={openCartPop}>
                장바구니 담기
              </button>
              <button className="inWish" onClick={openWishPop}>
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
      {/* 위시리스트 담기 */}
      {showWishPop ? (
        <div className="wishPopup">
          <div className="header">
            <h3>관심상품 담기</h3>
            <div className="close" onClick={openWishPop}></div>
          </div>
          <div className="content">
            <p>
              선택하신 상품을 관심상품에 담았습니다. <br />
              지금 관심상품을 확인하시겠습니까?
            </p>
          </div>
          <div className="actionBtn">
            <button className="keep" onClick={openWishPop}>
              쇼핑 계속하기
            </button>
            <button className="goWish" onClick={handleWishList}>
              관심상품 확인
            </button>
          </div>
        </div>
      ) : null}
      {/* 장바구니 담기 */}
      {showCartPop ? (
        <div className="cartPopup">
          <div className="header">
            <h3>장바구니 담기</h3>
            <div className="close" onClick={openCartPop}></div>
          </div>
          <div className="content">
            <p>장바구니에 상품이 정상적으로 담겼습니다.</p>
          </div>
          <div className="actionBtn">
            <button className="keep" onClick={openCartPop}>
              쇼핑 계속하기
            </button>
            <button className="goWish" onClick={handleCart}>
              장바구니 이동
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ProductSideBar;
