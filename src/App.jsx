import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"

function App() {
  

  return (
    <>    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>

      </Routes>
    </Router>
      
    </>
  )
}

export default App
