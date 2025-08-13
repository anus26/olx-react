import React from 'react'
import '../Order/styles.css'
const Order = () => {
  return (
<section className='overflow-hidden'>
    <div className='container bg-white border rounded '>
   <h1 className='m-5 font-semibold font-500 '>My Orders</h1>
   <p className='m-4'>There are <span className='text-red-500 font-semibold'>0</span> order</p>
     
   <div className='content m-5  flex  gap-5 overflow-auto whitespace-nowrap bg-slate-100 h-14   '>
  <p className='font-semibold m-1'>ORDER ID</p>
  <p className='font-semibold m-1'>PAYMENT ID</p>
  <p className='font-semibold m-1'>NMAE </p>
  <p className='font-semibold m-1'>PHONE NUMBER</p>
  <p className='font-semibold m-1'>PIN CODE</p>
  <p className='font-semibold m-1'>TOTAL AMOUNT</p>
  <p className='font-semibold m-1'>EMAIL</p>
  <p className='font-semibold m-1'>USER ID</p>
  <p className='font-semibold m-1'>ORDER STATUS</p>
  <p className='font-semibold m-1'>DATE</p>

   </div>
    </div>
</section>
  )
}

export default Order