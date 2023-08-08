import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';
import mypic from "../images/menu-bar.png"

export const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About </NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/logout">Logout</NavLink></li>
         
        </>
      );
    } else {
      return (
        <>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About </NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup">Signup</NavLink></li>
        </>
      );
    }
  };

  return (
    <header>
      <nav className="navbar">
        <h2 className="logo"><NavLink to="/">Mern Dev</NavLink></h2>
        <input type="checkbox" id="menu-toggler" />
        <label htmlFor="menu-toggler" id="hamburger-btn">
        <img src={mypic}/>
        </label>
        <ul className="all-links">
          <RenderMenu />
        </ul>
      </nav>
    </header>
  );
};
