import "./register.scss";


const Register = () => {

  return (
    <div className="register">
        <label>Surname</label>
        <input type="text" />
        <label>E-mail</label>
        <input type="text" />
        <label>Password</label>
        <input type="text" />
        <label>Repeat Password</label>
        <input type="text" />
        <button >Register</button>        
    </div> 
  )
}

export default Register