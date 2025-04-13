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
<div className='imagewrapper w-[100%] h-[220px] overflow-hidden rounded-md'>
<img src="./images/15.jpg" alt="images" className='w-full'/>
<div className='action flex items-center top-[10px] right-[15px] z-50 absolute gap-4 flex-col w-[80px]'>
    <Button> <MdZoomOutMap /></Button>
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