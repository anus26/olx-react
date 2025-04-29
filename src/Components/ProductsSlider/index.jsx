import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import ProductItems from '../ProductItems';

const ProductsSlider = ({ itemsPerSlide }) => {
  const products = [
    {
      id: 1,
      defaultImg: 'w1',
      hoverImg: 'w2',
      title: 'Men Luxary Watch ',
      brand: 'CLAFOUTIS',
      oldPrice: 58.0,
      newPrice: 50.0,
      rating: 4,
    },
    {
      id: 2,
      defaultImg: 'x2',
      hoverImg: 'x1',
      title: 'Footwear for office use ',
      brand: 'CLAFOUTIS',
      newPrice: 95.5,
      rating: 5,
    },
    {
      id: 3,
      defaultImg: 's2',
      hoverImg: 's1',
      title: 'Important T-Shirt',
      brand: 'MODSTYLE',
      oldPrice: 45.0,
      newPrice: 39.99,
      rating: 3,
    },
    {
        id: 4,
        defaultImg: 'm2',
        hoverImg: 'm1',
        title: 'Smart Mobilephone',
        brand: 'MODSTYLE',
        oldPrice: 45.0,
        newPrice: 39.99,
        rating: 3,
      },
      {
        id: 5,
        defaultImg: 'b2',
        hoverImg: 'b1',
        title: 'Ladies Hand  bags ',
        brand: 'MODSTYLE',
        oldPrice: 45.0,
        newPrice: 39.99,
        rating: 3,
      },
      {
        id: 6,
        defaultImg: 'm5',
        hoverImg: 'm4',
        title: 'Fine and Natural ',
        brand: 'MODSTYLE',
        oldPrice: 45.0,
        newPrice: 39.99,
        rating: 3,
      },
      {
        id: 7,
        defaultImg: 'j1',
        hoverImg: 'j3',
        title: 'Gold Jewellery',
        brand: 'MODSTYLE',
        oldPrice: 45.0,
        newPrice: 39.99,
        rating: 3,
      },
  ];

  return (
    <div className=" products-slider w-full h-full p-[25px] -m-[15px]">
      <Swiper
        slidesPerView={itemsPerSlide || 6}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductItems item={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
