import React, { useState } from 'react'
import { IconContext } from 'react-icons/lib'
import { Link } from 'react-router'
import { CgProfile } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaFirstOrder } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import Profile from '../../Components/Profile';
import MyList from '../../Components/MyList';
import MyAddress from '../../Components/MyAddresss';
import Order from '../../Components/Order';

const MyAccount = () => {
      const [click,setClick]=useState('')
      const [open,setOpen]=useState('')
        const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // local preview
    }
  };
  const getInitial=(name)=>{ return name ? name.charAt(0).toUpperCase() : '?';
  }
  const user={
      name:'Anus raza',
      email:"anusraza268@gmail.com"
  }

  return (
      <section className='flex overflow-hidden '>
        <div className='  m-6 '>
        <div className='border bg-white rounded-sm shadow-md w-72 h-60 m-5 items-center  relative  '>
             <div className='p-4 flex flex-col justify-center items-center'>
                  <label htmlFor="fileInput" className='cursor-pointer'>

    
    {image ? (
          <img
          src={image}
          alt={user}
          className='w-24 h-24 rounded-full object-cover'/>
      ):(
          <div className='w-24 h-24  rounded-full bg-purple-500 flex items-center justify-center text-white text-6xl font-bold'>
            {getInitial(user.name)}
          </div>  
      )
}
</label>
<input type="file" onChange={handleImageChange} className='hidden ' id='fileInput'/>
    </div>
           <h1  className='font-semibold text-xl ml-6 flex items-center justify-center'>My Account</h1>
           <p className='ml-3 justify-center flex'>{user.email}</p>
        </div>
        <div className='border bg-gray-100 rounded-sm shadow-md w-72 h-80 m-5 relative -mt-6   '> 

              <Link className=''>
<div className={` flex gap-3   hover:bg-gray-200  w-72   p-4 ${click ===  'profile'?'bg-white  border-l-4 border-primary  font-semibold':'hover:bg-gray-200'}`}
 onClick={()=>setClick('profile')}>

    <CgProfile className={`  text-xl duration-500 transition-all ${click === 'profile'? 'text-primary  ':''}`}
    onClick={()=>setClick('profile')} />
    MY Profile
</div>
    </Link>

      

          
      

 
      

       
<div className={` flex gap-3 hover:bg-gray-200 w-72 p-4 ${click === 'address'?' bg-white border-l-4 border-primary font-semibold' :'hover:bg-gray-200'}`}
onClick={()=>setClick('address')}>

    <CiLocationOn  className={`text-xl duration-500 transition-all ${click === 'address'? 'text-primary':''}`}
    onClick={()=>setClick('address')}/>  <Link>Address</Link>
</div>
     
<div className={` flex gap-3 hover:bg-gray-200 w-72 p-4 ${click === 'list'?' bg-white border-l-4 border-primary font-semibold' :'hover:bg-gray-200'}`}
onClick={()=>setClick('list')}>

    <CiHeart  className={`  text-xl duration-500 transition-all ${click === 'list'? 'text-primary  ':''}`}
    onClick={()=>setClick('list')} />  <Link>MY List</Link>
</div>
<div className={` flex gap-3 hover:bg-gray-200 w-72 p-4 ${click === 'order'?' bg-white border-l-4 border-primary font-semibold' :'hover:bg-gray-200'}`}
onClick={()=>setClick('order')}>

   <FaFirstOrder className={`  text-xl duration-500 transition-all ${click === 'order'? 'text-primary  ':''}`}
    onClick={()=>setClick('order')}  /> <Link>My  Order</Link>
</div>
<div className={` flex gap-3 hover:bg-gray-200 w-72 p-4 ${click === 'logout'?' bg-white border-l-4 border-primary font-semibold' :'hover:bg-gray-200'}`}
onClick={()=>setClick('logout')}>

   <IoMdLogOut className={`  text-xl duration-500 transition-all ${click === 'logout'? 'text-primary  ':''}`}
    onClick={()=>setClick('logout')} /> <Link>Logout</Link>
</div>

        </div>
        </div>
        <div className=' flex justify-center items-center  '>
            
{click === 'profile'  && <Profile/>}
        </div>
          <div className=' flex mt-11   '>

        {click === 'list'  && <MyList/>}    
          </div>
          <div className='flex mt-11'>
         {click === 'address' && <MyAddress/>}
          </div>
            <div className=' mt-10  '>
         {click === 'order' && <Order/>}
          </div>

      </section>
  )
}

export default MyAccount