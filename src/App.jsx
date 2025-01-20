// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ImageGallery from './components/ImageGallery';
import ServicesPage from './pages/ServicesPage';
import GalleriesPage from './pages/GalleriesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import FamilyGallery from './pages/FamilyGallery';
import SoloGallery from './pages/SoloGallery';
import GraduationGallery from './pages/GraduationGallery';
import ParallaxBackground from './components/ParallaxBackground'; // Import the new component
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={
                        <>
                          {/* Use the ParallaxBackground component */}
                          <ParallaxBackground />
                          
                          <section className="hero-section">
                          </section>

                          <section className="content-section">
                              <div className="gallery">
                                  <ImageGallery />
                              </div>
                          </section>
                        </>
                    } />
                    {/* Other routes */}
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/galleries" element={<GalleriesPage />} />
                    <Route path="/aboutme" element={<TestimonialsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/family" element={<FamilyGallery />} />
                    <Route path="/solo-portraits" element={<SoloGallery />} />
                    <Route path="/graduation" element={<GraduationGallery />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
