import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/cart.scss";
import { deleteItem, minus, plus } from "../store/cartItemSlice";

function Cart() {
  // cartItemSlice.js에서 장바구니에 담긴 상품의 정보를 가져옴

  const item = useSelector((state) => state.cartItem);
  let dispatch = useDispatch();
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
          {item.map((item, i) => {
            return (
              <tr key={item.id}>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td className="productImg">
                  <Link>
                    <img
                      src={path + `/images/${item.img}`}
                      alt={`${item.celeb} + ${item.title}`}
                    />
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
                    <button
                      className="minus"
                      onClick={() => {
                        dispatch(minus(item[i].id));
                      }}
                    >
                      -
                    </button>
                    <span>1</span>
                    <button
                      className="plus"
                      onClick={() => {
                        dispatch(plus(item[i].id));
                      }}
                    >
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
                    <span>할인율</span>
                  </div>
                  <span>₩ {item.price * item.count}</span>
                </td>
                <td className="select">
                  <button>주문하기</button>
                  <button>선물하기</button>
                  <button>관심상품</button>
                  <button
                    onClick={() => {
                      dispatch(deleteItem(item[i].id));
                    }}
                  >
                    삭제
                  </button>
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
