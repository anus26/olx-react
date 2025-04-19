import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoIosReturnLeft } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { LiaGiftSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoIosChatboxes } from "react-icons/io";
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaFacebookF } from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
   <footer className='py-6'>

<div className='container '>
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

    <div className='part1 w-[25%] border-r border-black'>
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
    <div className='part2 flex  w-[20%]'>
        <div className='part2 '>
            
        <h2 className='text-[20px] font-[600] mb-12'>Products</h2>
        < ul className='list' >
            <li className='list-none text-[14px] w-full mb-1' >
            <Link to="/" clasName='link text-[15px] mb-2 '>Price drop</Link></li>
           <li className='list-none text-[14px] w-full mb-2' > <Link to="/" clasName='link text-[15px] mb-2 '>New Products</Link></li>
           <li className='list-none text-[14px] w-full mb-2' > <Link to="/" clasName='link text-[15px] mb-2 '>Best Sales</Link></li>
          <li  className='list-none text-[14px] w-full mb-2'>  <Link to="/" clasName='link text-[15px] mb-2 '>Contact us</Link></li>
         <li className='list-none text-[14px] w-full mb-2'>   <Link to="/" clasName='link text-[15px] mb-2 '>Sitmap</Link></li>
        <li className='list-none text-[14px] w-full mb-2'>   <Link to="/" clasName='link text-[15px] mb-2 '>Stores</Link>
            </li>
            </ul>
        </div>
    

    </div>

    <div className='part2 flex  w-[20%] '>
        <div className='part3 '>
            
        <h2 className='text-[20px] font-[600] mb-12'>Products</h2>
        < ul className='list' >
            <li className='list-none text-[14px] w-full mb-1' >
            <Link to="/" clasName='link text-[15px] mb-2 '>Price drop</Link></li>
           <li className='list-none text-[14px] w-full mb-2' > <Link to="/" clasName='link text-[15px] mb-2 '>New Products</Link></li>
           <li className='list-none text-[14px] w-full mb-2' > <Link to="/" clasName='link text-[15px] mb-2 '>Best Sales</Link></li>
          <li  className='list-none text-[14px] w-full mb-2'>  <Link to="/" clasName='link text-[15px] mb-2 '>Contact us</Link></li>
         <li className='list-none text-[14px] w-full mb-2'>   <Link to="/" clasName='link text-[15px] mb-2 '>Sitmap</Link></li>
        <li className='list-none text-[14px] w-full mb-2'>   <Link to="/" clasName='link text-[15px] mb-2 '>Stores</Link>
            </li>
            </ul>
        </div>
    

    </div>

    <div className='part2 flex  w-[35%]'>
        <div className='part3 '>
            
        <h2 className='text-[20px] font-[600] mb-12'>Subscribe to newsletter</h2>
        <p  className='text-[14px] font-[400] pb-3'>Subscribe to our latest newsletter to get news about <br />special discounts.</p><br />
        <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2'>
       <input type="Email"  placeholder='Your Email Address' className='w-full h-35px focus:outline-none  bg-inherit p-2 text-15px mb-4'  />
       <Button className='!text-white border   !bg-primary hover:!text-white rounded-full px-6 py-2'>
  SUBSCRIBE
</Button>
<FormControlLabel  control={<Checkbox  color="!primary"/>  }label="I agree to the terms and conditions and the privacy policy" />

       
           </div>
        </div>
    

    </div>
</div>
</div>
   </footer>
   <br />
   <div className='borderStrip  border-t  border-black py-3 bg-white'>
<div className='container flex items-center justify-between'>
<ul className='flex items-center justify-center gap-2'>
    <li className='list-none  flex items-center justify-center'>
<Link to="/" target='_black ' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex  items-center justify-centerr group hover:bg-primary'>  
<FaFacebookF className='text-[15px] group-hover:text-white'/>
</Link>
    </li>
    <li className='list-none '>
<Link to="/" target='_black ' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex  items-center justify-center  group hover:bg-primary'>  
<FaYoutube className='text-[15px] group-hover:text-white'/>
</Link>
    </li>
    <li className='list-none '>
<Link to="/" target='_black ' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex  items-center justify-center  group hover:bg-primary'>  
< FaInstagram className='text-[15px] group-hover:text-white'/>
</Link>
    </li>
    <li className='list-none '>
<Link to="/" target='_black ' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex  items-center justify-center  group hover:bg-primary'>  
<FaTwitter className='text-[15px] group-hover:text-white'/>
</Link>
    </li>
</ul>
<p className='text-[13px] text-center mb-0'>© 2024 - Ecommerce Template</p>
<div className='flex items-center'>
    <img src="./images/c1.png" alt="card" />
    <img src="./images/c2.png" alt="card" />
    <img src="./images/c3.png" alt="card" />
    <img src="./images/c4.png" alt="card" />
    <img src="./images/c5.png" alt="card" />

</div>
</div>
   </div>
    </>
  )
}

export default Footer