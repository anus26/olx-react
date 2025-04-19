import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination  ,Autoplay} from 'swiper/modules';

import  Button  from '@mui/material/Button';
const HomeSliderV2 = () => {
  return (
    <div>
         <Swiper
         loop={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="homev2"
        autoplay={{
            delay:3000,
            disableOnInteraction:false

          }}
      >
        <SwiperSlide>
            <div className='item w-full rounded-md overflow-hidden relative'>

          <img src="./images/v1.jpg" alt='v1' />
          <div className='info absolute top-0 -right-[100%] w-[50%] opacity-0 h-full z-50 p-8 flex items-center justify-center flex-col transition-all  duration-700'>
           <h4 className='text-[20px] font-[500] w-full mb-4 -right-[100%]  transition-all duration-1000 relative opacity-0'>Big Saving  Day Sale</h4>
           <h2 className='text-[30px] font-[700] w-full -right-[100%]  transition-all duration-1000 relative opacity-0'>Apple iphone 13 12GB , Pink</h2>
           <h3 className='text-[20px] font-[400] w-full  mt-3 mb-3 gap-3 -right-[100%]  transition-all duration-1000 relative opacity-0'>Starting at only <span className='text-[30px] text-primary font-[600]'>Rs:350,00.00</span></h3>
            
           <div className='w-full'>
              <Button className='!text-white border   !bg-primary hover:!text-white rounded-full px-6 py-2'>
              Show Now
            </Button>
           </div>
          </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='item w-full rounded-md overflow-hidden relative'>

          <img src="./images/v2.jpg" alt='v2' />
          <div className='info absolute top-0 -right-[100%] w-[50%] opacity-0 h-full z-50 p-8 flex items-center justify-center flex-col transition-all  duration-700'>  
           <h4 className='text-[20px] font-[500] w-full mb-4 -right-[100%]  transition-all duration-1000 relative opacity-0'>Big Saving  Day Sale</h4>
           <h2 className='text-[30px] font-[700] w-full -right-[100%]  transition-all duration-1000 relative opacity-0'>Apple iphone 13 12GB , Pink</h2> 
           <h3 className='text-[20px] font-[400] w-full  mt-3 mb-3 gap-3 -right-[100%]  transition-all duration-1000 relative opacity-0'>Starting at only <span className='text-[30px] text-primary font-[600]'>Rs:350,00.00</span></h3>
            
           <div className='w-full'>
              <Button className='!text-white border   !bg-primary hover:!text-white rounded-full px-6 py-2'>
              Show Now
            </Button>
           </div>
          </div>
            </div>
        </SwiperSlide>
  
     
        
      </Swiper>
    </div>
  )
}

export default HomeSliderV2