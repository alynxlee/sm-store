import '../styles/productDetail.scss';
import ProductInfo from './ProductInfo';
import ProductSideBar from './ProductSideBar';

function ProductDetail() {
  return (
    <div className="prdDetailWrapper">
      <ProductInfo />
      <ProductSideBar />
    </div>
  );
}

export default ProductDetail;
