import React from 'react'
import HomeSlider from '../../Components/HomeSlider'
import HomeCatSlider from '../../Components/HomeCatSlider'
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from '../../Components/AdsBannerSlider';
const Home = () => {
  return (
  <>
  <HomeSlider/>
  
  <HomeCatSlider/>
  <section className='py-16 bg-white '> 
<div className='container' >
  <div className='free shipping w-full py-2 p-4 border border-[#ff5252] flex items-center justify-between'>
    <div className='col1 flex items-center rounded-md gap-4 mb-5'>
    <FaShippingFast  className='text-[50px]'/>
    <span className='text-[20px] font-bold uppercase'>Free Shipping</span>
    </div>


<div className='col2'>
  <p className='mb-0 font-[500]'>Free Dilvery Now On Your First Order and over $200</p>

</div>
<p className='font-bold text-[25px]'>-Only $200*</p>
  </div>
<AdsBannerSlider />
</div>
  </section>
  <br /><br />
  <br />
  </>
  )
}

export default Home