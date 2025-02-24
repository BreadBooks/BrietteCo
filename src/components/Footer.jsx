// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaPinterest, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'; // Optionally, import your CSS for styling

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-icons">
        <a
          href="https://github.com/breadbooks"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.pinterest.com/brietteco"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pinterest"
        >
          <FaPinterest size={24} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a>
        <Link to="/contact" aria-label="Contact">
          <FaEnvelope size={24} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
