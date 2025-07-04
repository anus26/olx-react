import React, { useState } from 'react';
import SideBar from '../../Components/SideBar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ProductsSlider from '../../Components/ProductsSlider';
import Button from '@mui/material/Button';
import { IoGrid } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductsSliderView from '../../Components/ProductsSliderView';

const ProductListing = () => {
  const [itemview ,setIsItemView]=useState('')
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleBreadcrumbClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  };

  return (
    <section className='py-6'>
      <div className='container'>
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

      <div className='bg-white p-3 mt-4'>
        <div className='container flex gap-3'>
          <div className='sidewrapper w-[20%] h-full bg-white p-3'>
            <SideBar />
          </div>

          <div className='rightcontent w-[80%]'>
            <div className='bg-slate-200 p-2 w-full mb-3 rounded-md flex items-center justify-between'>
              <div className='col1 flex items-center gap-3 itemViewAction'>
              <Button
  className={`!w-[40px] !h-[40px] !min-w-[40px] !text-black !rounded-full ${itemview === 'list' ? 'active' : ''}`}
  onClick={() => setIsItemView('list')}
>
  <RiMenu2Fill className='text-[rgba(0,0,0,0.7)]' />
</Button>

<Button
  className={`!w-[40px] !h-[40px] !min-w-[40px] !text-black !rounded-full ${itemview === 'grid' ? 'active' : ''}`}
  onClick={() => setIsItemView('grid')}
>
  <IoGrid className='text-[rgba(0,0,0,0.7)]' />
</Button>

                <span className='text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]'  >
                  There are 27 products
                </span>
              </div>

              <div className='col2 flex items-center justify-end ml-auto gap-3 pr-4'>
                <span className='text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]'>Sort by</span>
                <div>
                  <Button
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleMenuClick}
                    className='!bg-white !text-[12px] !text-[#000] !capitalize !border !border-[#000]'
                  >
                    Sales highest to lowest
                  </Button>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                  >
                    <MenuItem onClick={handleMenuClose} className='!bg-white !text-[12px] !text-[#000] !capitalize !border !border-[#000]'>Sales highest to lowest</MenuItem>
                    <MenuItem onClick={handleMenuClose} className='!bg-white !text-[12px] !text-[#000] !capitalize !border !border-[#000]'>Relavance</MenuItem>
                    <MenuItem onClick={handleMenuClose} className='!bg-white !text-[12px] !text-[#000] !capitalize !border !border-[#000]'>Name A to Z</MenuItem>
                    <MenuItem onClick={handleMenuClose} className='!bg-white !text-[12px] !text-[#000] !capitalize !border !border-[#000]'>Name Z to A</MenuItem>
                    <MenuItem onClick={handleMenuClose} className='!bg-white !text-[12px] !text-[#000] !capitalize !border !border-[#000]'>Price Low to high</MenuItem>
                    <MenuItem onClick={handleMenuClose} className='!bg-white !text-[12px] !text-[#000] !capitalize !border !border-[#000]'>Price high to low</MenuItem>
                  </Menu>
                </div>
              </div>
            </div>

            <div className={`grid ${itemview === 'grid' ? 'grid-cols-4 md:grid-cols-1' : 'grid-cols-1 md:grid-cols-1'} gap-4`}>
  {
    itemview === 'grid' ? (
      <ProductsSlider items={6} />
    ) : (
      <ProductsSliderView itemsPerSlide={6} />
    )
  }
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
