import "../styles/productList.scss";

import data from "../assets/DB/ListData.json";
import { Link } from "react-router-dom";

function ProductList() {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="productListContainer">
      <div className="productList">
        <div>
          <select name="sort" className="sort">
            <option value="recent">최신순</option>
            <option value="name">상품명</option>
            <option value="low">낮은가격</option>
            <option value="high">높은가격</option>
          </select>
        </div>
        <div>
          <ul className="productListWrap">
            {data.ProductAll.map((item) => {
              const { id, img, celeb, title, price, dcPrice, dcRate } = item;
              return (
                <li key={id} className="productListItem">
                  <Link>
                    <img
                      src={path + `/images/${img}`}
                      alt={`${celeb} + ${title}`}
                    />
                  </Link>
                  <Link>
                    <ul className="titleWrapper">
                      <li>{celeb}</li>
                      <li>{title}</li>
                    </ul>
                  </Link>
                  <ul className="priceWrapper">
                    <li>
                      <span>{dcPrice}</span>
                      <span>{price}</span>
                    </li>
                    <li>{dcRate}</li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="productMore">더보기 +</div>
    </div>
  );
}

export default ProductList;
