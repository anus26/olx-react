import React, { useState } from 'react'
import CardCheck from '../../Components/CardCheck'

const Checkout = () => {
        const [draweropen,setDrawerOpen]=useState(false)
        const toggleDrawer=(open)=>{
            setDrawerOpen(open)

        }
  return (
    <section className='flex gap-8 h-dvh justify-center mt-10' >
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
        <div className='second box-border rounded shadow-md bg-white w-25 
         mt-5 basis-96'>
     <h1 className='font-semibold text-xl m-3 border-b border-gray-300'>Your Order</h1>
     <div className='flex  justify-between  m-3 border-b border-gray-300'>

  <h1 className='font-mediun text-xl'>Product</h1>
  <h1 className='font-mediun text-xl'>SubTotal</h1>
     </div>
     <div className='flex  m-3 gap-2 '>
    <img src="./images/11.jpg" alt="images" className='w-16 h-12 rounded-md cursor-pointer overflow-hidden object-cover  ' />
    <h1>Emroiday suit...</h1>
    <span>Qty:1</span>
    <span>Rs:1000</span>
     </div>
     <div className='gap-4 '>
        <button className='bg-primary text-white hover:bg-black transition-all duration-300 flex 
        justify-center items-center ml-20  w-60 h-10 rounded-md mt-8'onClick={()=>toggleDrawer(true)} >
         <img src="./images/shopping-bag.png" alt="shopping"  className='w-8 text-white'/>   Checkout
        </button>
         <button className='bg-yellow-400 text-white transition-all duration-300 flex 
        justify-center items-center ml-20 w-60 h-10 rounded-md mt-5'onClick={()=>toggleDrawer(true)} >
        <span className='text-purple-500'>Pay<span className='text-blue-400'>Pal</span></span>
        </button>
         <button className='bg-yellow-400 text-black transition-all duration-300 flex 
        justify-center items-center ml-20 w-60 h-10 rounded-md mt-5'onClick={()=>toggleDrawer(true)} >
           <img src="./images/letter-p.png" alt="p-image"  className='w-8'/> Pay Later
        </button>
         <button className='bg-black text-white hover:bg-black transition-all duration-300 flex 
        justify-center items-center ml-20 w-60 h-10 rounded-md mt-5'onClick={()=>toggleDrawer(true)} >
           <img src="./images/shopping-bag.png" alt="" className='w-8' />   Cash on Delivery
        </button>
     </div>
        </div>

    </section>
  )
}

export default Checkout