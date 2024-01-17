import React from "react";
import CartProvider from "./Stores/cartContext";
import "./Cart.css";
import { useContext } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },
];
const Cart = () => {
  const cartctx=useContext(CartProvider)
  console.log(cartctx)
  return (
    <React.Fragment>
      {cartctx.CartItems.map(item=>{return(

        <Card className="OuterCard">
        <Card.Body>
          <Row>
            <Col xs={12} md={4}>
              <Card.Img src={item.item.imageUrl} />
            </Col>
            <Col xs={12} md={6}>
              
              <div>
                
                <Card.Title>{item.item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  ${item.item.price}
                </Card.Subtitle>
                
              </div>
              <Card.Text>
                Quantity:{item.quantity}
                <br />
                <Button className="btn btn-danger">Remove from cart</Button>
                {/* <Button className="btn btn-secondary">+</Button>
                <Button className="btn btn-primary"> -</Button> */}
              </Card.Text>
            </Col>
            
          </Row>
          
        </Card.Body>
      </Card>
)})}
    </React.Fragment>
  );
};

export default Cart;
