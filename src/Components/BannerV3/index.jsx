import React from 'react'
import "../BannerV3/style.css"
import { Link } from 'react-router-dom';
const Bannerv3 = (props) => {
  return (
    <div className='banner3 w-full overflow-hidden rounded-md group '>
   <img src={props.image} alt="" className='transition-all duration-150 group-hover:scale-105'/>
   <div className={`info absolute  top-0 ${props.info==="left"? 'left-0':'right-0'} w-[50%]  h-[100%] z-50`  }>
  <h2>Footewear on Bata</h2>
  <span>RS:399</span>
  <Link to="/">Shop Now</Link>
   </div>
    </div>
  )
}

export default Bannerv3