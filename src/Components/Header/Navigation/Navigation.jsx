import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router';
import { IoIosRocket } from "react-icons/io";
import CategoryPanel from './CategoryPanel';
import '../Navigation/Styles.css';
const Navigation = () => {
    const [isopencatpanel ,setIsOpenCatPanel]=useState(false)
    const openCategoryPanel=()=>{
        setIsOpenCatPanel(
  true
        )
    }
    const categories = [
        {
          name: "Bags",
          subcategory: [
            { name: "Men Bags" },
            { name: "Women Bags" }
          ],
        },
        {
          name: "Beauty",
          subcategory: [
            { name: "Facial Kit" }
          ],
        },
        {
            name: "Footwear",
            subcategory:[

                {name: "Men Footwear",
                    items:["shoes","slepr"]
                },{name: "Women Gokers"},{ name:"Boys shoes"}, {name:"Girls shoes"}
            ],
          },
          {
            name:"Groceries",
            subcategory:[
                {name:"Rice"},{name:"flour(Wheat)"},{name:"Sugar"} ,{name:"Cooking Oil"},{name:"Salt"}  
                ,{name:"Spice(masala)"} ,{name:"Lentils(daal)"} ,{name:"Sugar"} ,{name:"Tea"} ,{name:"Milk"},{name:"Egg"}  

            ]
          },
          {
            name:"Fashion",
            subcategory:[
                {name:"Men " ,items:["T-Shirts","Jeans","Casual Shirts"]},{name:"Women " ,items:["Handbags","Jewellery","Suit"]},{name:"Boys Fashion", items:["Tops","kurtis","Jeans"]} ,
            ]
          },
          {
            name:"Electronics",
            subcategory:[
                {name:"Smartphones",items:["Vivo","Apple","Sumsung","Andorid"]},{name:"Laptops",items:["ph","DELL","Thindpad","makbook"]},{name:"HadPhones",items:["buffer","Audoic"]} ,{name:"Television",items:["SonyTv","Pansonci","Dawlance"]}
            ]

          }

      ];
  return (
    <>
  <nav className='py-2'>
    <div className='container flex items-center  justify-end gap-8'>
        <div className='col_1 w-[20%] '>
     <Button className='!text-black gap-2 ' onClick={openCategoryPanel}><RiMenu2Fill  />Shop By Categories<FaAngleDown  className=' font-bold text-[13px] m1-auto'/></Button>
        </div>
        <div className='col_2 w-[65%]'>
 
       <ul className='flex gap-5 nav'>
    <li className='!list-none'>
        <Link to='/' className='link transition text-15px font-[500]'>Home</Link>
    </li>
  

        <ul className=" list-none   flex gap-3 ">
  {categories.map((item, index) => (
    <li key={index} className="relative group">
      <Link to="/" className="link transition text-15px font-[500]">{item.name}</Link>
      {item.subcategory && (
        <ul className=" submenu absolute top-[120%] left-0 min-w-[150px] bg-white shadow-md opacity-0 transition-all group-hover:opacity-100">
          {item.subcategory.map((subItem, subIndex) => (
            <li key={subIndex} className="relative group">
              <button className=" block w-full text-left text-20px  hover:bg-gray-200 px-3 py-2 text-gray-800">{subItem.name}</button>
            {subItem.items && (
                <ul className=' absolute submenu left-full top-0 min-w-150px bg-white  w-32 shadow-md opacity-0 transition-all group'>
                    {subItem.items.map((nestedItem,nestedIndex)=>(
            

                         <li className=' list-none ' key={nestedIndex} >
                         <Link to='/' className='block w-full px-3 py-2 hover:bg-gray-300 text-gray-900 '>
                         <Button className='!text-black w-full !text-left !justify-start'>{nestedItem}</Button>
                         </Link>
                         </li> 
                    ))}
                </ul>
            )}
            </li>
          ))}
        </ul>
      )}
    </li>
  ))}
</ul>
       </ul>
        </div>
       <div className='col_3 w-[15%]'>
<p className='text-[13px] font-[500] flex items-centeer gap-3 mb-0 mt-0'><IoIosRocket  className='text-[300%]
'/>
Free  Internatioal Shipping</p>
       </div>
        </div>

  </nav>
  <CategoryPanel  isopencatpanel={isopencatpanel} setIsOpenCatPanel={setIsOpenCatPanel}/>
</>
  )
}

export default Navigation
