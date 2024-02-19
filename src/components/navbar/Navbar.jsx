import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">
            <span>E-Commerce</span>
        </div>
        <div className="right">
            <div className="first">
                <select>
                    <option>Categories</option>
                    <option>Men</option>
                    <option>Women</option>
                    <option>Kids</option>
                </select>
            </div>
            <div className="second">
                <Link to="/cart" style={{textDecoration: "none"}}><li>Add To Cart</li></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar