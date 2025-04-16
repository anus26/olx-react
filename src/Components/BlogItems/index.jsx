import React from 'react'
import { IoIosTimer } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
const BlogItems = () => {
  return (
    <div className=' group '>
        <div className='p-1 imagewrapper overflow-hidden  rounded-md  relative cursor-pointer'> 
       <img src="./images/airoplane1.jpg" alt="airoplane"  className='w-full  transition-all group-hover:scale-105 group-hover:rotate-1'/>
       <span className='z-50 right-[15px]  flex items-center justify-center text-white absolute bottom-[15px] rounded-md p-1  bg-primary'><IoIosTimer  className='text-[15px]'/>  5 April 2022</span>
        </div> 
<div className='info py-4'>
    <Link className=''>
    <h2 className='text-[16px] font-[600]'>Lorem ipsum dolor sit.</h2>
    </Link>
    <p className='text-[16px] font-[600] text-[rgba(0,0,0,0.8)] mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, aliquam.......
    </p>

<Link className='link font-[500] flex items-center gap-1  '>Read more<IoIosArrowForward  className=''/></Link>
</div>
    </div>
  )
}

export default BlogItems