import "./Header.css";
import { useContext } from "react";
import CartContext from "./Stores/cartContext";
import { Button,Badge } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {
  const crtctx=useContext(CartContext)
  return (
    <div className="head">
      <h1>
        Generic
        <Button className="btn-success" onClick={props.openCart}>
          <i className="bi bi-cart3"> <Badge bg="success">{crtctx.TotalQuantity}</Badge></i> My Cart
        </Button>
      </h1>
    </div>
  );
};

export default Header;
