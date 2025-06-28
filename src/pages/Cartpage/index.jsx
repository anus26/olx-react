import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'

const Cartpage = () => {
    const [isitemvisible ,setItemVisible]=useState(true)
    const handleremoveitem=()=>{
        setItemVisible(false)
    }
  return (
  <section className='section py-5'>
    <div className='container flex'>
        <div className='leftpart w-[75%] flex  flex-col gap-4 justify-between py-3 px-3'>
            <div>

       <h2 className='text-xl font-bold'>Your cart</h2>
       <p>There are <span className='font-semibold text-primary'>2</span>{''} products in  your cart</p>
       {isitemvisible && (
       <div className='shadow-md rounded-md p-5 bg-white flex items-start relative gap-5 '>

        <div className='img w-28 h-28 shrink-0'>
            <img src="./images/2.jpg" alt=""  className='h-full w-full object-cover  rounded-md' />
        </div>
        <div className=' flex-1'>
          <p className='text-sm text-gray-600'>all about you</p>
          <h2 className='font-semibold text-lg'>Embroidered Satin Saree...</h2>
          
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  ))}
                </div>

                <br />
                <br />
                <div className='mt-3 flex items-center gap-3'>
                    <label htmlFor="Qty" className='text-sm'>Qty:</label>
                          <input
                    type="number"
                    id="qty"
                    min="1"
                    defaultValue="1"
                    className="w-14 border rounded px-2 py-1"
                  />
                </div>
 
                <div className='mt-3 text-gray-800 gap-2'>

                <h2  className='font-semibold'>Rs:200 <span className='line-through text-sm text-gray-500'>230</span>{''}<span className='text-primary'>13% OFF</span></h2>
                </div>
            </div>
                <IoClose className='absoltue top-3 right-3 text-xl cursor-pointer text-red-400'   onClick={handleremoveitem}/> 
        </div>
                )}
       </div>
        </div>

        <div className='rightpart w-[25%] flex  flex-col justify-between py-3 px-3 rounded-md shadow-md bg-white'>
            <div className='border-b border-rgba(0,0,0,0.1)  '>
                 <h1 className='font-semibold text-xl'>Cart Totals</h1>
            </div>
                 <div className='flex  justify-between  items-center text-lg font-medium gap-5'>
                    <div className=''>
                        <p  className='text-lg font-semibold  flex'>SubTotal <span className='text-lg text-primary flex justify-end items-end'>Rs:240</span></p>
                    </div>

                 </div>

        </div>

    </div> 


  </section>
  )
}

export default Cartpage