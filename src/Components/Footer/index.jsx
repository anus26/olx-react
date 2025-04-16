import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoIosReturnLeft } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { LiaGiftSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";
const Footer = () => {
  return (
   <footer className='py-6'>

<div className='container bg-white'>
    <div className='flex items-center justify-center gap-2'>
        <div className=' col  flex items-center justify-center flex-col group w-[20%]'>
        <LiaShippingFastSolid className='text-[40px] transition-all group-hover:text-primary duration-200 group-hover:-translate-y-1' />
            <h3 className='text-[18px] font-[600]'>Free Shipping</h3>
           <p>for all order over $100</p>
        </div>
        <div className=' col  flex items-center justify-center flex-col group w-[20%]'>
        <IoIosReturnLeft  className='text-[40px] transition-all group-hover:text-primary duration-200 group-hover:-translate-y-1' />
            <h3 className='text-[18px] font-[600]'>Free Shipping</h3>
           <p>for all order over $100</p>
        </div>
        <div className=' col  flex items-center justify-center flex-col group w-[20%]'>
        <MdOutlinePayments className='text-[40px] transition-all group-hover:text-primary duration-200 group-hover:-translate-y-1' />
            <h3 className='text-[18px] font-[600]'>Free Shipping</h3>
           <p>for all order over $100</p>
        </div>
        <div className=' col  flex items-center justify-center flex-col group w-[20%]'>
        <LiaGiftSolid className='text-[40px] transition-all group-hover:text-primary duration-200 group-hover:-translate-y-1' />
            <h3 className='text-[18px] font-[600]'>Free Shipping</h3>
           <p>for all order over $100</p>
        </div>
        <div className=' col  flex items-center justify-center flex-col group w-[20%]'>
        <MdOutlineSupportAgent className='text-[40px] transition-all group-hover:text-primary duration-200 group-hover:-translate-y-1' />
            <h3 className='text-[18px] font-[600]'>Free Shipping</h3>
           <p>for all order over $100</p>
        </div>

    </div>

</div>
   </footer>
  )
}

export default Footer