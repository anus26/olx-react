import React, { useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ProductZoom = () => {
  const images = [
    '/images/pz1.jpg',
    '/images/pz2.jpg',
    '/images/pz3.jpg',
    '/images/pz4.jpg',
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <>
  <div className='flex items-start  gap-10  grid-cols-3  w-full' > 

<div className=' flex gap-2 m-2'>




      {/* Thumbnails */}
      <div className=' w-14 '>
        <Swiper
          direction='vertical'
          slidesPerView={0}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="Swiperzoom mySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`thumb-${index}`}
                className='cursor-pointer border border-gray-200 hover:border-blue-400 rounded'
                onClick={() => setActiveImage(img)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Zoomed Image */}
      <div className=' w-64'>
        <InnerImageZoom
          src={activeImage}
          zoomSrc={activeImage}
          zoomScale={1}
          zoomType='hover'
          zoomPreload={true}
        />
  


      </div>
</div>


      <div className='part-2  grow  m-10 w-64 '>
        <div className=''>
          <h1 className='w-full font-semibold text-lg  ' >Embellished Sequinned Ready to Wear Saree</h1>
          
          <div className='mt-1 flex gap-2'>
            <h4 className='font-medium'>
            <span className='font-normal text-slate-400'>Brands</span> : Tikhi Imli
            
            </h4>
            
            <div className="rating rating-xs mt-1">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
</div>
<h4>Review(1)</h4>
          </div>
        </div>
        <div className='mt-2'>
          <h1><span className='line-through'>RS:2450</span></h1>
        </div>

      </div>
    </div>
</>
  );
};

export default ProductZoom;
