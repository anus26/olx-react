import React from 'react'
import SideBar from '../../Components/SideBar'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

const ProductListing = () => {
  return (
    <section className='py-6 '>
        <div className='container'>
        <div role="presentation" onClick={handleClick}>
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
        <div  className='bg-white p-3 mt-4'>

        <div className='container flex  gap-3 '>
             <div className='sidewrapper w-[20%] h-full bg-white p-3'>
                <SideBar/>

             </div>
        </div>
        </div>
    </section>
  )
}

export default ProductListing