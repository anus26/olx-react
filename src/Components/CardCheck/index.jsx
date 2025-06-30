import React, { useState } from 'react'
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
import TextField from '@mui/material/TextField';
import { IoMdClose } from "react-icons/io";
import Radio from '@mui/material/Radio';

const CardCheck = ({open,onClose}) => {
  const [selectedValue, setSelectedValue] = useState('a');
  const [address,setAddress]=useState('')
  const [country,setCountry]=useState('')
  const [state,setState]=useState('')
  const [Postcode,setPostCode]=useState('')
  const [landmark,setLandMark]=useState('')
  const [city,setCity]=useState('')
  const [number,setNumber]=useState('')

  const handleChange = (event) => {

    
    setSelectedValue(event.target.value);
  };
  const handlesubmit=(e)=>{
    e.preventDefault()
    console.log('form submitted')
    console.log(address,'address');
    
    setAddress("")
    setCity("")
    setAddress("")
    setNumber("")
    setLandMark("")
    setPostCode("")
    setState("")
  }


  return (
      <div className=''>

          <Drawer anchor='right' open={open}  onClose={onClose} className=''>
            <div className=' '>  
              <div className='flex  justify-between gap-8 mt-3  border-b border-black '>


            <h1 className='font-bold text-lg ml-2'> Add Delivery Address</h1>
          <IoMdClose  onClick={onClose} className='mr-2 large-xl font-bold'/>
              </div>
            <form onSubmit={handlesubmit}>
          <div className='flex flex-col m-4  gap-5 '>

          <TextField type="address"   value={address}     onChange={(e) =>setAddress(e.target.value)} fullWidth      id="outlined-multiline-flexible" label="Addressline"  />
             <TextField type="city"    value={city} fullWidth      onChange={(e) =>setCity(e.target.value)}   id="outlined-multiline-flexible" label="City"  />
          <TextField type="state"   value={state}  fullWidth       onChange={(e) =>setState(e.target.value)}  id="outlined-multiline-flexible" label="State"  />
          <TextField type="Postcode" value={Postcode} fullWidth       onChange={(e) =>setPostCode(e.target.value)}  id="outlined-multiline-flexible" label="Postcode"  />
          <TextField type="country"  value={country}   fullWidth        onChange={(e) =>setCountry(e.target.value)} id="outlined-multiline-flexible" label="Country"  />
          <TextField type="number"   value={number} fullWidth      onChange={(e) =>setNumber(e.target.value)}   id="outlined-multiline-flexible" label="Nubmer"  />
           <TextField type="landmark" value={landmark}   fullWidth     onChange={(e) =>setLandMark(e.target.value)}    id="outlined-multiline-flexible" label="LandMark"  />
          </div>
             <div className='m-5'>
              <h1>Address Type</h1>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
    </div>
     <button className='bg-primary text-white hover:bg-black transition-all duration-300 flex 
        justify-center items-center text-center w-96 m-10 h-10 rounded-md mt-5'type='submit' >
            save
        </button>
          </form>
            </div>
       
          </Drawer>
       
      
    </div>
  )
}

export default CardCheck