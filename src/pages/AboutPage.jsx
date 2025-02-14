// src/pages/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if using React Router
import './AboutMe.css'; 
import image1 from '../assets/about1.webp';
import image2 from '../assets/about2.webp';
import image3 from '../assets/about3.webp';

function AboutPage() {
  return (
    <div className="about-me-images">
      <img src={image1} alt="About me image 1" className="page-wide-image" />
      <img src={image2} alt="About me image 2" className="page-wide-image" />
      <div className="contact-overlay-container">
        <img src={image3} alt="About me image 3" className="page-wide-image" />
        <Link to="/contact" className="overlay-text">
          Book Your Session Today!
        </Link>
      </div>
    </div>
  );
}

export default AboutPage;
