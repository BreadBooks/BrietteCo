// src/pages/GalleriesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './GalleriesPage.css';
import GraduationCarousel from '../components/GraduationCarousel';
import SoloPortraitCarousel from '../components/SoloPortraitCarousel';
import FamilyCarousel from '../components/FamilyCarousel';
import CouplesCarousel from '../components/CoupleCarousel';
import EventsCarousel from '../components/EventsCarousel';
import galleryBanner from '../assets/gallerybanner.webp';

function GalleriesPage() {
  const galleryData = [
    {
      title: 'Graduation Photos',
      description: 'Celebrate your academic achievements with a memorable graduation photoshoot.',
      link: '/graduation',
      carousel: <GraduationCarousel />,
    },
    {
      title: 'Solo Portraits',
      description: 'Capture your individuality and style with personalized solo portrait sessions.',
      link: '/solo-portraits',
      carousel: <SoloPortraitCarousel />,
    },
    {
      title: 'Family Photos',
      description: 'Cherish special memories with family',
      link: '/family',
      carousel: <FamilyCarousel />,
    },
    {
      title: 'Couple Photos',
      description: 'Capture your love with your life partner!',
      link: '/couples',
      carousel: <CouplesCarousel />,
    },
    {
      title: 'Event Photos',
      description: 'Document your special day forever!',
      link: '/events',
      carousel: <EventsCarousel />,
    },
  ];
  return (
    <div className="galleries-page">
      <div className="gallery-banner">
  <img
    src={galleryBanner}
    alt="Our Galleries"
    className="gallery-banner-image"
  />
  <div className="banner-overlay desktop-only">
    <p className="banner-text">Interested in booking a session?</p>
    <Link to="/services" className="services-link">
      Visit my Services Page to learn more!
    </Link>
  </div>
</div>

{/* Mobile Banner Text */}
<div className="banner-mobile-text mobile-only">
  <p className="banner-text">Interested in booking a session?</p>
  <Link to="/services" className="services-link">
    Visit my Services Page to learn more!
  </Link>
</div>


      {/* Gallery Cards */}
      <div className="gallery-cards">
        {galleryData.map((gallery, index) => (
          <div key={index} className="gallery-card">
            <div className="gallery-carousel">{gallery.carousel}</div>
            <div className="gallery-details">
              <h2>{gallery.title}</h2>
              <p>{gallery.description}</p>
              <Link to={gallery.link} className="gallery-link">
                See More {gallery.title}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Services Note */}
      <div className="services-note">
        <p>
          Interested in booking a photoshoot? Visit my{' '}
          <Link to="/services" className="services-link">
            Services Page
          </Link>{' '}
          for more details and to schedule your session today!
        </p>
      </div>
    </div>
  );
}


export default GalleriesPage;
