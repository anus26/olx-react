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
  const [activeTab ,setActiveTab]=useState("Description")
  return (
 
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

</div>

   


  );
};

export default ProductZoom;
