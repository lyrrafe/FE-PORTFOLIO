import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1>Hello, I'm <span className="highlight">Lyrra Fe</span></h1>
        <h2>Frontend Developer</h2>
        <p>I create beautiful, responsive websites with clean code and user-centered design.</p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn">View My Work</Link>
          <Link to="/about" className="btn btn-outline">About Me</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;