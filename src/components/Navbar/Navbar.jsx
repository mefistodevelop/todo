import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="Navbar__container">
      <span className="navbar-brand">Todo List App</span>
      <ul className="navbar-nav Navbar__list">
        <li className="nav-item Navbar__item">
          <NavLink className="nav-link" exact to="/">Home</NavLink>
        </li>
        <li className="nav-item Navbar__item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
      </ul>
    </div>

  </nav>
);

export default Navbar;
