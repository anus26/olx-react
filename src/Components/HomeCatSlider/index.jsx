import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


const HomeCatSlider = () => {
  const prevRef=useRef()
  const nextRef=useRef()
  return (
<>
<div className='homecatslider'>
<div className='container relative'>
  <button ref={prevRef} className='custom-swiper-button-prev   absolute left-8 top-1/3 -translate-y-1/2  bg-white w-8 h-8 rounded-full shadow flex items-center justify-center z-10'><span className='text-xs'><MdArrowBackIosNew />
  </span></button>
  <button ref={nextRef} className='custom-swiper-button-prev   absolute  right-10 top-1/3 -translate-y-1/2 bg-white w-8 h-8 rounded-full shadow flex items-center justify-center z-10'><span className=' text-xs'><MdArrowForwardIos />
  </span></button>
<Swiper
        slidesPerView={7}
        spaceBetween={10}
        modules={[Navigation]}
        navigation={{
          prevEl:prevRef.current,
          nextEl:nextRef.current,

          
        }}
        onBeforeInit={(swiper)=>{
           swiper.params.navigation.prevEl=prevRef.current
           swiper.params.navigation.nextEl=nextRef.current

        }}
        className="mySwiper"

      >
        {'abcdefgh'.split('').map((alphabet)=>(

          <Link to='/'>
          <SwiperSlide key={alphabet}>
          <div className='item rounded-[30px] bg-white  overflow-hidden'>
           <img src={`./images/${alphabet}.png`} alt={`slide ${alphabet}`}  />
          </div>
       
          </SwiperSlide>
          </Link>
  ))}
      </Swiper>
      
</div>
</div>
</>
  )
}

export default HomeCatSlider