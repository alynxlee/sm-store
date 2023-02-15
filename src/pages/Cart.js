import { Link } from "react-router-dom";
import "../assets/styles/cart.scss";

function Cart() {
  return (
    <div className="cartWrapper">
      <h2>Cart</h2>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox"></input>
            </th>
            <th colspan="2">상품정보</th>
            <th>수량</th>
            <th>배송비</th>
            <th>주문금액</th>
            <th>선택</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <td className="productImg">
              <Link>
                <img src="" alt="" />
              </Link>
            </td>
            <td className="productTitle">
              <Link>
                <em>{}</em>
                <span>{}</span>
              </Link>
            </td>
            <td className="quantity">
              <div className="quanWrapper">
                <button className="minus">-</button>
                <span>{}</span>
                <button className="plus">+</button>
              </div>
            </td>
            <td className="shipPrice">
              <span>{}</span>
              <br />
              <span>조건</span>
            </td>
            <td className="orderPrice">
              <div>
                <span>{}</span>
              </div>
              <span>₩{}</span>
            </td>
            <td className="select">
              <button>주문하기</button>
              <button>선물하기</button>
              <button>관심상품</button>
              <button>삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
