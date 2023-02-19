import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/cart.scss";

function Cart() {
  const path = process.env.PUBLIC_URL;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const nextProduct =
      JSON.parse(localStorage.getItem("SMSTORE 장바구니")) || [];
    setProduct(nextProduct);
  }, []);

  const [count, setCount] = useState();
  // const onDecrease = (el) => {
  //   let prdDecrease = JSON.parse(localStorage.getItem("SMSTORE 장바구니"));
  //   prdDecrease.find((data) => data.id === el.id);
  //   let idx =
  // };
  const onIncrease = () => {
    if (count < 5) {
      setCount((prevCount) => prevCount + 1);
    } else if (count === 5) {
      alert(`최대 주문수량은 5개입니다.`);
    }
  };

  const delCartAll = () => {
    localStorage.removeItem("SMSTORE 장바구니");
    setProduct([]);
  };

  return (
    <div className="cartWrapper">
      <h2>Cart</h2>
      {product.length === 0 ? (
        <div>장바구니가 비었습니다.</div>
      ) : (
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
            {product.map((item) => {
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
                      <button className="minus">-</button>
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
                    <span>
                      ₩{" "}
                      {countPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
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
      )}
      <button onClick={delCartAll}>전체 삭제</button>
    </div>
  );
}

export default Cart;
