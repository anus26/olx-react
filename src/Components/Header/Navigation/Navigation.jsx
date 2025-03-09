import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router';
import { IoIosRocket } from "react-icons/io";
import CategoryPanel from './CategoryPanel';
import '../Navigation/Styles.css';
const Navigation = () => {
    const [isopencatpanel ,setIsOpenCatPanel]=useState(false)
    const openCategoryPanel=()=>{
        setIsOpenCatPanel(
  true
        )
    }
  return (
    <>
  <nav className='py-2'>
    <div className='container flex items-center  justify-end gap-8'>
        <div className='col_1 w-[20%] '>
     <Button className='!text-black gap-2 ' onClick={openCategoryPanel}><RiMenu2Fill  />Shop By Categories<FaAngleDown  className=' font-bold text-[13px] m1-auto'/></Button>
        </div>
        <div className='col_2 w-[65%]'>
 
       <ul className='flex gap-5 nav'>
    <li className='!list-none'>
        <Link to='/' className='link transition text-15px font-[500]'>Home</Link>
    </li>
    <li className='list-none'>
        <Link to='/' className='link transition text-15px font-[500]'>Groceries</Link>
    </li>
    <li className='list-none relative '>
        <Link to='/' className='link transition text-15px font-[500] '>Fashion</Link>
      
    <div className='submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white
    shadow-md  opacity-0 trasnition-all'>

        <ul>
            <li className='list-none ' >
                <Link to='/' className='w-full'>
  
                <Button className='!text-black w-full !text-left !justify-start'>Men</Button>
                <div className='submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white
    shadow-md  opacity-0 trasnition-all'>

        <ul>
            <li className='list-none ' >
                <Link to='/' className='w-full'>
  
                <Button className='!text-black w-full !text-left !justify-start'>Men</Button>
   

   
                </Link>
                

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Woman</Button>
                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Kids</Button>

                </Link>
            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Girl</Button>
                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Boys</Button>
                </Link>

            </li>
           
        </ul>

    </div>

   
                </Link>
                

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Woman</Button>
                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Kids</Button>

                </Link>
            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Girl</Button>
                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Boys</Button>
                </Link>

            </li>
           
        </ul>

    </div>
    </li>

    <li className='list-none'>
        <Link to='/' className='link transition text-15px font-[500]'>Electronics</Link>
    </li>
    <li className='list-none'>
        <Link to='/' className='link transition text-15px font-[500]'>Footwear</Link>
    </li>
    <li className='list-none'>
        <Link to='/' className='link transition text-15px font-[500]'>Bags</Link>
    </li>
    <li className='list-none'>
        <Link to='/' className='link transition text-15px font-[500]'>Beauty</Link>
    </li>
    <li className='list-none'>
        <Link to='/' className='link transition text-15px font-[500]'>Jewellery</Link>
    </li>
       </ul>
        </div>
       <div className='col_3 w-[15%]'>
<p className='text-[13px] font-[500] flex items-centeer gap-3 mb-0 mt-0'><IoIosRocket  className='text-[300%]
'/>
Free  Internatioal Shipping</p>
       </div>
        </div>

  </nav>
  {/* category panel */}
  <CategoryPanel  isopencatpanel={isopencatpanel} setIsOpenCatPanel={setIsOpenCatPanel}/>
</>
  )
}

export default Navigation
