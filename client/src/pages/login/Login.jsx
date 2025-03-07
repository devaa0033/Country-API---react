import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./login.scss"
import { AuthContext } from '../../context/authContext.jsx';


function Login() {
  const [inputs, setInputs] = useState({
    username : "",
    password : "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();
  
  const {login} = useContext(AuthContext);
  
  const handleChange = (e) => {
    setInputs((prev) => ({...prev,[e.target.name] : e.target.value}));
  }

  const handleLogin = async(e) => {
    e.preventDefault();
      
    try {
      // await axios.post(inputs);
      await login(inputs);
        navigate("/"); 
      
    } catch (err) {
      setErr(err.response.data);
    }
  }


  return (
    <div className="login">
       <div className="card">

        <div className="left">
          <h1>Hello World.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est omnis earum aut impedit expedita! Aliquid quisquam officiis sit. Quidem distinctio saepe obcaecati accusamus blanditiis odit at veritatis alias tempora sint?</p>
          <span>Don't you have an account?</span>
          <Link to = "/register" >
              <button>Register</button>
          </Link>
        </div>


        <div className="right">
            <h1>Login</h1>
            <form action="">
              <input type="text" placeholder='username' name='username' onChange={handleChange}/>
              <input type="password" placeholder='password' name='password' onChange={handleChange}/>

              {err && err}
              <button onClick={handleLogin}>Login</button>
            </form>
        </div>


       </div>
    </div>
  )
}

export default Login