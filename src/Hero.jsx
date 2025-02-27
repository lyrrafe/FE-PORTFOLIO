import React from "react";
import myPhoto from "./ly.jpg";
import Navbar from "./Navbar";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-image">
            <img src={myPhoto} alt="Lyrra" />
          </div>
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