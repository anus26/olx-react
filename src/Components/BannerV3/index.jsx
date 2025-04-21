// src/components/Bannerv3.jsx
import React from 'react'
import "../BannerV3/style.css"
import { Link } from 'react-router-dom';

const Bannerv3 = ({ image, title, price  ,info = 'left' }) => {
  const isLeft = info ===  "left"
  return (
    <div className='banner3 w-full overflow-hidden rounded-md group relative'>
      <img 
        src={image} 
        alt={title} 
        className='transition-all duration-150 group-hover:scale-110 object-cover w-full h-full' 
      />
           <div className={`info absolute p-3 top-[15px] ${isLeft ? 'left-[3%]' : 'right-[3%]'} w-[60%] h-full z-50 flex items-center justify-center flex-col gap-2 bg-black/40 text-black`}>

        <h2 className='text-[20px] font-[500]'>{title}</h2>
        <span className='text-[25px] text-primary font-[500]'>RS: {price}</span>
        <div className='hover:text-primary'>
          <Link to="/">Shop Now</Link>
        </div>
      </div>
    </div>
  )
}

export default Bannerv3;
