import React, { createContext, useState } from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import ProductListing from './pages/ProductListing'
import ProductsDetails from './pages/ProductsDetails'
import Footer from './Components/Footer';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const MyContext =createContext()
const App = () => {
  const [openProducts, setOpenProducts] = useState(false);

  const handleClickOpenprouducts = () => {
    setOpenProducts(true);
  };

  const handleClose = () => {
    setOpenProducts(false);
  };
const showModal=()=>{
setOpenProducts(true)
}



  const values={
showModal,
  }
  return (
<>

    <div>
      
      <BrowserRouter>
      <MyContext.Provider value={values}>

     <Header/>
<Routes>
  <Route path="/" excat={true} element={<Home />} />
    
  
  <Route path="/productListing" excat={true} element={<ProductListing />} />
  <Route path="/product" excat={true} element={<ProductsDetails />} />
</Routes>
<Footer/>
      </MyContext.Provider>
      </BrowserRouter>
    </div>

    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpenprouducts}>
         
      </Button>
      <Dialog
        open={openProducts}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  
</>
  )
}

export default App