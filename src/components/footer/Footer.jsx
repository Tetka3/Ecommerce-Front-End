import "./footer.scss";
import { Link } from "react-router-dom"
import bank from "../../assets/bank.jpeg";
import master from "../../assets/master.png";
import visa from "../../assets/visa.jpeg";
import paypal from "../../assets/paypal.png";
import skrill from "../../assets/skrill.png";

const Footer = () => {
  return (
    <div className="footer">
        <p>Useful Links</p>
        <div className="links">
          <li><Link to="/blogs" style={{textDecoration: 'none'}}>Blogs</Link></li>
          <li><Link to="/about" style={{textDecoration: 'none'}}>About</Link></li>
          <li><Link to="/investors" style={{textDecoration: 'none'}}>Investor's Relations</Link></li>
        </div>
        <div className="address">
          <div className="contact">
            <Link to="/" style={{textDecoration: 'none'}}><h3>ShoppingFy</h3></Link>        
            <p>Address</p>
            <p>Nairobi, Kenya</p>
            <p>Cell: +254 720 035 176</p>
            <p>Email: njematitus@gmail.com</p>
          </div>
          <div className="payment">
            <span>Payment Methods</span>
            <img src={bank} alt="bank"/>
            <img src={master} alt="mastercard"/>
            <img src={visa} alt="visa"/>
            <img src={paypal} alt="paypal"/>
            <img src={skrill} alt="skrill"/>
          </div>    
        </div>
        
    </div>
  )
}

export default Footer