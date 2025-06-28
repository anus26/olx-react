import React from 'react'

const Checkout = () => {
  return (
    <section className='flex gap-8 min-h-screen justify-center w-full ' >
        <div className='mt-10 box-border  rounded shadow-md bg-white w-60 '>
        <h1 className='font-semibold text-xl'>Select Delivery Address</h1>
        <img src="./images/address.png" alt="address image" />
        <p>No address find in your  accout</p>
        </div>
        <div className='mt-10 box-border rounded shadow-md bg-white w-40'>
     <h1 className='font-semibold text-xl'>Select Delivery Address</h1>
        </div>

    </section>
  )
}

export default Checkout