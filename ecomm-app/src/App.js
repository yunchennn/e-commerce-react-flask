import './App.css';
import React,{useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from "./components/navbar";
import {Footer} from "./components/footer";
import{About} from"./pages/about/about"
import {Shop} from './pages/shop/shop'
import {Cart} from './pages/cart/cart'
import { Checkout } from './pages/checkout/checkout';
import { ShopContextProvider } from './context/shop-context';
import ScrollButton from './components/ScrollButton';

function App() {
  
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
          <ScrollButton/>
          <Footer/>
        </Router>

      </ShopContextProvider>
      
    </div>
    
  );
}

export default App;
