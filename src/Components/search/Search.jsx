import React from 'react'
import '../search/styles.css'
import { FaSearch } from "react-icons/fa";
import Button from '@mui/material/Button';
const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2'>
<input type="text "  placeholder='search for products...' className='w-full h-35px focus:outline-none  bg-inherit p-2 text-15px'  />
<Button  className='!absolute top-[5px] right-[5px] z-50 w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black '><FaSearch  className='text-black'/></Button>

    </div>
  )
}

export default Search