import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllId, getPrdDes, addWishList } from '../assets';

function ProductSideBar() {
  const { itemId } = useParams();
  const item = getAllId(itemId);
  const itemDes = getPrdDes(itemId);
  const { id, img, celeb, title, costPrice, dcRate } = item;
  const price = item.price;

  const [count, setCount] = useState(1);
  // 상품 수량 감소
  const onDecrease = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };
  // 상품 수량 증가
  const onIncrease = () => {
    if (count < 5) {
      setCount(prevCount => prevCount + 1);
    } else if (count === 5) {
      alert(`최대 주문수량은 5개입니다.`);
    }
  };

  // 상품 수량 * 가격
  const countPrice = item.price * count;
  // 숫자 세자리마다 콤마
  const totalPrice = countPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const { des } = itemDes;
  const filterDes = des.filter(el => el !== null);

  let saveMoney = item.price * 0.005;

  // localstorage에 데이터 추가
  const [order, setOrder] = useState([]);
  const addCartItem = () => {
    // 장바구니 key 이름: SMSTORE 장바구니
    let prdDataArr = JSON.parse(localStorage.getItem('SMSTORE 장바구니'));
    setOrder(prdDataArr);

    // 처음 추가 시
    if (prdDataArr == null) {
      prdDataArr = [
        {
          id: id,
          img: img,
          celeb: celeb,
          title: title,
          price: price,
          dcRate: dcRate,
          count: count,
        },
      ];
      localStorage.setItem('SMSTORE 장바구니', JSON.stringify(prdDataArr));

      // 중복 id의 product가 있을 때
    } else if (prdDataArr.find(data => data.id === id)) {
      alert('장바구니에 동일한 상품이 있습니다. \n장바구니에 추가하시겠습니까?');

      let newArr = [
        {
          id: id,
          img: img,
          celeb: celeb,
          title: title,
          price: price,
          dcRate: dcRate,
          count: count,
        },
      ];

      // 중복된 id의 인덱스에 count 추가
      function findSameId(el) {
        return newArr.find(data => data.id === el.id);
      }

      let idx = prdDataArr.findIndex(findSameId);
      console.log(idx);
      prdDataArr[idx].count = newArr[0].count + prdDataArr[idx].count;
      localStorage.setItem('SMSTORE 장바구니', JSON.stringify(prdDataArr));

      // 다른 제품 추가
    } else {
      prdDataArr = [
        ...prdDataArr,
        {
          id: id,
          img: img,
          celeb: celeb,
          title: title,
          price: price,
          dcRate: dcRate,
          count: count,
        },
      ];
      localStorage.setItem('SMSTORE 장바구니', JSON.stringify(prdDataArr));
    }

    // 장바구니 팝업창 열림
    setShowCartPop(!showCartPop);
  };

  // 위시리스트 팝업창
  const [showWishPop, setShowWishPop] = useState(false);
  const openWishPop = () => {
    setShowWishPop(!showWishPop);
  };

  // 장바구니 팝업창
  const [showCartPop, setShowCartPop] = useState(false);
  const openCartPop = () => {
    setShowCartPop(!showCartPop);
  };

  // 네비게이션
  const navigate = useNavigate();
  const handleWishList = () => {
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
              <li className="price">₩ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</li>
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
              ₩ {totalPrice} <em>({count}개)</em>
            </span>
          </div>
          <div className="btnWrapper">
            <button className="orderNow">바로 구매하기</button>
            <div>
              <button className="inCart" onClick={addCartItem}>
                장바구니 담기
              </button>
              <button
                className="inWish"
                onClick={() => {
                  addWishList(item.id);
                  setShowWishPop(!showWishPop);
                }}>
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
