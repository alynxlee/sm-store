import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// style
import '../styles/productSwiper.scss';

function ProductSwiper({ swiperImg }) {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="swiperWrapper">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper">
        {swiperImg.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <img src={`${path}/images/${item.img}`} alt={item.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ProductSwiper;
