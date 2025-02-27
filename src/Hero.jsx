import React from "react";
import { Link } from "react-router-dom";
import myPhoto from "./lyrrafi.jpg";
import "./Hero.css"; 

const Hero = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">LYR</div>
        <ul className="navbar-menu">
        <li><a href="#contact">Home</a></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="#contact">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          {/* Left Side - Image */}
          <div className="hero-image">
            <img src={myPhoto} alt="Lyrra" />
          </div>

          {/* Right Side - Text */}
          <div className="hero-text">
            <h1>LYRRA FE</h1>
            <p>MATCHA GIRLIE | BACKBURNER | SOBRANG LATINA</p>
            <p>
              Hey there! I'm Lyrra, a creative soul with a passion for matcha, music, and
              expressing myself through art. Whether it's through design, storytelling, or 
              my personal projects, I always bring my unique vibe to everything I do.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
