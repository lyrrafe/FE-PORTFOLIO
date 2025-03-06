import React from "react";
import myPhoto from "./ly.jpg";
import Navbar from "./Navbar";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa"; // Import social icons
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
            <h2>GRAPHIC DESIGNER</h2>
            <p>LYRRA FE BAUTISTA</p>
            <p>
              Hey there! I'm a self-taught Graphic Designer based in the Philippines. I consider myself a creative soul with a passion for music, and
              expressing myself through art. Whether it's through design, storytelling, or 
              my personal projects, I always bring my unique vibe to everything I do.
            </p>

            {/* Social Media Links */}
            <div className="social-links">
              <a href="https://facebook.com/lyrrafe253" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" />
              </a>
              <a href="https://instagram.com/lyrra.fe" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a href="mailto:lyrrafe@gmail.com">
                <FaEnvelope className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
