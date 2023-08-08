import React from 'react'
import { NavLink } from 'react-router-dom';
export const Footer = () => {
  return (
    <>
     <footer>
      <div>
        <span>Copyright © 2023 All Rights Reserved</span>
        <span class="link">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </span>
      </div>
    </footer>
    </>
  )
}
