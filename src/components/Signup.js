import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import mypic from "../images/pic (2).jpg"
export const Signup = () => {

  const navigate = useNavigate();

  const [user, setuser] = useState({
    name: "", email: "", phone: "", password: "", cpassword: ""
  });

  let name, value;
  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setuser({ ...user, [name]: value });
  }


  const Postdata = async (e) => {
    e.preventDefault();
    const { name, email, phone,  password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, password, cpassword
      })
    })
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("invalid credentials");
    } else {
      window.alert("success")
      navigate('/login');

    }
  }

  return (
    <>
      <div className="top-container">
        <div className="container">
          <input type="checkbox" id="flip" />
          <div className="cover">

            <div className="back">
              <img className="backImg" src={mypic} alt="" />
              <div className="text">
                <span className="text-1">Complete miles of journey <br /> with one step</span>
                <span className="text-2">Let's get started</span>
              </div>
            </div>
          </div>
          <div className="forms">
            <div className="form-content">

              <div className="signup-form">
                <div className="title">Signup</div>
                <form >
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-user"></i>
                      <input type="text" placeholder="Enter your name" required 
                       name='name' value={user.name} onChange={handleInput}/>
                    </div>
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>
                      <input type="text" placeholder="Enter your email" required 
                        name='email'  value={user.email} onChange={handleInput}/>
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input type="number" placeholder="Enter your phonr No." required
                      name='phone'  value={user.phone} onChange={handleInput} />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input type="password" placeholder="Enter your password" required 
                      name='password'  value={user.password} onChange={handleInput}/>
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input type="password" placeholder="confirm password" required 
                       name='cpassword' value={user.cpassword} onChange={handleInput}/>
                    </div>

                    <div className="button input-box">
                      <input type="submit" value="Sumbit"
                       name='register' onClick={Postdata} />
                    </div>
                    <div className="text sign-up-text">Already have an account? <NavLink to="/login">Login now</NavLink></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
