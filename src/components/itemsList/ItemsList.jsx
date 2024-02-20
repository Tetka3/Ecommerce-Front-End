import ItemCard from "../itemCard/ItemCard";
import "./itemsList.scss";


const ItemsList = ({ items }) => {
  return (
    <div className="card">        
        {items.map((item) => (
            <ItemCard key={item.id} item={item} />
        )) }
    </div>
  )
}

export default ItemsList;

// const ItemCard = () => {
//   return ( <div> 
        // {items.map(item=>(
        //     <div className="item" key={item.id}>
        //         {item.cover && <img src={item.cover} alt="cover" /> }
        //         <h3>{item.title}</h3>
        //         <p>{item.description}</p> 
        //     </div>
        // )) } 
        {/* <div className="item">
            <img src={tetka} alt="card" className="imgcard"/>
            <p>This is my favorite book</p>
        </div> 
        <div className="item">
            <img src={tetka} alt="card" className="imgcard"/>
            <p>This is my favorite book</p>
        </div> 
        <div className="item">
            <img src={tetka} alt="card" className="imgcard"/>
            <p>This is my favorite book</p>
        </div>  
        <div className="item">
            <img src={tetka} alt="card" className="imgcard"/>
            <p>This is my favorite book</p>
        </div> 
        <div className="item">
            <img src={tetka} alt="card" className="imgcard"/>
            <p>This is my favorite book</p>
        </div>
        <div className="item">
            <img src={tetka} alt="card" className="imgcard"/>
            <p>This is my favorite book</p>
        </div> 
        <div className="item">
            <img src={tetka} alt="card" className="imgcard"/>
            <p>This is my favorite book</p>
        </div> 
        <div className="item">
            <img src={tetka} alt="card" className="imgcard"/>
            <p>This is my favorite book</p>
        </div>  
        <div className="item">
            <img src={tetka} alt="card" className="imgcard"/>
            <p>This is my favorite book</p>
        </div> 
        <div className="item">
            <img src={tetka} alt="card" className="imgcard"/>
            <p>This is my favorite book</p>
        </div>           */}
    // </div>
//   )
// }

// export default ItemCard;