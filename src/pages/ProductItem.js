import { Link } from "react-router-dom";

function ProductItem({ item }) {
  const { id, img, celeb, title, costPrice, dcRate } = item;
  const price = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const path = process.env.PUBLIC_URL;
  return (
    <>
      <li className="productListItem">
        <Link to={`/${id}`}>
          <img src={path + `/images/${img}`} alt={`${celeb} + ${title}`} />
        </Link>
        <Link to={`/${id}`}>
          <ul className="titleWrapper">
            <li>{celeb}</li>
            <li>{title}</li>
          </ul>
        </Link>
        <ul className="priceWrapper">
          <li>
            <span>₩ {price}</span>
            <span className="costPrice">{costPrice}</span>
          </li>
          <li>{dcRate}</li>
        </ul>
        <Link>
          <div className="cartIcon">cart</div>
        </Link>
      </li>
    </>
  );
}

export default ProductItem;
