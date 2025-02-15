import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';

function AboutMeSections() {
  return (
    <div className="about-me-sections">

      {/* Section 1 */}
      <section className="section section-one">
        <h2>Hi there, I’m Briette & Co!</h2>
        <p>
          I’m a DFW-based photographer located in Plano, Texas. When I’m not behind 
          the camera capturing lifelong memories, you’ll find me spending time with my fiancé 
          and our two adorable cats, programming, traveling, hiking, playing video games, 
          or playing pickleball!
        </p>
      </section>

      {/* Section 2 */}
      <section className="section section-two">
        <h2>How it Started...</h2>
        <p>
          Photography has been a passion of mine since high school, but turning it 
          into a profession has been the most exciting adventure yet! What started 
          as fun photoshoots with family and friends quickly grew into something more.
        </p>
        <p>
          As more and more people began asking if I had a website or Instagram 
          to get in touch with me, I knew it was time to take the leap. Now, I get 
          to do what I love—capturing genuine moments and creating timeless 
          memories for amazing people like you!
        </p>
      </section>

      {/* Section 3 */}
      <section className="section section-three">
        <h2>
          <Link to="/services" className="redirect-link">
            Book a session with me today!
          </Link>
        </h2>
        <p>Let’s Create Something Beautiful!</p>
      </section>

    </div>
  );
}

export default AboutMeSections;
