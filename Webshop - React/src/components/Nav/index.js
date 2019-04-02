import React from 'react';
import { NavLink } from "react-router-dom";
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <img className="icon" src={'https://bestclassicbands.com/wp-content/uploads/2015/05/vinyltuesdaylogo.jpg'} alt="icon" />
    <ul>
      <li> <NavLink to="/"> All </NavLink></li>
      <li> <NavLink to="/"> New arrivals </NavLink> </li>
      <li> <NavLink to="/"> Coming soon </NavLink> </li>
      <li> <NavLink to="/"> Toplist </NavLink> </li>
    </ul>

    <div className="cart-wrapper">
      <NavLink to="/Cart"> <p> {props.length} </p> </NavLink>
      <NavLink to="/Cart"> <img className="cart-icon" src={'https://static.thenounproject.com/png/22665-200.png'} alt="icon" /> </NavLink>
    </div>
  </div>
)

export default Nav;
