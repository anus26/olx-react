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

                {name: "Wooden Chair"},{name: "Sneakers Shoes"},{ name:"Purse"}, {name:"Xbox Controller"}
            ],
          },
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
    <li className='list-none relative'>
        <Link to='/' className='link transition text-15px font-[500]'>Groceries</Link>
        <div className='submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white
    shadow-md  opacity-0 trasnition-all'>

        <ul>
            <li className='list-none ' >
                <Link to='/' className='w-full'>
  
                <Button className='!text-black w-full !text-left !justify-start'>Rice</Button>
 

   
                </Link>
                

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Flour (wheat)</Button>

                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Sugar</Button>

                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>cooking oil</Button>

                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>salt</Button>

                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>spice (masala)</Button>

                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>lentils (daal)</Button>

                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Tea</Button>

                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Milk</Button>

                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>EGG</Button>

                </Link>

            </li>
    
          
           
        </ul>

    </div>
    </li>
    <li className='list-none relative '>
        <Link to='/' className='link transition text-15px font-[500] '>Fashion</Link>
      
    <div className='submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white
    shadow-md  opacity-0 trasnition-all'>

        <ul>
            <li className='list-none ' >
                <Link to='/' className='w-full'>
  
                <Button className='!text-black w-full !text-left !justify-start'>Men</Button>
                <div className='submenu absolute top-[0%] ml-0 left-[100%] min-w-[150px] bg-white
    shadow-md  opacity-0 invisible  group-hover:opacity-100 group-hover:visible trasnition-all'>

        <ul>
            <li className='list-none ' >
                <Link to='/' className='w-full'>
  
                <Button className='!text-black w-full !text-left !justify-start '>T-Shirts</Button>
   

   
                </Link>
                

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Jeans</Button>
                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Casual Shirts</Button>

                </Link>
            </li>
         
           
        </ul>

    </div>

   
                </Link>
                

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Woman</Button>
                <div className='submenu absolute  left-[100%] mt-9 min-w-[150px] bg-white
    shadow-md  opacity-0 trasnition-all'>

        <ul>
            <li className='list-none ' >
                <Link to='/' className='w-full'>
  
                <Button className='!text-black w-full !text-left !justify-start '>HandBags</Button>
   

   
                </Link>
                

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Heels</Button>
                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Jewellery</Button>

                </Link>
            </li>
         
           
        </ul>

    </div>
                </Link>

            </li>
           
            <li className='list-none '>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Girl</Button>
                <div className='submenu absolute top-[0%] mt-16 left-[100%] min-w-[150px] bg-white
    shadow-md  opacity-0 trasnition-all'>

        <ul>
            <li className='list-none ' >
                <Link to='/' className='w-full'>
  
                <Button className='!text-black w-full !text-left !justify-start '>Jeans</Button>
   

   
                </Link>
                

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Tops</Button>
                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Cosmestics</Button>

                </Link>
            </li>
         
           
        </ul>

    </div>
                </Link>

            </li>
          
           
        </ul>

    </div>
    </li>

    <li className='list-none relative'>
        <Link to='/' className='link transition text-15px font-[500]'>Electronics </Link>
        <div className='submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white
    shadow-md  opacity-0 trasnition-all'>

        <ul>
            <li className='list-none ' >
                <Link to='/' className='w-full'>
  
                <Button className='!text-black w-full !text-left !justify-start'>Smartphones</Button>
                <div className='submenu absolute top-[0%] ml-0 left-[100%] min-w-[150px] bg-white
    shadow-md  opacity-0 invisible  group-hover:opacity-100 group-hover:visible trasnition-all'>

        <ul>
            <li className='list-none ' >
                <Link to='/' className='w-full'>
  
                <Button className='!text-black w-full !text-left !justify-start '>Samsung</Button>
   

   
                </Link>
                

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>OPPO</Button>
                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Vivo</Button>

                </Link>
            </li>
         
           
        </ul>

    </div>

   
                </Link>
                

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Laptops</Button>
                <div className='submenu absolute  left-[100%] mt-9 min-w-[150px] bg-white
    shadow-md  opacity-0 trasnition-all'>

        <ul>
            <li className='list-none ' >
                <Link to='/' className='w-full'>
  
                <Button className='!text-black w-full !text-left !justify-start '>Thinkpads</Button>
   

   
                </Link>
                

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>DELL
                </Button>
                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>PH</Button>

                </Link>
            </li>
         
           
        </ul>

    </div>
                </Link>

            </li>
           
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>SmartWatches</Button>
                <div className='submenu absolute top-[0%] mt-16 left-[100%] min-w-[150px] bg-white
    shadow-md  opacity-0 trasnition-all'>

        <ul>
            <li className='list-none ' >
                <Link to='/' className='w-full'>
  
                <Button className='!text-black w-full !text-left !justify-start '>Qurtaz</Button>
   

   
                </Link>
                

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Rolex</Button>
                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Apple</Button>

                </Link>
            </li>
         
           
        </ul>

    </div>
                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Televisions</Button>
                <div className='submenu absolute top-[0%] mt-20 left-[100%] min-w-[150px] bg-white
    shadow-md  opacity-0 trasnition-all'>

        <ul>
            <li className='list-none ' >
                <Link to='/' className='w-full'>
  
                <Button className='!text-black w-full !text-left !justify-start '>Sony</Button>
   

   
                </Link>
                

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Germany</Button>
                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Pansonics</Button>

                </Link>
            </li>
         
           
        </ul>

    </div>
                </Link>

            </li>
          
           
        </ul>

    </div>
    </li>
    {/* <li className='list-none relative'>
        <Link to='/' className='link transition text-15px font-[500]'>Footwear</Link>
        <div className='submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white
    shadow-md  opacity-0 trasnition-all'>

        <ul>
            <li className='list-none ' >
                <Link to='/' className='w-full'>
  
                <Button className='!text-black w-full !text-left !justify-start'>Men</Button>
  

   
                </Link>
                

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>women</Button>
  
                </Link>

            </li>
           
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Kids shoes</Button>
  
                </Link>

            </li>
            <li className='list-none'>
            <Link to='/' className='w-full'>
                <Button className='!text-black w-full !text-left !justify-start'>Girl shoes</Button>
  
                </Link>

            </li>
          
           
        </ul>

    </div>
    </li>  */}

        {/* <Link to='/' className='link transition text-15px font-[500]'>Bags</Link> */}
        <ul className="list-none flex gap-2 ">
  {categories.map((item, index) => (
    <li key={index} className="relative group">
      <Link to="/" className="link transition text-15px font-[500]">{item.name}</Link>
      {item.subcategory && (
        <ul className=" submenu absolute top-[120%] left-0 min-w-[150px] bg-white shadow-md opacity-0 transition-all group-hover:opacity-100">
          {item.subcategory.map((subItem, subIndex) => (
            <li key={subIndex}>
              <button className=" block w-full text-left text-20px  hover:bg-gray-200 px-3 py-2 text-gray-800">{subItem.name}</button>
            </li>
          ))}
        </ul>
      )}
    </li>
  ))}
</ul>

 
    {/* <li className='list-none relative'>
    {category2.map((item,index)=>(
        <div key={index}>
            <Link to='/' className='link transition text-15px font-[500]'>{item.name}</Link>
            {item.subcategory2 &&(
            <ul className='submenu absolute top-[120%] left-0 min-w-[150px] bg-white shadow-md opacity-0 trasnition-all '>
                {item.subcategory2.map((subItem2,subIndex)=>(
                    <li key={subIndex}> 
                    <button className='text-20px text-gray-800'>{subItem2.name}</button>
                    </li>
                ))}
            </ul>
            )}
        </div>
    ))}
    </li> */}
    <li className='list-none'>
        <Link to='/' className='link transition text-15px font-[500]'>Jewellery</Link>
    </li>
       </ul>
        </div>
       <div className='col_3 w-[15%]'>
<p className='text-[13px] font-[500] flex items-centeer gap-3 mb-0 mt-0'><IoIosRocket  className='text-[300%]
'/>
Free  Internatioal Shipping</p>
       </div>
        </div>

  </nav>
  {/* category panel */}
  <CategoryPanel  isopencatpanel={isopencatpanel} setIsOpenCatPanel={setIsOpenCatPanel}/>
</>
  )
}

export default Navigation
