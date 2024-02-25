import "./login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {

  const [login, setLogin] = useState({
    username: "",
    email: "",
    password: "",    
});

const navigate = useNavigate()

const handleChange = (e) => {
  setLogin((prev) => ({...prev, [e.target.name]: e.target.value}))
}

const handleClick = async (e) => {
  e.preventDefault()
  try{
      await axios.post("http://localhost:8800/items", login)
      navigate("/")
  }catch(err){
      console.log(err)
  }
}


  return (
    <div className="login">
      <div className="inputs">
        <label>Username</label>
        <input type="text" onChange={handleChange} name='username'/>
        <label>E-mail</label>
        <input type="text" onChange={handleChange} name='email'/>
        <label>Password</label>
        <input type="password" onChange={handleChange} name='password'/>        
        <button onClick={handleClick}>Login</button> 
      </div>       
    </div> 
  )
}

export default Login