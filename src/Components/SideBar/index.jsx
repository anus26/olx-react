import  {React ,useState} from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../SideBar/style.css"
import { FaAngleDown } from "react-icons/fa6";
import Rating from '@mui/material/Rating';
import {Collapse} from 'react-collapse';
import  Button from '@mui/material/Button';
import { FaAngleUp } from "react-icons/fa6";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
const SideBar = () => {
    const [isOpenCatageoryFilter , setIsOpenCatageoryFilter]=useState(true)
    const [isOpenCatageory , setIsOpenCatageory]=useState(true)
    const [isOpenCatageorySize , setIsOpenCatageorySize]=useState(true)
  return (
    <div className='sidebar py-5' >
          <div className='box'>
         <h3 className='mb-4 text-[14px] font-[600] '>Shop by Category
          <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full  !m1-auto !text-black' onClick={()=>setIsOpenCatageoryFilter(!isOpenCatageoryFilter)}>
            {
              isOpenCatageoryFilter===true ? <FaAngleUp />  :<FaAngleDown />

            }
            </Button>
         </h3>
         <Collapse isOpened={isOpenCatageoryFilter}>
       <div className='scroll px-4 relative  -left-[13px]'>
       <FormGroup>
      <FormControlLabel control={<Checkbox color='!primary' />} label="Fashion"  />
      <FormControlLabel  control={<Checkbox />} label="Electronics" />
      <FormControlLabel  control={<Checkbox />} label="Wellens" />
      <FormControlLabel  control={<Checkbox />} label="Footewear" />
      <FormControlLabel  control={<Checkbox />} label="Groceries" />
      <FormControlLabel  control={<Checkbox />} label="Bags" />
      <FormControlLabel  control={<Checkbox />} label="Bags" />
    </FormGroup>
       </div>

         </Collapse>

          </div>
          <br />
          <div className='box'>
         <h3 className='mb-4 text-[14px] font-[600] '>Avability
          <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full  !m1-auto !text-black' onClick={()=>setIsOpenCatageory(!isOpenCatageory)}>
            {
              isOpenCatageory===true ? <FaAngleUp />  :<FaAngleDown />

            }
            </Button>
         </h3>
         <Collapse isOpened={isOpenCatageory}>
       <div className=' px-4 relative  -left-[13px]'>
       <FormGroup>
      <FormControlLabel  control={<Checkbox />} label="Avalible (17)" />
      <FormControlLabel  control={<Checkbox />} label="not Avalible (10)" />
      <FormControlLabel  control={<Checkbox />} label="Shot (1)" />
    
    </FormGroup>
       </div>

         </Collapse>

          </div>


<br />
          <div className='box'>
         <h3 className='mb-4 text-[14px] font-[600] '>Avability
          <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full  !m1-auto !text-black' onClick={()=>setIsOpenCatageorySize(!isOpenCatageorySize)}>
            {
              isOpenCatageorySize===true ? <FaAngleUp />  :<FaAngleDown />

            }
            </Button>
         </h3>
         <Collapse isOpened={isOpenCatageorySize}>
       <div className=' px-4 relative  -left-[13px]'>
       <FormGroup>
      <FormControlLabel  control={<Checkbox />} label="Large (17)" />
      <FormControlLabel  control={<Checkbox />} label="Medium (10)" />
      <FormControlLabel  control={<Checkbox />} label="Small (1)" />
    
    </FormGroup>
       </div>
       <br />
         </Collapse>
<div className='box'>
<h3 className='mb-4 text-[14px] font-[600] '>Price</h3>
<RangeSlider />
<div className='flex pt-2 pb-2 priceRange'>
  <span>
    From: <strong className='text-dark'>Rs:{10}</strong>
  </span>
  <span className='m1-auto'>
    From: <strong className='text-dark'>Rs:{5000}</strong>
  </span>
</div>
</div>
<br />

<div className='box'>
<h3 className='mb-4 text-[14px] font-[600] '>Rating by filter</h3>
<div className='w-full'>
    <Rating name="size-small" defaultValue={5} size="small" readOnly/>

</div>
<div className='w-full cursor-pointer'>
    <Rating name="size-small" defaultValue={4} size="small" readOnly/>

</div>
<div className='w-full cursor-pointer'>
    <Rating name="size-small" defaultValue={3} size="small" readOnly/>

</div>
<div className='w-full cursor-pointer'>
    <Rating name="size-small" defaultValue={2} size="small" readOnly/>

</div>
</div>

          </div>
    </div>
  )
}

export default SideBar