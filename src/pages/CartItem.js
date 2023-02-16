import React from 'react';
import { Link } from 'react-router-dom';
function CartItem({ item }) {
  const path = process.env.PUBLIC_URL;
  const { id, img, title, celeb, qty, dcRate } = item;
  const price = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <>
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
          <tr key={id}>
            <td>
              <input type="checkbox"></input>
            </td>
            <td className="productImg">
              <Link>
                <img src={path + `/images/${img}`} alt={`${celeb} + ${title}`} />
              </Link>
            </td>
            <td className="productTitle">
              <Link>
                <em>{celeb}</em>
                <span>{title}</span>
              </Link>
            </td>
            <td className="quantity">
              <div className="quanWrapper">
                <button className="minus">-</button>
                <span>{qty}</span>
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
                <span>{dcRate}</span>
              </div>
              <span>₩ {price}</span>
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
    </>
  );
}

export default CartItem;
