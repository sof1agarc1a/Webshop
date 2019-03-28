import React from 'react';
import './Nav.css';

const Nav = () => (
  <div className="nav">
    <img className="icon" src={'https://bestclassicbands.com/wp-content/uploads/2015/05/vinyltuesdaylogo.jpg'} alt="icon" />
    <ul>
      <li> <a href="#"> All </a> </li>
      <li> <a href="#"> New arrivals </a> </li>
      <li> <a href="#"> Coming soon </a> </li>
      <li> <a href="#"> Toplist </a> </li>
    </ul>

    <img className="cart-icon" src={'https://static.thenounproject.com/png/22665-200.png'} alt="icon" />

  </div>
)

export default Nav;
