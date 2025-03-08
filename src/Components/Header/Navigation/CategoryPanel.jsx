import {React ,useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoClose } from "react-icons/io5";
import { FaFolderPlus } from "react-icons/fa";
import { Link } from 'react-router';
const CategoryPanel = (props) => {
 const [submenuindex,setSubMenuIndex ]=useState(null)
    const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen)
      };
      const opensubmenu=(index)=>{
        if (submenuindex ===index) {

            setSubMenuIndex(null)
            
        }else{
            setSubMenuIndex(index)
        }
      }
   
const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation " className='categorypanel'>
        <h3 className='p=3 text-[15px] font-[500] flex items-center justify-between'>Shop by Category <IoClose onClick={toggleDrawer(false)} className='cursor-pointer text-[15px]'/></h3>
  <div className='scroll'>
    <ul className='w-full'>
        <li className='list-none felx items-center relative'>
          <Link to="/">

           <Button className='w-full !text-left !justify-start px-3 !text-black'>Fashion</Button>
          </Link> 
            <FaFolderPlus className='absolute top-3 right-5' onClick={()=>opensubmenu(0)} />
                {
                    submenuindex === 0 &&
            <ul className='submenu absolute top-[100%] left-0 w-full pl-3'>
                <li className='list-none  relative '>
                    <Link to="/">
                    
                <Button className='w-full !text-left !justify-start px-3 !text-black'>Apperal</Button>
                    </Link>
                <FaFolderPlus className='absolute top-3 right-5' />
            <ul className='inner_submenu absolute top-[100%] left-0 w-full pl-3'>
                <li className='list-none  relative mb-2'>
                <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Smart Tablets</Link>

                </li>
                <li className='list-none  relative mb-2'>
                <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Crepe T-Shirt</Link>

                </li>
                <li className='list-none  relative mb-2 '>
                <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Leather Watch</Link>

                </li>
                <li className='list-none  relative mb-2 '>
                <Link to="/" className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Rolling Diamond</Link>


                </li>
              

            </ul>
                </li>
              

            </ul>
}
        </li>
    </ul>
  </div>
    </Box>
  );

  return (
    <div>

    <Drawer open={props.isopencatpanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  </div>
  )
}

export default CategoryPanel