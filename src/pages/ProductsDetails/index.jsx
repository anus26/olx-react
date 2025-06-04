import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ProductZoom from '../../Components/ProductZoom';
const ProductsDetails = () => {



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
         <div className='ProductZoom w-[90%] h-[90vh] overflow-hidden'>
<ProductZoom/>
         </div>
          </div>
             </section>
             </>
  )
}

export default ProductsDetails