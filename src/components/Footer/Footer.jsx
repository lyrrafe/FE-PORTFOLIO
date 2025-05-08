import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">Lyrra Fe</Link>
            <p>
              A passionate frontend developer focused on creating beautiful and user-friendly web experiences.
            </p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Lyrra Fe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
