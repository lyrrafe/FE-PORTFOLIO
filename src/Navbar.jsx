import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">LYR</div>
      <ul className="navbar-menu">
        <li><a href="/hero">Home</a></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#contact">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;