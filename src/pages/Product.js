import Category from "../components/Category";
import ProductSwiper from "./ProductSwiper";
import ProductList from "./ProductList";

function Product() {
  return (
    <div className="product">
      <ProductSwiper />
      <div className="listWrapper">
        <Category />
        <ProductList />
      </div>
    </div>
  );
}

export default Product;
