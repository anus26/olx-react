import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
import { MdZoomOutMap } from "react-icons/md";
const ProductItems = ({item}) => {
    // const items=[
    //     {
    //         id: 1,
    //         defaultImg: 'w1',
    //         hoverImg: 'w2',
    //         title: 'Men Opaque Casual Shirt',
    //         brand: 'CLAFOUTIS',
    //         oldPrice: 58.0,

    //         newPrice: 50.0,
    //         rating: 4,
    //       },
    //     //   {
    //     //     id: 2,
    //     //     defaultImg: 'x1',
    //     //     hoverImg: 'x2',
    //     //     title: 'Classic Fit Denim Jacket',
    //     //     brand: 'URBAN THREAD',
    //     //     oldPrice: 120.0,
    //     //     newPrice: 95.5,
    //     //     rating: 5,
    //     //   },
         
    // ]
   
  return (
   
<div className=''>

    {/* {items.map((item)=>( */}
      <div key={item.id}   className='productitems rounded-md shadow-lg bg-slate-200 overflow-hidden relative
      borer-2 border-[rgba(0,0,0,0.1)]'>
<div className='group  imagewrapper w-full h-[220px] overflow-hidden rounded-md'>
    <Link>

        <div   className='relative w-full h-full overflow-hidden'>

<img src={`./images/${item.defaultImg}.jpg`} alt="images" className='w-full h-full object-cover transition-all duration-500'/>


<img src={`./images/${item.hoverImg}.jpg`}  alt="images" className='w-full h-full object-cover left-0 top-0  transition-all duration-500 opacity-0 absolute group-hover:opacity-100'/>
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
        {item.brand}
        </Link>
    </h6>
    <h3 className='text-[14px] title mt-1 font-[500] mb-1 text-[rgba(0,0,0,0.6)]'>

 <Link to='/'  className='link transition-all '>
 {item.title}
        </Link>
    </h3>
    <Rating name="size-small" defaultValue={2} size="small" readOnly/>
    <div className='flex items-center gap-4'>
       <span className='oldprice line-through text-gray-500 '>${item.oldPrice}</span>
       <span className='newprice  text-primary font-[500]'>${item.newPrice}</span>
    </div>
</div>
    </div>
 

{/* ))}  */}
          </div>
  )
}

export default ProductItems