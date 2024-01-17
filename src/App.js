import Store from "./Components/Store";
import Cart from "./Components/Cart";
import CartContext from "./Components/Stores/contextProvider";
import {useState} from 'react'
import Header from "./Components/Header";
export default function App() {
const [cartOpen,setcartOpen]=useState(false)
  const openCart=()=>{
setcartOpen(prev=>!prev)
  }
  return (
    <CartContext>
      <Header  openCart={openCart}/>
      {cartOpen &&  <Cart />}
      {!cartOpen &&  <Store />}
    
     {/* <Store/> */}
     {/* <Cart/> */}
    </CartContext>
  );
}
