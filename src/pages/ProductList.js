import Category from "../components/Category";
import ProductSwiper from "./ProductSwiper";

function ProductList() {
  return (
    <div>
      <ProductSwiper />
      <Category />
      <h2>상품리스트</h2>
    </div>
  );
}

export default ProductList;
