import Store from "./Components/Store";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Movies from "./Components/Fetch";
import { useState,useContext } from "react";
import  context from './Components/Stores/cartContext'
import { Route, BrowserRouter, Routes ,Navigate} from "react-router-dom";
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/UI/Navbar";
import MovieAddForm from "./Components/MovieAddForm";
import ContactUs from "./Components/ContactUs";
import ProductDetail from "./Components/ProductDetail";
import Login from "./Components/Login";
export default function App() {
  const contxt =useContext(context)
  const [cartOpen, setcartOpen] = useState(true);
  const openCart = () => {
    setcartOpen((prev) => !prev);
  };
  return (
   
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
        <Navbar openCart={openCart} />

        <Routes>
          <Route path="/products" element={contxt.isLoggedIn ? <Store /> : <Navigate to="/login" replace />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path="/addMovie" element={<MovieAddForm />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/products/:name" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />

          {/* <Route path="/cart/:name" element={<Cart/>} /> */}
          {/* <Route path="/cart" element={<Navigate to='/'/>} /> */}
        </Routes>
        {/* <Store/> */}
        {/* <Cart/> */}
        {/* <AboutUs /> */}
      </BrowserRouter>
  
  );
}
