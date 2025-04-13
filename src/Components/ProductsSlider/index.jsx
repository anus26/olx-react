import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import ProductItems from '../ProductItems';

const ProductsSlider = (props) => {
  // Temporary array to map SwiperSlides — replace with actual products later
  const dummyProducts = Array.from({ length: 8 });

  return (
    <div className="products-slider p-[25px] -m-[15px]">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {dummyProducts.map((_, index) => (
          <SwiperSlide key={index}>
            <ProductItems />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
