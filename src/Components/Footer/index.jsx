import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoIosReturnLeft } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { LiaGiftSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoIosChatboxes } from "react-icons/io";

const Footer = () => {
  return (
   <footer className='py-6'>

<div className='container bg-white '>
    <div className='flex items-center justify-center gap-2 py-8 pb-8'>
        <div className=' col  flex items-center justify-center flex-col group w-[20%]'>
        <LiaShippingFastSolid className='text-[40px] transition-all group-hover:text-primary duration-200 group-hover:-translate-y-1' />
            <h3 className='text-[15px] font-[600]'>Free Shipping</h3>
           <p>for all order over $100</p>
        </div>
        <div className=' col  flex items-center justify-center flex-col group w-[20%]'>
        <IoIosReturnLeft  className='text-[40px] transition-all group-hover:text-primary duration-200 group-hover:-translate-y-1' />
            <h3 className='text-[15px] font-[600]'>Free Shipping</h3>
           <p>for all order over $100</p>
        </div>
        <div className=' col  flex items-center justify-center flex-col group w-[20%]'>
        <MdOutlinePayments className='text-[40px] transition-all group-hover:text-primary duration-200 group-hover:-translate-y-1' />
            <h3 className='text-[15px] font-[600]'>Free Shipping</h3>
           <p>for all order over $100</p>
        </div>
        <div className=' col  flex items-center justify-center flex-col group w-[20%]'>
        <LiaGiftSolid className='text-[40px] transition-all group-hover:text-primary duration-200 group-hover:-translate-y-1' />
            <h3 className='text-[15px] font-[600]'>Free Shipping</h3>
           <p>for all order over $100</p>
        </div>
        <div className=' col  flex items-center justify-center flex-col group w-[20%]'>
        <MdOutlineSupportAgent className='text-[40px] transition-all group-hover:text-primary duration-200 group-hover:-translate-y-1' />
            <h3 className='text-[15px] font-[600]'>Free Shipping</h3>
           <p>for all order over $100</p>
        </div>

    </div>
 
<hr />
<div className='footer flex items-center py-8 pl-3'>

    <div className='part1'>
        <h2 className='text-[20px] font-[600] mb-[4]'>Contact us</h2><br />
        <p  className='text-[14px] font-[400] pb-3'>Classyshop - Mega Super Store <br />
        507-Union Trade Centre France</p><br />
        <Link className='Link' to='mailto:someone@example.com'>B.M@yourcompany.com</Link>
            <span className='text-primary text-[20px] font-[600] mt-3 w-full '>(+91) 9876-543-210</span>
            <div className='flex items-center'>
            <IoIosChatboxes  className='text-[30px] text-primary'/>
            <span className='text-[20px] font-[600] pl-3'>Online Chat <br />
            Get Expert Help</span>
            </div>
    </div>
</div>
</div>
   </footer>
  )
}

export default Footer