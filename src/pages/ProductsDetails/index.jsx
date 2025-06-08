import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ProductZoom from '../../Components/ProductZoom';
import Link from '@mui/material/Link';
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from '@mui/material/Button';
import { CiHeart } from "react-icons/ci";
import { IoMdGitCompare } from "react-icons/io";
import ProductsSlider from '../../Components/ProductsSlider';


const ProductsDetails = () => {



  const [activeTab ,setActiveTab]=useState("Description")
const handleBreadcrumbClick = (event) => {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
};
  return (
    <>

    <div  className='mb-5 pb-0'>
       <div className='container '>
            <div role="presentation" onClick={handleBreadcrumbClick}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  underline="hover"
                  sx={{ display: 'flex', alignItems: 'center' }}
                  color="inherit"
                  href="/"
                  className='link'
                >
                  <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  Home
                </Link>
                <Link
                  underline="hover"
                  sx={{ display: 'flex', alignItems: 'center' }}
                  color="inherit"
                  href="/"
                  className='link '
                >
                  <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  Fashion
                </Link>
              </Breadcrumbs>
            </div>
          </div>
    </div>
   <section  className='bg-white'>
    
          <div className='container flex gap-3'>
         <div className='ProductZoom w-[40%] h-full overflow-hidden'>
<ProductZoom/>

         </div>
               <div className='part-2  grow  m-10 w-[60%] '>
        <div className=''>
          <h1 className='w-full font-semibold text-lg  ' >Embellished Sequinned Ready to Wear Saree</h1>
          
          <div className='mt-1 flex gap-2'>
            <h4 className='font-medium'>
            <span className='font-normal text-slate-400'>Brands</span> : Tikhi Imli
            
            </h4>
            
            <div className="rating rating-xs mt-1">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
</div>
<h4>Review(1)</h4>

          </div>
        </div>
        <div className='mt-2 flex gap-2'>
          <h1><span className='line-through '>RS:2450</span> </h1>
          <h1 className='text font-semibold'><span>Rs:2500</span></h1>
          <h5>Available In Stock : <span className='text-green-500 font-semibold'>5000 Items</span></h5>
        </div>
          <h5 className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ab est iusto sequi perferendis ea non quisquam voluptate tenetur consequatur odio recusandae fuga esse fugiat alias, quibusdam maiores error vero. Qui consequatur aliquid nulla blanditiis . Voluptatibus sed repellat harum quas quis. Culpa, impedit cum.
          </h5>
          <div className='mt-2 flex '>
            <h5 className='font-medium'>Free Shipping (Est. Delivery Time 2-3 Days)</h5>

          </div>

          {/* input */}
          <div className='mt-2 flex gap-2 '>

          <input type="number"  className='w-20 mt-2 h-10 text-center border   border-gray-400  rounded' />
      
  <div className=' mt-2'>


        <Button  className='w-30 h-10 add gap-1' >
          <span><MdOutlineShoppingCart /></span>
  Add to Cart
</Button>
  </div>
          </div>
          {/* card */}

<div className='mt-8 flex gap-2 items-center'>
  
    <CiHeart className='text-lg' />

  <h1 className='font-semibold heart'>Add to Wishlist</h1>
 
  <h1 className='font-semibold heart flex gap-2'> 
    <IoMdGitCompare  className='text-lg' />
  Add to Compare</h1>
</div>     

      </div>
    </div>
{/* Description */}

    <div className='mt-3   '>
      <button onClick={()=>setActiveTab('description')} className={`heart ${activeTab ==="description"}`}>Description</button>
        <button onClick={()=>setActiveTab('reviews')} className={`reviews ${activeTab ==="reviews"}`} >
Reviews (1)</button>
      {activeTab === 'description' &&
      <div className='gap-4 mt-3'>

      <br />
      <p className='border border-gray-300 bg-white rounded-full p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error harum quis esse blanditiis nemo odio. Distinctio dolor pariatur commodi in illum dolorum architecto nihil, soluta minus itaque doloribus, amet ill
      </p>

      </div>
}
      <div  className=''>

          
        
      {activeTab === 'reviews' &&  
<div className='mt-3 rounded-md border border-gray-300  '>
<h1 className='font-semibold m-5 text-lg'>
  
Customer questions & answers
</h1>
{/* reviews text */} 
<div className='mt-3  m-5 flex gap-3 w-full  '>
  <img src="/public/images/1.jpg" alt=""  className='rounded-s-lg rounded-md w-20 h-10'/>
  <div className='flex-4  w-full'>

  <h3 className='font-semibold'>hòa nguyễn thị thu</h3>
  <span className='font-semibold'>2025-06-05</span>
  <p>great</p>
              <div className="rating rating-xs  mr-7  flex justify-end">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
</div>
  </div>

</div>
  <div className='border border-gray-200 mr-10 ml-10'></div>
{/* input */}
<div className='mt-5 m-5 text-lg   ' >
  <h1 className='font-semibold'>Add a review</h1>
  <input type="text" placeholder='write a review' className='w-full p-20  mt-3 border border-gray-300'/>
                <div className="rating rating-xs  flex mt-3">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
</div>
  <Button className='!mt-6 !bg-red-500 !text-white hover:!bg-black duration-300 transition-all'>Submit review </Button>

</div>

</div>

      }
      </div>



    </div>
  
    {/* Product api */}
    <div className='mt-3 '>
  <h1 className='font-semibold text-lg ml-3'>Related Products</h1>
<ProductsSlider  items={6} />  
  </div> 
         
             </section>
             </>


  )
}

export default ProductsDetails