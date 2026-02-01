import { NavLink } from "react-router-dom";
import logo from "../images/logo-img.jpeg";

function Navbar() {
  return (
    <nav className="navbar">
      {/* LOGO + NAME */}
      <div className="nav-left">
        <img src={logo} alt="Core X Fitness Logo" className="nav-logo-img" />
        <span className="nav-logo-text">CORE X FITNESS</span>
      </div>

      {/* LINKS */}
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/programs">Programs</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      {/* CTA */}
      <div className="nav-right">
        <div className="nav-socials">
          <a href="https://wa.me/919667971209" target="_blank">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/corexfitness__?igsh=M2F5MnhhNGljYXdy" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <a className="nav-cta">Join Now</a>
      </div>
    </nav>
  );
}

export default Navbar;
