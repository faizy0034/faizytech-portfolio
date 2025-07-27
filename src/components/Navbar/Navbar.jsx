import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
  import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">FaizyTech</div>

    

<ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
  <li>
    <Link
      to="hero"
      smooth={true}
      duration={500}
      spy={true}
      offset={-70}
      activeClass="active"
      onClick={closeMenu}
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      to="about"
      smooth={true}
      duration={500}
      spy={true}
      offset={-70}
      activeClass="active"
      onClick={closeMenu}
    >
      About
    </Link>
  </li>
  <li>
    <Link
      to="projects"
      smooth={true}
      duration={500}
      spy={true}
      offset={-70}
      activeClass="active"
      onClick={closeMenu}
    >
      Projects
    </Link>
  </li>
  <li>
    <Link
      to="contact"
      smooth={true}
      duration={500}
      spy={true}
      offset={-70}
      activeClass="active"
      onClick={closeMenu}
    >
      Contact
    </Link>
  </li>
</ul>


      <button className="navbar-btn">Get Started</button>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </nav>
  );
};

export default Navbar;
