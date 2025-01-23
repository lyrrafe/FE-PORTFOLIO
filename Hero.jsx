import React from 'react';
import myPhoto from './lyrrafi.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>LYRRA FE</h1>
        <p> BACKBURNER | MATCHA GURL </p>
        <button className="cta-button">About Me</button>
      </div>
      
      <div className="hero-image">
      <img src={myPhoto} alt="lyrra" />
      </div>
    </section>
  );
};

export default Hero;