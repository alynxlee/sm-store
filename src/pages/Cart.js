import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/cart.scss';
import CartItem from './CartItem';

function Cart() {
  const cart = useSelector(store => store.cartReducer);
  const dispatch = useDispatch();
  // const cartItem =
  //   cart.length >= 1 ? (
  //     cart.map((item, idx) => {
  //       return <CartItem key={idx} item={item} idx={idx} />;
  //     })
  //   ) : (
  //     <div>장바구니가 비어있습니다.</div>
  //   );
  const path = process.env.PUBLIC_URL;
  return (
    <div className="cartWrapper">
      <h2>Cart</h2>
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
          {cart.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td className="productImg">
                  <Link>
                    <img src={path + `/images/${item.img}`} alt={`${item.celeb} + ${item.title}`} />
                  </Link>
                </td>
                <td className="productTitle">
                  <Link>
                    <em>{item.celeb}</em>
                    <span>{item.title}</span>
                  </Link>
                </td>
                <td className="quantity">
                  <div className="quanWrapper">
                    <button className="minus" onClick={() => dispatch({ type: 'minus' })}>
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button className="plus" onClick={() => dispatch({ type: 'plus' })}>
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
                    <span>{item.dcRate}</span>
                  </div>
                  <span>₩ {item.price}</span>
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
    </div>
  );
}

export default Cart;
