import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoalt from '../assets/logoalt.svg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className="header compact background-active">
      <div className="header-content compact-content">
        {/* Desktop navigation: left side */}
        <div className="nav-left">
          <ul>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/galleries">Galleries</Link>
            </li>
          </ul>
        </div>

        {/* Logo in the center */}
        <div className="logo">
          <Link to="/">
            <img src={logoalt} alt="Logoalt" />
          </Link>
        </div>

        {/* Desktop navigation: right side */}
        <div className="nav-right">
          <ul>
            <li>
              <Link to="/aboutme">About Me</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="mobile-hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Mobile menu: includes extra links */}
      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/services" onClick={toggleMenu}>Services</Link>
          </li>
          <li>
            <Link to="/galleries" onClick={toggleMenu}>Galleries</Link>
          </li>
          <li>
            <Link to="/graduation-gallery" onClick={toggleMenu}>Graduation Gallery</Link>
          </li>
          <li>
            <Link to="/family-gallery" onClick={toggleMenu}>Family Gallery</Link>
          </li>
          <li>
            <Link to="/events-gallery" onClick={toggleMenu}>Events Gallery</Link>
          </li>
          <li>
            <Link to="/aboutme" onClick={toggleMenu}>About Me</Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
