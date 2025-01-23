import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import logo from '../assets/logo.png';

function Hero() {
  const [hideHero, setHideHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // When the user scrolls beyond the hero (e.g., more than viewport height), hide the hero
      if (window.scrollY > window.innerHeight * 0.9) {
        setHideHero(true);
      } else {
        setHideHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  return (
    <section className={`hero ${hideHero ? 'hide' : ''}`}>
      <div className="hero-content">
        <Link to="/">
          <img src={logo} alt="Logo" className="hero-logo" />
        </Link>
      </div>
      <nav className="hero-navigation">
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/galleries" className="nav-link">Galleries</Link>
        <Link to="/aboutme" className="nav-link">About Me</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </section>
  );
}

export default Hero;
