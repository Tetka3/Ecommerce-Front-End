import "./register.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Register = () => {

  const [register, setRegister] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
});

const navigate = useNavigate()

const handleChange = (e) => {
  setRegister((prev) => ({...prev, [e.target.name]: e.target.value}))
}

const handleClick = async (e) => {
  e.preventDefault()
  try{
      await axios.post("http://localhost:8800/items/", register)
      navigate("/login")
  }catch(err){
      console.log(err)
  }
}

  return (
    <div className="register">
      <div className="inputs">
        <label>Username</label>
        <input type="text" onChange={handleChange} name='username' />
        <label>E-mail</label>
        <input type="text" onChange={handleChange} name='email' />
        <label>Password</label>
        <input type="password" onChange={handleChange} name='password1'  />
        <label>Confirm Password</label>
        <input type="password" onChange={handleChange} name='password2'  />
        <button onClick={handleClick}>Register</button> 
      </div>       
    </div> 
  )
}

export default Register