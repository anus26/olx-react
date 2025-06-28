import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IoMdClose } from "react-icons/io";
const CardCheck = ({open,onClose}) => {



  return (
      <div>

          <Drawer anchor='right' open={open}  onClose={onClose} className=''>
            <div className='w-full  '>  
              <div className='flex  justify-between gap-8 mt-3  border-b border-black '>


            <h1 className='font-bold text-lg ml-2'> Add Delivery Address</h1>
          <IoMdClose  onClick={onClose} className='mr-2'/>
              </div>
            </div>
       
          </Drawer>
       
      
    </div>
  )
}

export default CardCheck