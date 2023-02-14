import '../styles/productList.scss';

import { setProductAll } from '../assets';
import ProductSwiper from './ProductSwiper';
import Category from '../components/Category';
import ProductItem from './ProductItem';

function ProductList() {
  const ProductAll = setProductAll();
  return (
    <div className="product">
      <ProductSwiper />
      <div className="listWrapper">
        <Category />
        <div className="productListContainer">
          <div className="productList">
            <div className="sortWrapper">
              <select name="sort" className="sort">
                <option value="recent">최신순</option>
                <option value="name">상품명</option>
                <option value="low">낮은가격</option>
                <option value="high">높은가격</option>
              </select>
            </div>
            <ul className="productListWrap">
              {ProductAll.map(item => (
                <ProductItem key={item.id} item={item} />
              ))}
            </ul>
          </div>
          <div className="productMore">더보기 +</div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
