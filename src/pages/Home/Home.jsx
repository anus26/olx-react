import React from 'react'
import HomeSlider from '../../Components/HomeSlider'
import HomeCatSlider from '../../Components/HomeCatSlider'
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from '../../Components/AdsBannerSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from '../../Components/ProductsSlider';
import BlogItems from '../../Components/BlogItems';

import HomeSliderV2 from '../../Components/HomeSliderV2';
import Bannerv3 from '../../Components/BannerV3';
const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {ikl.
    setValue(newValue);
  };
  return (
  <>
  <HomeSlider/>
 
  <HomeCatSlider/>
  

<section className='bg-white py-4 '>
  <div className='container'>
    <div className='flex items-center justify-between'>
      <div className='leftsec'>
        <h2 className='text-[22px] font-[600]'>Popular product</h2>
        <p>Do not miss current offes until   the end of Marach</p>

      </div>
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{
          '& .MuiTab-root': {
            color: '#aaa', // unselected tab color
          },
          '& .MuiTab-root.Mui-selected': {
            color: '#ff5252 ', // selected tab text color
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#ff5252 ', // underline color
          },}}
      >
        <Tab label="Fashion" />
        <Tab label="Electronics" />
        <Tab label="Bags" />
        <Tab label="Footwear" />
        <Tab label="Jewellery" />
        <Tab label="Wellenes" />
        <Tab label="Grociries" />
      </Tabs>
    </Box>

    </div>
<ProductsSlider items={6} />

  </div>
</section>


<section className='py-6'>
    
    <div className='container flex items-center gap-5'>
      <div className='part1 w-[70%]'>
  <HomeSliderV2/>
      </div>
      <div className='part2 w-[30%] flex items-center gap-3 justify-center flex-col'>
            <Bannerv3 image="./images/13.jpg" title="Footwear on Bata" price="399" info="right"/>
            <Bannerv3 image="./images/14.jpg" title="Footwear on Bata" price="399" info="left"/>
          </div>
  
    </div>
    </section>


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

  <section className='bg-white py-4'>
  <div className='container'>
    <div className='flex items-center justify-between'>
      <div className='leftsec'>
        <h2 className='text-[22px] font-[600]'>Popular product</h2>
        <p>Do not miss current offes until   the end of Marach</p>

      </div>
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{
          '& .MuiTab-root': {
            color: '#aaa', // unselected tab color
          },
          '& .MuiTab-root.Mui-selected': {
            color: '#ff5252 ', // selected tab text color
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#ff5252 ', // underline color
          },}}
      >
        <Tab label="Fashion" />
        <Tab label="Electronics" />
        <Tab label="Bags" />
        <Tab label="Footwear" />
        <Tab label="Jewellery" />
        <Tab label="Wellenes" />
        <Tab label="Grociries" />
      </Tabs>
    </Box>

    </div>
<ProductsSlider items={6} />

  </div>
</section>
<section className='bg-white py-4'>
  <div className='container'>
    <div className='flex items-center justify-between'>
      <div className='leftsec'>
        <h2 className='text-[22px] font-[600]'>Popular product</h2>
        <p>Do not miss current offes until   the end of Marach</p>

      </div>
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{
          '& .MuiTab-root': {
            color: '#aaa', // unselected tab color
          },
          '& .MuiTab-root.Mui-selected': {
            color: '#ff5252 ', // selected tab text color
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#ff5252 ', // underline color
          },}}
      >
        <Tab label="Fashion" />
        <Tab label="Electronics" />
        <Tab label="Bags" />
        <Tab label="Footwear" />
        <Tab label="Jewellery" />
        <Tab label="Wellenes" />
        <Tab label="Grociries" />
      </Tabs>
    </Box>

    </div>
<ProductsSlider items={6} />

  </div>
</section>
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
  <section className='bg-white py-4'>
  <div className='container'>
    <div className='flex items-center justify-between'>
      <div className='leftsec'>
        <h2 className='text-[22px] font-[600]'>Popular product</h2>
        <p>Do not miss current offes until   the end of Marach</p>

      </div>
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{
          '& .MuiTab-root': {
            color: '#aaa', // unselected tab color
          },
          '& .MuiTab-root.Mui-selected': {
            color: '#ff5252 ', // selected tab text color
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#ff5252 ', // underline color
          },}}
      >
        <Tab label="Fashion" />
        <Tab label="Electronics" />
        <Tab label="Bags" />
        <Tab label="Footwear" />
        <Tab label="Jewellery" />
        <Tab label="Wellenes" />
        <Tab label="Grociries" />
      </Tabs>
    </Box>

    </div>
<ProductsSlider items={6} />

  </div>
</section>
  <section className='py-5 bg-white banneritems'>
    <div className='container' >
      <h1 className='text-[20px] font-[500]'>From the Blog</h1>
 <Swiper

        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
          <BlogItems/></SwiperSlide>
      
      <SwiperSlide className=''>
          <BlogItems/></SwiperSlide>
      <SwiperSlide className=''>
          <BlogItems/></SwiperSlide>
      <SwiperSlide className=''>
          <BlogItems/></SwiperSlide>
       <SwiperSlide className=''>
       <BlogItems/></SwiperSlide>
   <SwiperSlide className=''>
   <BlogItems/></SwiperSlide>
 </Swiper>
    </div>
  </section>
   
  
  
  </>
  )
}

export default Home