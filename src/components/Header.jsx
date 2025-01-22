import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoalt from '../assets/logoalt.svg';

function Header() {
  return (
    <header className="header compact background-active">
      <div className="header-content compact-content">
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
        <div className="logo">
          <Link to="/">
            <img src={logoalt} alt="Logoalt" />
          </Link>
        </div>
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
      </div>
    </header>
  );
}

export default Header;
