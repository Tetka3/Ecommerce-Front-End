import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home