import React, { useState } from 'react'
import CardCheck from '../CardCheck';
import Checkout from '../../pages/Checkout';

const MyAddress = () => {
  const [address, setAddress] = useState(false);
  const handleclick=(open)=>{
    console.log(address);
    setAddress(open)
  }
  return (
    <div className=' bg-white  w-96 h-52 shadow-lg rounded '>

    <div>
<h1 className='m-4 font-semibold'>
  Address
</h1>
<div className='flex items-center justify-center m-10 '>

<button className=' bg-slate-100 hover:bg-slate-200  rounded w-80 h-14    border-4 border-dotted  ' onClick={()=>handleclick(true)}>Add Address</button>
<CardCheck onClose={()=>setAddress(false)} open={address}/>
</div>

    </div>
    </div>
  )
}

export default MyAddress