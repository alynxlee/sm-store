import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/cart.scss';

function Cart() {
  const path = process.env.PUBLIC_URL;
  const [product, setProduct] = useState([]);
  const minusRef = useRef(null);

  useEffect(() => {
    const nextProduct = JSON.parse(localStorage.getItem('SMSTORE 장바구니')) || [];
    setProduct(nextProduct);
  }, []);

  const [count, setCount] = useState();
  const onDecrease = () => {
    const current = JSON.parseInt(localStorage.getItem('SMSTORE 장바구니'));
    const minusBtn = minusRef.current.button;
    function findSameId(el) {
      return current.find(data => data.id === el.id);
    }
  };
  const onIncrease = () => {
    if (count < 5) {
      setCount(prevCount => prevCount + 1);
    } else if (count === 5) {
      alert(`최대 주문수량은 5개입니다.`);
    }
  };

  const delCartAll = () => {
    localStorage.removeItem('SMSTORE 장바구니');
    setProduct([]);
  };

  return (
    <div className="cartWrapper">
      <h2>Cart</h2>
      {product.length === 0 ? (
        <div className="empty">
          <img
            src={path + '/images/cart-nosmile-icon.png'}
            alt="cart nosmile icon"
            className="nosmile"></img>
          <div className="noCart">앗! 장바구니가 비어 있어요!</div>
          <button className="keepShopping">
            <Link to="/"></Link>쇼핑 계속하기
          </button>
        </div>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox"></input>
                </th>
                <th colSpan="2">상품정보</th>
                <th>수량</th>
                <th>배송비</th>
                <th>주문금액</th>
                <th>선택</th>
              </tr>
            </thead>
            <tbody>
              {product.map(item => {
                const { id, img, celeb, title, dcRate, count, price } = item;
                const countPrice = price * count;

                return (
                  <tr key={id}>
                    <td>
                      <input type="checkbox"></input>
                    </td>
                    <td className="productImg">
                      <Link to={`/${id}`}>
                        <img src={path + `/images/${img}`} alt={title} />
                      </Link>
                    </td>
                    <td className="productTitle">
                      <Link to={`/${id}`}>
                        <em>{celeb}</em>
                        <span>{title}</span>
                      </Link>
                    </td>
                    <td className="quantity">
                      <div className="quanWrapper">
                        <button className="minus" onClick={onDecrease} ref={minusRef}>
                          -
                        </button>
                        <span>{count}</span>
                        <button className="plus" onClick={onIncrease}>
                          +
                        </button>
                      </div>
                    </td>
                    <td className="shipPrice">
                      <span>3,000</span>
                      <br />
                      <span>조건</span>
                    </td>
                    <td className="orderPrice">
                      <div>
                        <span>{dcRate}</span>
                      </div>
                      <span>₩ {countPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                    </td>
                    <td className="select">
                      <button>주문하기</button>
                      <button>선물하기</button>
                      <button>관심상품</button>
                      <button>삭제</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <button onClick={delCartAll}>전체 삭제</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
