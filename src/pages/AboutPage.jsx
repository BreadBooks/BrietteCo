import React from 'react';
import './AboutMe.css'; 
import image1 from '../assets/about1.svg';
import image2 from '../assets/about2.svg';
import image3 from '../assets/about3.svg';

function AboutPage() {
  return (
    <div className="about-me-images">
      <img src={image1} alt="About me image 1" className="page-wide-image" />
      <img src={image2} alt="About me image 2" className="page-wide-image" />
      <img src={image3} alt="About me image 3" className="page-wide-image" />
    </div>
  );
}

export default AboutPage;
