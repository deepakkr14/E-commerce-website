import React from "react";
import CartProvider from "./Stores/cartContext";
import "./Cart.css";
import { useContext } from "react";
import { Button, Card, Row, Col, Form, InputGroup } from "react-bootstrap";
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
  const cartctx = useContext(CartProvider);
  console.log(cartctx);
  return (
    <React.Fragment>
      {cartctx.CartItems.map((item) => {
        return (
          <Card  className="OuterCard ">
            <Card.Body>
              <Row>
                <Col xs={12} md={4}>
                  <Card.Img src={item.item.imageUrl} />
                </Col>
                <Col xs={12} md={2}>
                  <div>
                    <Card.Title>{item.item.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      ${item.item.price}
                    </Card.Subtitle>
                  </div>
                  <Card.Text>
                    <Button className="btn btn-danger btn-sm">
                      Remove from cart
                    </Button>
                    <Row className="quantity">
                      <InputGroup size="sm" className="mt-1 ">
                        <Button variant="outline-secondary  btn-sm ">+</Button>

                        <Form.Control
                          placeholder={` Quantity: ${item.quantity}`}
                          disabled
                        />
                        <Button variant="outline-secondary  btn-sm">-</Button>
                      </InputGroup>
                    </Row>
                  </Card.Text>
                </Col>
                <Col>
                
                </Col>
              </Row>
            </Card.Body>
          </Card>
        );
      })}
    </React.Fragment>
  );
};

export default Cart;
