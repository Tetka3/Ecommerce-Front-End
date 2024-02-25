import "./itemCard.scss";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (    
      <div className="item" key={item.id}>
        {item.cover && <Link to={`/product/${item.id}`}><img src={item.cover} alt="card" /></Link>}
        <p>{item.title}</p>        
        <button><Link to={`/product/${item.id}`} style={{textDecoration:"none"}}>Shop Now</Link></button>       
      </div>    
  )
}

export default ItemCard