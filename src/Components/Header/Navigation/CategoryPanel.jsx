import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoClose } from "react-icons/io5";
import { FaFolderPlus } from "react-icons/fa";
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
            name: "Apparel",
            items: ["Smart Tablets", "Crepe T-Shirt", "Leather Watch", "Rolling Diamond"],
          },
          {
            name: "Apparel",
            items: ["Smart Tablets", "Crepe T-Shirt", "Leather Watch", "Rolling Diamond"],
          },
      ],
    },
    {
      name: "Electronics",
      subcategories: [
        {
          name: "Gadgets",
          items: ["Smartphone", "Laptop", "Headphones", "Gaming Console"],
        },
      ],
    },
  ];

  const toggleDrawer = (newOpen) => () => setIsOpenCatPanel(newOpen);

  return (
    <Drawer open={isopencatpanel} onClose={toggleDrawer(false)}>
      <Box sx={{ width: 250 }} role="presentation" className="categorypanel">
        <h3 className="p-3 text-[15px] font-[500] flex items-center justify-between">
          Shop by Category <IoClose onClick={toggleDrawer(false)} className="cursor-pointer text-[15px]" />
        </h3>
        <div className="scroll">
          <ul className="w-full">
            {categories.map((category, catIndex) => (
              <li key={catIndex} className="list-none flex items-center relative flex-col">
                <Button className="w-full !text-left !justify-start px-3 !text-black">
                  {category.name}
                </Button>
                {submenuIndex === catIndex ? (
                  <FiMinusSquare className="absolute top-3 right-5" onClick={() => setSubMenuIndex(null)} />
                ) : (
                  <FaFolderPlus className="absolute top-3 right-5" onClick={() => setSubMenuIndex(catIndex)} />
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
                          <FaFolderPlus
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
            ))}
          </ul>
        </div>
      </Box>
    </Drawer>
  );
};

export default CategoryPanel;
