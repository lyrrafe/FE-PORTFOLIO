import { useEffect } from "react";
<<<<<<< HEAD
import './navbar.css'

=======
import './Navbar.css'
>>>>>>> 0811aa0b33df1737b9e75dae312c3885a5d06336
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
