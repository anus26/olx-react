import React from 'react';
import { Link } from 'react-router-dom';

const BannerBox = ({ image, title, price, link }) => {
  return (
    <div className="w-full overflow-hidden rounded-md group relative">
      <img
        src={image}
        alt="Product Banner"
        className="w-[300px] h-[200px] object-cover transition-all duration-150 group-hover:scale-105"
      />
      <div className="absolute top-0 right-0 w-[70%] h-full z-50 flex items-center justify-center flex-col gap-2 p-5 pl-16 bg-black/40 text-white">
        <h2 className="text-[14px] md:text-[18px] font-semibold">{title}</h2>
        <span className="text-[20px] text-yellow-400 font-semibold w-full">
          ₹{price}
        </span>
        <div className="w-full">
          <Link
            to={link}
            className="text-[16px] font-semibold underline hover:text-yellow-300 transition-colors duration-200"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerBox;
