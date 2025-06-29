import React, { useState } from 'react'
import CardCheck from '../../Components/CardCheck'

const Checkout = () => {
        const [draweropen,setDrawerOpen]=useState(false)
        const toggleDrawer=(open)=>{
            setDrawerOpen(open)

        }
  return (
    <section className='flex gap-8 min-h-screen justify-center mt-10' >
        <div className=' box-border  h-96  rounded shadow-md bg-white w-75 mt-5 basis-1/3 '>
        <h1 className='font-semibold text-xl m-5'>Select Delivery Address</h1>
        <img src="./images/address.png" alt="address image" className='w-24  flex items-center justify-center ml-52 mt-24 h-24 ' />
        <p className='font-bold justify-center flex mt-2'>No address find in your  accout!</p>
        <p className='flex justify-center'>Add a Delivery Address</p>
        <button className='bg-primary text-white hover:bg-black transition-all duration-300 flex 
        justify-center items-center ml-44 w-40 h-10 rounded-md mt-5'onClick={()=>toggleDrawer(true)} >
            Add Address
        </button>
            <CardCheck open={draweropen}    onClose={()=>setDrawerOpen(false)} className="w-full"/>
        </div>
        <div className=' box-border rounded shadow-md bg-white w-25  mt-5 basis-96'>
     <h1 className='font-semibold text-xl'>Select Delivery Address</h1>
  
        </div>

    </section>
  )
}

export default Checkout