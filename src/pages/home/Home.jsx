import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import Pagination from "../../components/pagination/Pagination";
import "./home.scss";
import { useState, useEffect } from 'react';
import axios from "axios";
import ItemsList from "../../components/itemsList/ItemsList";

const Home = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
    

    useEffect (() => {
        const fetchAllItems = async () => {
            try{
                 const res = await axios.get("http://localhost:8800/items")
                 setItems(res.data)
                 
            }catch(err){
                console.log(err)
            }
        }
        fetchAllItems()
    }, [])

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = items.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="home">
        <Navbar />
        <Hero />
        <ItemsList items={currentPosts} />        
        <Pagination totalPosts={items.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
        />       
        <Footer />
    </div>
  )
}

export default Home