import React from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
     <Header/>
<Routes>
  <Route path="/" excat={true} element={<Home />} />
</Routes>
      </BrowserRouter>
    </div>
  )
}

export default App