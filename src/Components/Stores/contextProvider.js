import { useState ,useEffect} from "react";

import CartContext from "./cartContext";
const ContextProvider = (props) => {
  const [CartItems, setCartItems] = useState([]);
  const [StoreItems, setStoreItems] = useState([]);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [Qty, setQty] = useState(0);
  const initialToken=localStorage.getItem('token'); 
  const [token, setToken] = useState(initialToken);
const [Email,setEmail]=useState('')

  const userIsLoggedIn = !!token;
  console.log(userIsLoggedIn,token)
const loginHandler = (token,email) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem('token',token)
    // window.location.href = "/profile";
    setTimeout(()=>{
        localStorage.removeItem('token');
        setToken(null)
    },30000)
    
  };
  const convertedMail=Email.replace(/[^a-zA-Z0-9]/g, "");
   useEffect(() => {
      fetch(`https://crudcrud.com/api/46717aaea5b1459690fc3d22aaa3f90e/cart${convertedMail}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // console.log(typeof data[0].UpdatedAmount);
          // return cartctx.addItem(
         
              setCartItems(data)
              // return ;
            
          // );
        });
    }, []);
  const logoutHandler = () => {
    setToken(null);
 
    localStorage.removeItem('token')
    console.log('i am logout')
  };
  const addItemToCart = (item) => {
    // IF ITEM EXIST IN THE CART
    // [ { title: "Colors",
    //     price: 100,
    //     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    //     quantity: 2, }, ];
    fetch(`https://crudcrud.com/api/46717aaea5b1459690fc3d22aaa3f90e/cart${convertedMail}`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
        },
        body:JSON.stringify({product_id: item.id })
        
    } ) .then((res) => res.json())
        .then((data) => console.log(data));
    
    const finditemIndex = CartItems.findIndex(
      (each) => each.item.title === item.title
    );
    if (finditemIndex !== -1) {
      let copy = CartItems;
    
        copy[finditemIndex].quantity += 1;
    
      //   console.log(existingItem)
      setCartItems(copy);
    } else {
      //IF ITEM DOES NOT EXIST IN THE CART
      const obj = { item: item,quantity:1 };
      setCartItems([...CartItems, obj]);
    }
    setTotalPrice((prevTotal) => (prevTotal += item.price));
    setQty((Qty) => (Qty += 1));
    // UPDATING STORE
    // const index = StoreItems.indexOf(item);
    // let copy = StoreItems
    // let updatedCart = state.item.map((curElem) => {
    //   if (curElem.id === action.payload) {
    //     return { ...curElem, quantity: curElem.quantity + 1 };
    //   }
    //   return curElem;
    // });
    // setStoreItems(copy);
  };

  const addItemToStore = (item) => {
    setStoreItems([...StoreItems, item]);
  };


  const finalContext = {
    CartItems: CartItems,
    TotalPrice: TotalPrice,
    AddItems: addItemToCart,
    StoreItems: StoreItems,
    AddItemsToStore: addItemToStore,
    TotalQuantity: Qty,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <CartContext.Provider value={finalContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default ContextProvider;
