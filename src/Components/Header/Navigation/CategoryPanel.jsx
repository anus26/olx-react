import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoClose } from "react-icons/io5";
import { AiTwotonePlusSquare } from "react-icons/ai";
import { FiMinusSquare } from "react-icons/fi";
import { Link } from 'react-router-dom';

const CategoryPanel = ({ isopencatpanel, setIsOpenCatPanel }) => {
  const [submenuIndex, setSubMenuIndex] = useState(null);
  const [innerSubMenuIndex, setInnerSubMenuIndex] = useState(null);

  const categories = [
    {
      name: "Fashion",
      subcategories: [
        {
          name: "Apparel",
          items: ["Smart Tablets", "Crepe T-Shirt", "Leather Watch", "Rolling Diamond"],
        },
        {
            name: "OuterWear",
            items: ["Wooden Chair", "Sneakers Shoes", "Purse", "Xbox Controller"],
          },

          
          
          {
              name: "Footwear",
              items: ["Leather Watch", "Cabinet Table", "Headphones", "Sunglasses"],
            },
        ],
    },
    {
      name:"Jewellery",
      subcategories: []
    },
    {
        name:"Watchs",
        subcategories: []
      },
      {
        name:"Cosmetics",
        subcategories: []
      },
      {
        name:"Accessories",
        subcategories: []
      },
      {
        name:"Electronic",
        subcategories: []
      },
      {
        name:"Furniture",
        subcategories: []
      },
      {
        name:"Sunglasses",
        subcategories: []
      },
      {
        name:"Rolling Diamond",
        subcategories: []
      },
      {
        name:"Xbox Controller",
        subcategories: []
      },
      {
        name:"Leather Watch",
        subcategories: []
      },
      {
        name:"Smart Tablet",
        subcategories: []
      },
      {
        name:"Purse",
        subcategories: []
      },

    

  ];


  const toggleDrawer = (newOpen) => () => setIsOpenCatPanel(newOpen);

  return (
    <Drawer open={isopencatpanel} onClose={toggleDrawer(false)}>

      <Box sx={{ width: 250 }} role="presentation" className="categorypanel">
        <h3 className="p-3 text-[15px] font-[500] flex items-center justify-between">
          Shop by Category <IoClose onClick={toggleDrawer(false)} className="cursor-pointer text-[20px]" />
        </h3>
        <div className="scroll py-3  border-t-[1px] border-gray-250 border-b-[1px]">
          <ul className="w-full p-5">
            {categories.map((category, catIndex) => (
              <li key={catIndex} className="list-none flex items-center relative flex-col">
                 
                <Button className="w-full !text-left !justify-start px-3 !text-black">
                  {category.name}
                </Button>
                {category.subcategories.length > 0 &&(
                submenuIndex === catIndex ? (
                  <FiMinusSquare className="absolute top-3 right-5" onClick={() => setSubMenuIndex(null)} />
                ) : (
                  <AiTwotonePlusSquare className="absolute top-3 right-5" onClick={() => setSubMenuIndex(catIndex)} />
                )
                )}

                {submenuIndex === catIndex && (
                  <ul className="submenu w-full pl-3">
                    {category.subcategories.map((sub, subIndex) => (
                      <li key={subIndex} className="list-none relative">
                        <Button className="w-full !text-left !justify-start px-3 !text-black">{sub.name}</Button>
                        {innerSubMenuIndex === subIndex ? (
                          <FiMinusSquare
                            className="absolute top-3 right-5"
                            onClick={() => setInnerSubMenuIndex(null)}
                          />
                        ) : (
                          <AiTwotonePlusSquare
                            className="absolute top-3 right-5"
                            onClick={() => setInnerSubMenuIndex(subIndex)}
                          />
                        )}

                        {innerSubMenuIndex === subIndex && (
                          <ul className="inner_submenu w-full pl-3">
                            {sub.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="list-none relative mb-2">
                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                  {item}
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
            )
            
            )
            
        }
          </ul>

        </div>
        
      </Box>
    </Drawer>
  );
};

export default CategoryPanel;
