import { Link } from "react-router-dom";

function ProductItem({ item }) {
  const { id, img, celeb, title, price, costPrice, dcRate } = item;
  const path = process.env.PUBLIC_URL;
  return (
    <div>
      <Link to={`/${id}`}>
        <h3>{title}</h3>
        <img src={`${path}/images/${img}`} alt={`${celeb} + ${title}`} />
      </Link>
    </div>
  );
}

export default ProductItem;
