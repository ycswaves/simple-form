import React from 'react';
import './navbar.scss';

export const Navbar = (props) => {
  return (
    <div className="navbar">
      <span className="navbar__back">&lt;</span>
      {props.children}
      <div className="navbar__icon payment"></div>
    </div>
  )
}
