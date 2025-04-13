import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
import { MdZoomOutMap } from "react-icons/md";
const ProductItems = () => {
  return (
    <div className='productitems rounded-md shadow-lg bg-slate-200 overflow-hidden relative
     borer-2 border-[rgba(0,0,0,0.6)]'>
<div className='group imagewrapper w-[100%] h-[220px] overflow-hidden rounded-md'>
    <Link>
    <div className='w-[100%] overflow-hidden'>

<img src="./images/15.jpg" alt="images" className='w-full'/>
<img src="./images/19.jpg" alt="images" className='w-full left-0 top-0  transition-all duration-500 opacity-0 absolute group-hover:opacity-100'/>
    </div>
    </Link>
<div className='action flex items-center top-[-200px] right-[5px] z-50 absolute gap-2 flex-col w-[50px] transition-all duration-500 group-hover:top-[15px] opacity-0 group-hover:opacity-100'>
    <Button className='!w-[30px] !h[30px] !min-w-[30px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group '>
         <MdZoomOutMap className='text-[18px]  !text-black  group-hover:text-white' /></Button>
         <Button className='!w-[30px] !h[30px] !min-w-[30px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group '>
         <FaRegHeart className='text-[18px]  !text-black  group-hover:text-white' /></Button>
         <Button className='!w-[30px] !h[30px] !min-w-[30px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group '>
         <FaCodeCompare className='text-[18px]  !text-black  group-hover:text-white' /></Button>
     </div>
<span  className='discount flex items-center top-[10px] z-50 absolute left-[10px] bg-primary text-white rounded-md p-1 text-[15px] font-[500]'>10%</span>
</div>
<div className='info p-3'>
    <h6 className='text-[13px]'>
        <Link to='/'  className='link transition-all '>
        CLAFOUTIS
        </Link>
    </h6>
    <h3 className='text-[14px] title mt-1 font-[500] mb-1 text-[rgba(0,0,0,0.6)]'>

 <Link to='/'  className='link transition-all '>
 Men Opaque Casual Shirt
        </Link>
    </h3>
    <Rating name="size-small" defaultValue={2} size="small" readOnly/>
    <div className='flex items-center gap-4'>
       <span className='oldprice line-through text-gray-500 '>$ 58.00</span>
       <span className='newprice  text-primary font-[500]'>$ 50.00</span>
    </div>
</div>
    </div>
  )
}

export default ProductItems