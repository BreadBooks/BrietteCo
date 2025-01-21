import React from 'react';
import './WelcomeSection.css';
import welcomeImage from '../assets/welcome-image.webp'; 


function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="welcome-image">
        <img src={welcomeImage} alt="Welcome" />
      </div>
      <div className="welcome-text">
        <h1>Welcome!</h1>
        <p>
          I'm a photographer passionate about capturing special moments. 
          Whether it's a graduation, family portrait, wedding, or solo shoot, 
          I strive to make each session unique and personal.
        </p>
        <p>
          I am expanding my professional work beyond friends and family, 
          and I'm excited to work with new clients. Let's create something 
          beautiful together.
        </p>
        {/* Add more content */}
      </div>
    </section>
  );
}

export default WelcomeSection;
