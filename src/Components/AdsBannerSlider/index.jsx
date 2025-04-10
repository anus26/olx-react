import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';
const AdsBannerSlider = () => {
    const items=[
        {keys:'11',labels:'Buy Women Product with low price',price:'Rs 999',Link:"Shop Now"},
        {keys:'12',label:'Buy Mens Bags with low price',prices:'Rs 1000',Links:"Shop Now"},
        {keys:'13',labels:'Buy Men Footwear with lowprice',price:'Rs 250',Link:"Shop Now"},
        {keys:'14',label:'Buy Smarphones Apple with low price',prices:'Rs 10000',Links:"Shop Now"},
    
       ]
  return (
<div className='py-4 '>
<Swiper
           spaceBetween={20}
           slidesPerView={4}
           loop={true}
           autoplay={{ delay: 3000 }}
    

      >



{items.map((item) => (
    <SwiperSlide key={item.keys} >
    <div className="px-4 py box  overflow-hidden rounded-md group relative">
<img
    src={`./images/${item.keys}.jpg`} 
    alt="Product Banner"
    className="w-[300px] h-[200px] object-cover transition-all duration-150 group-hover:scale-105"
  />
  <div className="info absolute p-5 top-0 left-[90px] w-[60%] h-full z-50 flex items-center justify-center flex-col gap-2 pl-16 bg-black/40 text-black">
    <h2 className="text-[10px]  md:text-[15px] font-semibold">
      {item.labels}
    </h2>
    <span className="text-[20px] text-yellow-400 font-semibold w-full">{item.price}</span>
    <div className="w-full">
   <Link>{item.Link}</Link>
    </div>
  </div>
  <div className="info absolute p-5 top-0 right-[auto] w-[60%] h-full z-50 flex items-start justify-start flex-col gap-2 pl-16 bg-black/40 text-black">
    <h2 className="text-[10px]  md:text-[15px] font-semibold">
      {item.label}
    </h2>
    <span className="text-[20px]  text-yellow-400 font-semibold w-full">{item.prices}</span>
    <div className="w-full">
   <Link>{item.Links}</Link>
      </div>
  </div>
</div>
  </SwiperSlide>
))}




      
      
   </Swiper>

</div>
  )
}

export default AdsBannerSlider