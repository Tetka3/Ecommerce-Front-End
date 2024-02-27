import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">
        
        </div>
        <div className="right">
            <div className="first">
                <Link to="/" style={{textDecoration: "none"}}><span>ShoppingFy</span></Link>
            </div>
            <div className="second">
                <Link to="/register" style={{textDecoration: "none"}}><li>Register</li></Link>
                <span>|</span>
                <Link to="/login" style={{textDecoration: "none"}}><li>Log In</li></Link>
                <span>|</span>
                <Link to="/add to cart" style={{textDecoration: "none"}}><li>Cart</li></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar