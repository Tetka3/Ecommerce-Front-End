import "./itemCard.scss";

const ItemCard = ({ item }) => {
  return (
    
        <div className="item" key={item.id}>
            {item.cover && <img src={item.cover} alt="card" className="imgcard"/>}
            <p>{item.title}</p>
            <p>{item.description}</p>
        </div>
    
  )
}

export default ItemCard