import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <span className="navbar-brand">Todo List App</span>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/home">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="about">About</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
