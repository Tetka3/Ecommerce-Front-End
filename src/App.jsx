import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import AddToCart from "./pages/addToCart/AddToCart";
import Product from "./pages/product/Product";
import About from "./pages/about/About";
import Investors from "./pages/investors/Investors";
import Blogs from "./pages/blogs/Blogs";

function App() {
  

  return (
    <>    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/add to cart" element={<AddToCart />}/>
        <Route path="/product/:id" element={<Product />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/investors" element={<Investors />}/>
        <Route path="/blogs" element={<Blogs/>}/>        
      </Routes>
    </Router>      
    </>
  )
}

export default App
