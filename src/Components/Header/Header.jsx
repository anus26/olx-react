import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Search from '../search/Search'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import Navigation  from './Navigation/Navigation';
import { MyContext } from '../../App';
import { Button } from '@mui/material';
import { FaRegUser } from "react-icons/fa";


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  const context=useContext(MyContext)
  const [isloged,setIsLoged]=useState()
  const [open ,setOpen]=useState('')
  const toggleopen=()=>{
    setOpen(!open)
  }
 
  return (
   <header className='bg-white'>
    <div className='top-strip py-2  border-t-[1px] border-gray-250 border-b-[1px]'>
      <div className='container'>
<div className='flex items-center justify-between'>
<div className='col1 w-[50%]'>
  <p className='text-[12px] font-[500]'>Get up to 50% off new season styles, limited time only!</p>

</div>
<div className=' col2 flex items-center justify-end'>
<ul className='flex items-center gap-3'>

  <li className='list-none'>
  <Link to='/help-center' className='text-[12px] link font-[500] transition'>Help Center{" "}</Link>
  </li>
  <li className='list-none'>
  <Link to='/order-tracking' className='text-[12px] link font-[500] transition'>Order tracking</Link>
  </li>
</ul>
</div>
</div>
      </div>
    </div> 
    <div className='header py-3  border-t-[1px] border-gray-250 border-b-[1px]' >
<div className='coontainer flex items-center justify-between' >
<div className='col1 px-20 w-[30%]  '>
<Link to={'/'}><img src="/images/logo.jpg"     /></Link>
</div>
<div className='col2 w-[40%]'><Search/></div>
<div className='col3 w-[30%] flex items-center '>
  <ul className='flex items-center gap-3 pl-3 '>
    { isloged === false ?
      

 (   <li className='list-none'>
  <Link to='/login' className='link transition text-[15px] font-[500]'>Login</Link> | &nbsp; <Link to='/register ' className='link transition text-[15px] font-[500]'>Register</Link>
    </li>
 ):(

    <div className='MyAccount flex flex-col gap-1 relative p-2'>
      <Button
        onClick={toggleopen}
        className='!w-[28px] !h-[28px] !min-w-[40px] !rounded-full relative'
      >
        <FaRegUser className='text-black text-[16px]' />
      </Button>

      {open && (
        <div className='absolute top-[120%] left-0 min-w-[150px] bg-white shadow-md transition-all z-50 p-2'>
          <Link to='/myaccount' className='block py-1'>My Account</Link>
          <Link to='/myaccount' className='block py-1'>My Orders</Link>
          <Link to='/myaccount' className='block py-1'>Settings</Link>
          <Link to='/myaccount' className='block py-1'>Logout</Link>
        </div>
      )}

      <h3 className='font-semibold'>Anus Raza</h3>
      <p className='text-sm text-gray-600'>anusraza268@gmail.com</p>
    </div>
  )}
    <li>
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
      <IoIosGitCompare />
      </StyledBadge>
    </IconButton>
    </li>
    <li>
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <FaRegHeart />
      </StyledBadge>
    </IconButton>
    </li>
    <li>
      
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary" onClick={()=>context.setOpenCartPanel(true)}>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
    </li>

  </ul>
</div>
</div>
    </div>
  
  <Navigation/>



   </header>
  )
}

export default Header
