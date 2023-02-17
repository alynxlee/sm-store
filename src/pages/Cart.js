// import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { delCart, getAllId, getCart } from '../assets';
import '../assets/styles/cart.scss';

function Cart() {
  const path = process.env.PUBLIC_URL;
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const { itemId } = useParams();
  const getItem = getAllId(itemId);

  // const handleDelete = () => {
  //   delCart(getItem.id);
  // };

  useEffect(() => {
    const nextProduct = getCart();
    setProduct(nextProduct);
  }, []);

  // const onDecrease = id => {
  //   if (count > 1) {
  //     setCount(prevCount => {
  //       return getItem === prevCount.id ? prevCount - 1 : prevCount;
  //     });
  //   }
  // };
  const onDecrease = useCallback(id => {
    setProduct(product => {
      return product.filter(one => one.id !== id);
    });
    //   if (productId === product.id && product.count > 1) {
    //     return { ...product, count: product.count - 1 };
    //   } else return product;
    // });
    // setProduct(delQty);
  }, []);
  // const delCart = useCallback(id => {
  //   setProduct(product => {
  //     return product.filter(one => one.id !== id);
  //   });
  // }, []);

  // const removeAll = useCallback(id => {
  //   setProduct([]);
  // }, []);

  const onIncrease = () => {
    if (count < 5) {
      setCount(prevCount => prevCount + 1);
    } else if (count === 5) {
      alert(`최대 주문수량은 5개입니다.`);
    }
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
            {product.map((item, i) => {
              const { id, img, celeb, title, dcRate, count } = item;
              const countPrice = item.price * count;
              const totalPrice = countPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
              return (
                <tr key={id}>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td className="productImg">
                    <Link>
                      <img src={path + `/images/${img}`} alt={title} />
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
                      <button className="minus" onClick={onDecrease}>
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
      )}
      <button onClick={delCart}>전체 삭제</button>
    </div>
  );
}

export default Cart;
