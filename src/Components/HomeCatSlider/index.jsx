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
  const items=[
   {key:'a',label:'smart fashion'},
   {key:'b',label:'smart fashion'},
   {key:'c',label:'smart fashion'},
   {key:'d',label:'smart fashion'},
   {key:'e',label:'smart fashion'},
   {key:'f',label:'smart fashion'},
   {key:'g',label:'smart fashion'},
   {key:'h',label:'smart fashion'},
  ]
  const prevRef=useRef()
  const nextRef=useRef()
  return (
<>
<div className='homecatslider pt-4 py-4'>
<div className='container relative'>
  <button ref={prevRef} className='custom-swiper-button-prev   absolute left-8 top-1/3 -translate-y-1/2  bg-white w-8 h-8 rounded-full shadow flex items-center justify-center z-10'><span className='text-xs'><MdArrowBackIosNew />
  </span></button>
  <button ref={nextRef} className='custom-swiper-button-prev   absolute  right-10 top-1/3 -translate-y-1/2 bg-white w-8 h-8 rounded-full shadow flex items-center justify-center z-10'><span className=' text-xs'><MdArrowForwardIos />
  </span></button>
<Swiper
        slidesPerView={7}
        spaceBetween={10}
        modules={[Navigation]}
        className="mySwiper"
        navigation={{
          prevEl:prevRef.current,
          nextEl:nextRef.current,

          
        }}
        onBeforeInit={(swiper)=>{
           swiper.params.navigation.prevEl=prevRef.current
           swiper.params.navigation.nextEl=nextRef.current

        }}

      >
        {/* {'abcdefgh'.split('').map((alphabet)=>(

          <Link to='/'>
          <SwiperSlide key={alphabet}>
          <div className='item rounded-[30px] bg-white  overflow-hidden'>
           <img src={`./images/${alphabet}.png`} alt={`slide ${alphabet}`}  />
          </div>
       
          </SwiperSlide>
          </Link>
  ))} */}
{items.map((item) => (
  <SwiperSlide key={item.key}>
    <Link to='/productlisting'>
      <div className='item group rounded-[30px] bg-white w-[150px] h-[150px] flex flex-col items-center justify-center overflow-hidden text-center p-2'>
        <img src={`./images/${item.key}.png`} alt={item.label} className='w-[70px] mb-1  object-cover transition-all duration-200 group-hover:scale-105 ' />
        <p className='text-[12px] font-medium'>{item.label}</p>
      </div>
    </Link>
  </SwiperSlide>
))}

      </Swiper>
      
</div>
</div>
</>
  )
}

export default HomeCatSlider