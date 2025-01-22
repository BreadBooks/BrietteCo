import React from 'react';
import './WelcomeSection.css';

function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="welcome-text">
        <h1>Welcome to Briette & Co.!</h1>
        <p>
          I'm a passionate portrait photographer based in the heart of Dallas-Fort Worth.
          <br />
          My mission is to capture authentic moments and create timeless images that tell your unique story.
          Whether it's a family portrait, a personal milestone, or just a spontaneous moment, I love turning memories into art that will last a lifetime.
        </p>
        <p>
          Thank you for considering me to preserve your special moments—I can't wait to meet you and craft beautiful memories together!
        </p>
        <p className="contact-link">
          If you'd like to get in contact,{' '}
          <a href="/contact" className="contact-link-text">
            click here!
          </a>
        </p>
      </div>
    </section>
  );
}

export default WelcomeSection;
