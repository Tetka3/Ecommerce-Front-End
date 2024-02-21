import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import AddToCart from "./pages/addToCart/AddToCart";

function App() {
  

  return (
    <>    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/add to cart" element={<AddToCart />}/>
      </Routes>
    </Router>      
    </>
  )
}

export default App
