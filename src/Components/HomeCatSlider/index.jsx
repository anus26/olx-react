import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';



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
<div className='container  homecatslider   py-6 '>
<div className=' relative '>
   <button ref={prevRef} className="custom-swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white w-8 h-10 rounded-full shadow flex items-center justify-center">
          <span className="text-black text-lg">&lt;</span>
        </button>
<button ref={nextRef} className="custom-swiper-button-next absolute right-10 top-1/2 -translate-y-1/2 z-10 bg-white w-8 h-10 rounded-full shadow flex items-center justify-center">
          <span className="text-black text-lg">&gt;</span>
        </button>
<Swiper
        slidesPerView={7}
        spaceBetween={10}
        modules={[Navigation]}
        className="mySwiper  "
        navigation={{
          prevEl:prevRef.current,
          nextEl:nextRef.current,

          
        }}
        onBeforeInit={(swiper)=>{
           swiper.params.navigation.prevEl=prevRef.current
           swiper.params.navigation.nextEl=nextRef.current

        }}

      >

{items.map((item) => (
  <SwiperSlide key={item.key}>
    <Link to='/productlisting' >
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