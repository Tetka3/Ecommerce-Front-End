import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero" >
        <div className="search">
            <input type="text" placeholder="Search an item here..." />
        </div>
        <div className="text" >
            <h2>Shop With Us Now For Amazing deals</h2>
        </div>  
    </div>
  )
}

export default Hero