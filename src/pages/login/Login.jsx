import React from 'react'
import {useState, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import {BiHide,BiShow} from "react-icons/bi"
import "./login.scss";
import { AuthContext } from '../../context/AuthContext';
const Login = () => {
  const navigate = useNavigate();
  
  const {login, guestLogin} = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword,setShowPassword] = useState(true);
  

  const handleGuestLogin = ()=>{
      setUsername("adarshbalika");
      setPassword("adarshBalika123");

      guestLogin();
  }

  const signUpClickHandler = () => {
    navigate('/SignUp');
  }


  return (
    <div className='login-page'>
      <div className="login-container">
        <p>Login</p>

        <form action="" className='login-form'>
          <div className="input-field-container">
            <label htmlFor="email" className="username">
              Username
              </label>
              <input type="text"
                     name=''value={username}
                     id='email'
                     placeholder='xyz@gmail.com' 
                     onChange={(e)=>setUsername(e.target.value)} />  
          </div>
          <div className="input-field-container">
            <label htmlFor="password" className="password">
              Password
              </label>
              <input 
                type={showPassword ? "text" : "password"} 
                name='' value={password}
                id='password'
                placeholder='*************' 
                onChange={(e)=>setPassword(e.target.value)} />
            
          </div>
          <div className="show-password" onClick={()=>setShowPassword(!showPassword)}>
            {showPassword? <BiHide size="20px"/> : <BiShow size="20px"/>}
          </div>
        </form>
        <div className="button-container">
          <div className="login-guest-login">
          <button className='btn' onClick={(e)=>login(e, username, password)} >Login</button>
          <button onClick={handleGuestLogin}>Login as Guest</button>
          </div>
          <div className="signup-btn">
          <button className="signup" onClick={signUpClickHandler}>Don't have account? Register here</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
