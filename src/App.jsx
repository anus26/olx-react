import React from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import ProductListing from './pages/ProductListing'
import Footer from './Components/Footer';
const App = () => {
  return (
    <div>
      <BrowserRouter>
     <Header/>
<Routes>
  <Route path="/" excat={true} element={<Home />} />
    
  
  <Route path="/productListing" excat={true} element={<ProductListing />} />
</Routes>
<Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App