import { useEffect } from "react";
import './navbar.css'

function Navbar() {
  useEffect(() => {
    const toggleButton = document.querySelector(".navbar-toggle");
    const navbarMenu = document.querySelector(".navbar-menu");

    const toggleMenu = () => {
      navbarMenu.classList.toggle("active");
      toggleButton.classList.toggle("active");
    };

    toggleButton.addEventListener("click", toggleMenu);

    return () => {
      toggleButton.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">LYRRA FE</div>
      <div className="navbar-toggle">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className="navbar-menu">
        <li><a href="/hero">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
