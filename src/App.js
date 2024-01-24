import { useState, useContext, lazy, Suspense } from "react";
import context from "./Components/Stores/cartContext";

import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import Navbar from "./Components/UI/Navbar";
const Login = lazy(() => import("./Components/Login"));
const Store = lazy(() => import("./Components/Store"));
const ProductDetail = lazy(() => import("./Components/ProductDetail"));
const ContactUs = lazy(() => import("./Components/ContactUs"));
const Cart = lazy(() => import("./Components/Cart"));
const Home = lazy(() => import("./Components/Home"));
const Movies = lazy(() => import("./Components/Fetch"));
const AboutUs = lazy(() => import("./Components/AboutUs"));
const MovieAddForm = lazy(() => import("./Components/MovieAddForm"));

export default function App() {
  const contxt = useContext(context);
  const [cartOpen, setcartOpen] = useState(true);
  const openCart = () => {
    setcartOpen((prev) => !prev);
  };
  return (
    <BrowserRouter>
      <Navbar openCart={openCart} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/products"
            element={
              contxt.isLoggedIn ? <Store /> : <Navigate to="/login" replace />
            }
          />
          <Route path="/movies" element={<Movies />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path="/addMovie" element={<MovieAddForm />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/products/:name" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
