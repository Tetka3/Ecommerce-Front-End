import "./itemCard.scss";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (   
    <>
    <Link to={`/product/${item.id}`} style={{textDecoration:"none"}}><div className="item" key={item.id}>
        {item.cover && <img src={item.cover} alt="card" />}
        <p>{item.title}</p>        
        <button>Shop Now</button>       
      </div></Link>
      </>     
  )
}

export default ItemCard