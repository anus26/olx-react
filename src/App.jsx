import React, { createContext, useState } from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import ProductListing from './pages/ProductListing'
import ProductsDetails from './pages/ProductsDetails'
import Footer from './Components/Footer'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import ProductZoom from './Components/ProductZoom'
import { MdOutlineDelete, MdOutlineShoppingCart } from 'react-icons/md'
import { IoMdGitCompare } from 'react-icons/io'
import { CiHeart } from 'react-icons/ci'
import { FaXTwitter } from "react-icons/fa6";
import Login from './pages/Login'
import Register from './pages/Register'
import Drawer from '@mui/material/Drawer';
import { IoClose } from "react-icons/io5";
export const MyContext = createContext()

const App = () => {
  const [openCartPanel, setOpenCartPanel] = useState(false)
  const [openProducts, setOpenProducts] = useState(false)

  const showModal = () => {
    setOpenProducts(true)
  }
  const  toggleDrawer=(newopen)=>{
     setOpenCartPanel(newopen)
  }

  const handleClose = () => {
    setOpenProducts(false)
  }

  const values = {
    showModal,
    setOpenCartPanel
  }

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/productListing" exact element={<ProductListing />} />
            <Route path="/product" exact element={<ProductsDetails />} />
             <Route path="/login" exact element={<Login />} />
              <Route path="/register" exact element={<Register />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      {/* Product Modal Dialog */}
      <Dialog open={openProducts} onClose={handleClose} fullWidth maxWidth="md">
          <DialogActions>
          <Button onClick={handleClose} color="error">
         <FaXTwitter />
          </Button>
        </DialogActions>
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Section: Zoom Image */}
         
          <div className="md:w-1/2 p-4">
            <ProductZoom />
          </div>

          {/* Right Section: Product Details */}
          <div className="md:w-1/2 p-4">
            <h1 className="text-lg font-semibold mb-1">Embellished Sequinned Ready to Wear Saree</h1>
            <div className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Brand:</span> Tikhi Imli
            </div>

            <div className="flex items-center space-x-2 mb-2">
              <div className="rating rating-xs">
                {[...Array(5)].map((_, i) => (
                  <input key={i} type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">Review(1)</span>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <span className="line-through text-gray-500">Rs: 2450</span>
              <span className="font-semibold text-primary">Rs: 2500</span>
            </div>

            <div className="text-green-600 font-medium mb-2">Available in Stock: 5000 Items</div>

            <div className="text-sm text-gray-700 mb-3">Free Shipping (Est. Delivery Time 2-3 Days)</div>

            <div className="flex items-center gap-3 mb-4">
              <input type="number" min={1} defaultValue={1} className="w-20 h-10 border border-gray-400 rounded text-center" />
              <Button variant="contained" startIcon={<MdOutlineShoppingCart />}>
                Add to Cart
              </Button>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1 text-sm font-semibold cursor-pointer">
                <CiHeart className="text-lg" />
                Add to Wishlist
              </div>
              <div className="flex items-center gap-1 text-sm font-semibold cursor-pointer">
                <IoMdGitCompare className="text-lg" />
                Add to Compare
              </div>
            </div>
          </div>
        </div>

        

      </Dialog>

      <Drawer open={openCartPanel} onClose={() => toggleDrawer(false)} anchor="right">
  <div className="flex flex-col w-[350px]">
    {/* Header */}
    <div className="flex items-center justify-between py-3 px-4">
      <h1 className="font-semibold text-lg">Shopping (1)</h1>
      <IoClose className="text-[20px] cursor-pointer" onClick={() => toggleDrawer(false)} />
    </div>
    <div className="border-b border-gray-300"></div>

    {/* Cart Items */}
    <div className="overflow-y-auto max-h-[300px] px-3 pb-5">
      {[1, 2, 3].map((item, index) => (
        <div key={index} className="flex items-center border-b py-3 gap-3">
          <div className="w-[25%] h-[80px] overflow-hidden rounded-md">
            <img src="./images/1.jpg" alt="Product" className="object-cover w-full h-full" />
          </div>
          <div className="w-[75%] pr-2 relative">
            <h4 className="font-semibold text-base">Pakistan Army Zindabad</h4>
            <div className="flex items-center justify-between mt-2 text-sm">
              <span>Qty: <strong>2</strong></span>
              <span className="text-primary font-semibold">Rs: 45</span>
              <MdOutlineDelete className="text-[20px] text-gray-600 cursor-pointer hover:text-red-500 transition-all" />
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Totals Section */}
    <div className="border-t border-gray-300 mt-2 px-4 py-4 space-y-2 text-sm">
      <div className="flex justify-between">
        <h3>Subtotal (3 items)</h3>
        <span>Rs: 135</span>
      </div>
      <div className="flex justify-between">
        <h3>Shipping</h3>
        <span>Rs: 50</span>
      </div>
      <div className="flex justify-between font-semibold text-base border-t pt-2">
        <h3>Total</h3>
        <span>Rs: 185</span>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex justify-center gap-4 px-4 py-4 border-t border-gray-300">
      <button className="bg-primary text-white px-4 py-2 rounded hover:bg-white transition">Checkout</button>
      <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition">View Cart</button>
    </div>
  </div>
</Drawer>

    </>
  )
}

export default App
