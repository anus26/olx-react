import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
const HomeSlider = () => {
  return (
    <>
    <div className='homeslider py-4'>

    <div className='container'>

      <Swiper navigation={true}  spaceBetween={10}
        
        modules={[Navigation]}  className="sliderhome">
          <SwiperSlide>
        <div className='item rounded-[20px] overflow-hidden'>
          <img src="./images/1.jpg" alt="1 slider" className='w-full' /></div></SwiperSlide>
        <SwiperSlide>  <div className='item rounded-[20px] overflow-hidden'><img src="./images/2.jpg" alt="2 slider" className='w-full' /></div></SwiperSlide>
        <SwiperSlide>  <div className='item rounded-[20px] overflow-hidden'><img src="./images/3.jpg" alt="3 slider" className='w-full' /></div></SwiperSlide>
        <SwiperSlide>  <div className='item rounded-[20px] overflow-hidden'><img src="./images/4.jpg" alt="4 slider" className='w-full' /></div></SwiperSlide>
        
      </Swiper>
    </div>
    </div>
    </>
  )
}

export default HomeSlider