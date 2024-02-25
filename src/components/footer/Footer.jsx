import "./footer.scss";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <p>Useful Links</p>
        <div className="links">
          <li><Link to="/blogs" style={{textDecoration: 'none'}}>Blogs</Link></li>
          <li><Link to="/about" style={{textDecoration: 'none'}}>About</Link></li>
          <li><Link to="/investors" style={{textDecoration: 'none'}}>Investor's Relations</Link></li>
        </div>
        <div className="contact">
          <h3>ShoppingFy</h3>
          <p>Address</p>
        </div>
        
    </div>
  )
}

export default Footer