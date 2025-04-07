import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
const AdsBannerSlider = () => {
  return (
<div className='py-4 w-full'>
<Swiper
        slidesPerView={7}
        spaceBetween={10}
        modules={[Navigation]}
        className="mySwiper"
        // navigation={navigation}
        // navigation={{
        //   prevEl:prevRef.current,
        //   nextEl:nextRef.current,

          
        // }}
        // onBeforeInit={(swiper)=>{
        //    swiper.params.navigation.prevEl=prevRef.current
        //    swiper.params.navigation.nextEl=nextRef.current

        // }}

      >



        <SwiperSlide>
            <div className='box flex gap-20'>
                {[11,12,13,14].map((num)=>(
                     <SwiperSlide key={num}>
                     <Link to='/'>
                       <div className='box  flex  overflow-hidden rounded-lg p-2'>
                         <img src={`./images/${num}.jpg`} alt={`num`} className='w-full transition-all  group-hover:scale-110 ' />
                        
                       </div>
                     </Link>
                   </SwiperSlide>
                ))}
            </div>
        </SwiperSlide>
      </Swiper>

</div>
  )
}

export default AdsBannerSlider