import axios from 'axios';
import { useEffect, useState } from 'react';
import Category from '../components/Category';
import ProductSwiper from './ProductSwiper';

function ProductList() {
  const [swiperImg, setSwiperImg] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const imgDataList = await axios.get('/public/data/imgData.json');
      setSwiperImg(imgDataList.data.swiperimg);
    };
    getData();
  }, []);

  return (
    <div>
      <ProductSwiper swiperImg={swiperImg} />
      <Category />
      <h2>상품리스트</h2>
    </div>
  );
}

export default ProductList;
