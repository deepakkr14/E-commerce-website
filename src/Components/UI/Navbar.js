import React from 'react'
import { useContext } from "react";
import CartContext from "../Stores/cartContext";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav, Button,Badge} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const Navigation = (props) => {
  const crtctx=useContext(CartContext)
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/home">Generic</Navbar.Brand>
        <Nav className="justify-content-center md flex-grow-1 pe-2">
        <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
        <Nav.Link as={NavLink} to="/">Store</Nav.Link>
        <Nav.Link as={NavLink} to="/cart">Cart</Nav.Link>
        <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
        <Nav.Link as={NavLink} to="/addMovie">Add Movies</Nav.Link>
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Store</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
           
        </Nav>

        <Button className="btn-success" onClick={props.openCart}>
          <i className="bi bi-cart3"><Badge bg="success">{crtctx.TotalQuantity}</Badge></i> My Cart
        </Button>
      </Container>
    </Navbar>
  );
};

export default Navigation;
