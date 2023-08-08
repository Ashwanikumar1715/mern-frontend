import React,{useContext, useState} from 'react';
import { NavLink ,useNavigate} from 'react-router-dom';
import {UserContext} from '../App'
import mypic from "../images/pic (1).jpg"
export const Login = () => {
  const {state,dispatch}=useContext(UserContext)


  const navigate=useNavigate();

  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');

  const Loginuser=async(e)=>{
    e.preventDefault();
    
    const res=await fetch("/signin",{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
      email,password
      })
    })
    const data=await res.json();
    if(res.status===400|| !data){
      window.alert("invalid credentials");
    }else{
      dispatch({type:"USER",payload:true})
      window.alert("success")
      navigate('/');
  
    }
  }

  return (
    <div className="top-container">
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src={mypic} alt="" />
            <div className="text">
              <span className="text-1">Every new friend is a <br /> new adventure</span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form action="#">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input type="text" placeholder="Enter your email" required 
                      name='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Enter your password" required 
                    name='password' value={password} onChange={(e)=>setpassword(e.target.value)} />
                  </div>
                  <div className="text"><NavLink to="/signup">Forgot password?</NavLink></div>
                  <div className="button input-box">
                    <input type="submit" value="Submit" name='login' onClick={Loginuser}/>
                  </div>
                  <div className="text sign-up-text">Don't have an account? <NavLink to="/signup">Signup now</NavLink></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
