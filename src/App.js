import Store from "./Components/Store";
import Cart from "./Components/Cart";
import CartContext from "./Components/Stores/contextProvider";
import { useState } from "react";

import { NavLink,Link, Route, BrowserRouter, Routes,Navigate } from "react-router-dom";
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import Navbar from './Components/UI/Navbar'
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
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/cart" element={<Cart/>} />
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
