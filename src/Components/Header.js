import "./Header.css";
import { Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {
  return (
    <div className="head">
      <h1>
        Generic
        <Button className="btn-success" onClick={props.openCart}>
          <i className="bi bi-cart3"></i> My Cart
        </Button>
      </h1>
    </div>
  );
};

export default Header;
