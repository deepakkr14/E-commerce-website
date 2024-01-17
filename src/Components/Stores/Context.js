import React, { createContext, useContext, useReducer } from "react";
import reducer from "./Reducer";

// create a context
export const CartContext = createContext({
    item: [],
    totalAmount: 0,
    totalItems: 0,
    quantity: 0,
  });
const productsArr = [
    {
      title: "Colors",
  
      price: 100,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Colors",
  
      price: 100,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Colors",
  
      price: 100,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Colors",
  
      price: 100,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
  
    {
      title: "Black and white Colors",
  
      price: 50,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
  
    {
      title: "Yellow and Black Colors",
  
      price: 70,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
  
    {
      title: "Yellow and Black Colors",
  
      price: 70,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
  
    {
      title: "Blue Color",
  
      price: 100,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  
    {
      title: "Blue Color",
  
      price: 100,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
const initialState = {
  item: [],
  totalAmount: 0,
  totalItems: 0,
  quantity: 0,
};

const CartProvider = (Props) => {
  // inPlace of useState we will use the useReducer Hook
  // const [item, setItem] = useState(products);

  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  return (
    <>
      <CartContext.Provider
        value={{ ...state, clearCart, removeItem, increment, decrement }}>
      {Props.Children}
      </CartContext.Provider>
    </>
  );
};

// custom Hook
// export const useGlobalContext = () => {
//   return useContext(CartContext);
// };

export default CartProvider;