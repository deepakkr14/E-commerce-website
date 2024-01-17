import Store from "./Components/Store";
import Cart from "./Components/Cart";
import {useState} from 'react'
import Header from "./Components/Header";
export default function App() {

  const openCart=()=>{

  }
  return (
    <div>
     <Header/>
     {/* <Store/> */}
     <Cart/>
    </div>
  );
}
