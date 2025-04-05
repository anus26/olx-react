import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Link } from 'react-router';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const HomeCatSlider = () => {
  return (
<>
<div className='homecatslider'>
<div className='container'>
<Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Link to="/"><div className='item py-4 px-3 bg-white  rounded-sm text-center flex items-center justify-center flex-col'>
          <img src="./images/a.png" alt=""  className='w-[60px]'/>
          <h3 className='text-[15px ] font-[500] mt-3'>Fashion</h3>
          </div></Link></SwiperSlide>
          <SwiperSlide><Link to="/"><div className='item py-4 px-3 bg-white  rounded-sm text-center flex items-center justify-center flex-col'>
          <img src="./images/b.png" alt=""  className='w-[60px]'/>
          <h3 className='text-[15px ] font-[500] mt-3'>Electronics</h3>
          </div></Link></SwiperSlide> 
          <SwiperSlide><Link to="/"><div className='item py-4 px-3 bg-white  rounded-sm text-center flex items-center justify-center flex-col'>
          <img src="./images/c.png" alt=""  className='w-[60px]'/>
          <h3 className='text-[15px ] font-[500] mt-3'>Bags</h3>
          </div></Link></SwiperSlide>
          <SwiperSlide><Link to="/"><div className='item py-4 px-3 bg-white  rounded-sm text-center flex items-center justify-center flex-col'>
          <img src="./images/d.png" alt=""  className='w-[60px]'/>
          <h3 className='text-[15px ] font-[500] mt-3'>Footwear</h3>
          </div></Link></SwiperSlide>
          <SwiperSlide><Link to="/"><div className='item py-4 px-3 bg-white  rounded-sm text-center flex items-center justify-center flex-col'>
          <img src="./images/e.png" alt=""  className='w-[60px]'/>
          <h3 className='text-[15px ] font-[500] mt-3'>Groceries</h3>
          </div></Link></SwiperSlide>
          <SwiperSlide><Link to="/"><div className='item py-4 px-3 bg-white  rounded-sm text-center flex items-center justify-center flex-col'>
          <img src="./images/f.png" alt=""  className='w-[60px]'/>
          <h3 className='text-[15px ] font-[500] mt-3'>Beauty</h3>
          </div></Link></SwiperSlide>
          <SwiperSlide><Link to="/"><div className='item py-4 px-3 bg-white  rounded-sm text-center flex items-center justify-center flex-col'>
          <img src="./images/g.png" alt=""  className='w-[60px]'/>
          <h3 className='text-[15px ] font-[500] mt-3'>Wellenss</h3>
          </div></Link></SwiperSlide>
          <SwiperSlide><Link to="/"><div className='item py-4 px-3 bg-white  rounded-sm text-center flex items-center justify-center flex-col'>
          <img src="./images/h.png" alt=""  className='w-[60px]'/>
          <h3 className='text-[15px ] font-[500] mt-3'>Jewellery</h3>
          </div></Link></SwiperSlide>
          <SwiperSlide><Link to="/"><div className='item py-4 px-3 bg-white  rounded-sm text-center flex items-center justify-center flex-col'>
          <img src="./images/a.png" alt=""  className='w-[60px]'/>
          <h3 className='text-[15px ] font-[500] mt-3'>Smart Tablets</h3>
          </div></Link></SwiperSlide>
      </Swiper>
      
</div>
</div>
</>
  )
}

export default HomeCatSlider