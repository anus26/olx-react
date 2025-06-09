import React, { createContext, useState } from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import { MdOutlineShoppingCart } from 'react-icons/md'
import { IoMdGitCompare } from 'react-icons/io'
import { CiHeart } from 'react-icons/ci'
import { FaXTwitter } from "react-icons/fa6";
export const MyContext = createContext()

const App = () => {
  const [openProducts, setOpenProducts] = useState(false)

  const showModal = () => {
    setOpenProducts(true)
  }

  const handleClose = () => {
    setOpenProducts(false)
  }

  const values = {
    showModal
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
    </>
  )
}

export default App
