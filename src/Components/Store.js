import React from "react";
import { useContext } from "react";
import  classes from"./Store.module.css";
import CartContext from "./Stores/cartContext";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
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

function Cart() {
  const crtctx=useContext(CartContext)
  return (
    <React.Fragment>
      <h1 className={classes.heading}>Store</h1>
      <div className={classes.items}>
        {productsArr.map((item) => (
          

          <div key={Math.random()}  className={classes.child}>
            <img className="img" loading="lazy" src={item.imageUrl} alt={item.title}></img>
       
            <NavLink to={`/products/${item.title}`}>   <h3>{item.title}</h3> </NavLink>
         
            <div className={classes.btn}>
             <div> <h4>${item.price}</h4></div>
             <div>  <Button className="btn btn-secondary" onClick={()=>crtctx.AddItems(item)}>Add to cart</Button></div>
            </div>
          </div>
        )
        )}
      </div>
    </React.Fragment>
  );
}

export default Cart;
