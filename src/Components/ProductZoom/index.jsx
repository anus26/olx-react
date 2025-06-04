import React, { useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from '@mui/material/Button';
import { CiHeart } from "react-icons/ci";
import Tooltip from '@mui/material/Tooltip';
import { IoMdGitCompare } from "react-icons/io";
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
        <div className='mt-2 flex gap-2'>
          <h1><span className='line-through '>RS:2450</span> </h1>
          <h1 className='text font-semibold'><span>Rs:2500</span></h1>
          <h5>Available In Stock : <span className='text-green-500 font-semibold'>5000 Items</span></h5>
        </div>
          <h5 className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ab est iusto sequi perferendis ea non quisquam voluptate tenetur consequatur odio recusandae fuga esse fugiat alias, quibusdam maiores error vero. Qui consequatur aliquid nulla blanditiis . Voluptatibus sed repellat harum quas quis. Culpa, impedit cum.
          </h5>
          <div className='mt-2 flex '>
            <h5 className='font-medium'>Free Shipping (Est. Delivery Time 2-3 Days)</h5>

          </div>

          {/* input */}
          <div className='mt-2 flex gap-2 '>

          <input type="number"  className='w-20 mt-2 h-10 text-center border   border-gray-400  rounded' />
      
  <div className=' mt-2'>


        <Button  className='w-30 h-10 add gap-1' >
          <span><MdOutlineShoppingCart /></span>
  Add to Cart
</Button>
  </div>
          </div>
          {/* card */}

<div className='mt-8 flex gap-2 items-center'>
  <Tooltip >
    <CiHeart className='text-lg' />
  </Tooltip>
  <h1 className='font-semibold heart'>Add to Wishlist</h1>
 
  <h1 className='font-semibold heart flex gap-2'> <Tooltip >
    <IoMdGitCompare  className='text-lg' />
  </Tooltip>Add to Compare</h1>
</div>     

      </div>
    </div>
{/* Description */}

    <div className='mt-3   '>
      {/* <div className='gap-4 mt-3'>

      <h1 className='heart'>Description</h1>
      <br />
      <p className='border border-gray-300 bg-white rounded-full p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error harum quis esse blanditiis nemo odio. Distinctio dolor pariatur commodi in illum dolorum architecto nihil, soluta minus itaque doloribus, amet ill
      </p>

      </div> */}
      <div className='reviews'>
        <h1>
Reviews (1)</h1>
<div className='mt-3 rpunded-full border border-gray-300 '>
<h1 className='font-semibold m-5 text-lg'>
  
Customer questions & answers
</h1>
</div>

      </div>

    </div>
</>
  );
};

export default ProductZoom;
