// src/App.jsx
import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero'; 
import ImageGallery from './components/ImageGallery';
import WelcomeSection from './components/WelcomeSection';
import MomentsSection from './components/MomentsSection';
import ServicesPage from './pages/ServicesPage';
import GalleriesPage from './pages/GalleriesPage';
import ContactPage from './pages/ContactPage';
import FamilyGallery from './pages/FamilyGallery';
import CoupleGallery from './pages/CoupleGallery';
import SoloGallery from './pages/SoloGallery';
import GraduationGallery from './pages/GraduationGallery';
import EventGallery from './pages/EventsGallery';
import AboutPage from './pages/AboutPage';
import LoadingOverlay from './components/LoadingOverlay';
import useImagesLoaded from './hooks/useImagesLoaded';
import Footer from './components/Footer'; // Import the Footer component
import './App.css'; // For fade-in animations

// The Content component tracks only the main content images
function Content() {
  const contentRef = useRef(null);
  const location = useLocation();
  const imagesLoaded = useImagesLoaded(contentRef, [location]);

  return (
    <>
      {!imagesLoaded && <LoadingOverlay />}
      {/* Wrap only the main content in the ref */}
      <div ref={contentRef} className={`content-wrapper ${imagesLoaded ? 'fade-in' : ''}`}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <WelcomeSection />
                <section className="content-section">
                  <div className="gallery">
                    <ImageGallery />
                  </div>
                </section>
                <MomentsSection />
              </>
            }
          />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/galleries" element={<GalleriesPage />} />
          <Route path="/aboutme" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/family" element={<FamilyGallery />} />
          <Route path="/couples" element={<CoupleGallery />} />
          <Route path="/solo-portraits" element={<SoloGallery />} />
          <Route path="/graduation" element={<GraduationGallery />} />
          <Route path="/events" element={<EventGallery />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      {/* Overall app container with flex styling */}
      <div className="App">
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
