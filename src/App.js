import Store from "./Components/Store";
import Cart from "./Components/Cart";
import Home from './Components/Home'
import Movies from './Components/Fetch'
import CartContext from "./Components/Stores/contextProvider";
import { useState } from "react";

import {  Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import Navbar from './Components/UI/Navbar'
import MovieAddForm from "./Components/MovieAddForm";
import ContactUs from "./Components/ContactUs";
export default function App() {
  const [cartOpen, setcartOpen] = useState(true);
  const openCart = () => {
    setcartOpen((prev) => !prev);
  };
  return (
    <CartContext>
      <BrowserRouter>
        {/* <Header openCart={openCart} /> */}
       {/*  {cartOpen && <Cart />}
        {!cartOpen && <Store />} */}
        {/* <NavLink
          to="/*"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "white",
          })}
        >
          Store
        </NavLink> */} 
        <Navbar openCart={openCart}/>
       
        <Routes>
          <Route path="/" element={<Store/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/addMovie" element={<MovieAddForm/>} />
          <Route path="/contactUs" element={<ContactUs/>} />
          
          {/* <Route path="/cart/:name" element={<Cart/>} /> */}
          {/* <Route path="/cart" element={<Navigate to='/'/>} /> */}
        </Routes>
        {/* <Store/> */}
        {/* <Cart/> */}
        {/* <AboutUs /> */}
      </BrowserRouter>
    </CartContext>
  );
}
