// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero'; 
import ImageGallery from './components/ImageGallery';
import WelcomeSection from './components/WelcomeSection';
import MomentsSection from './components/MomentsSection';
import ServicesPage from './pages/ServicesPage';
import GalleriesPage from './pages/GalleriesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import FamilyGallery from './pages/FamilyGallery';
import './App.css';
import SoloGallery from './pages/SoloGallery';
import GraduationGallery from './pages/GraduationGallery';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                
                <Routes>
                    
                   
                <Route path="/" element={
                        <>
                        
                        <Hero />
                            {/* Welcome Section */}
                            <WelcomeSection />

                            <section className="content-section">
                                <div className="gallery">
                                    <ImageGallery />
                                </div>
                            </section>
                            <MomentsSection />
                        </>
                    } />

                    {/* Page Routes */}
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/galleries" element={<GalleriesPage />} />
                    <Route path="/aboutme" element={<TestimonialsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/family" element={<FamilyGallery />} />
                    <Route path="/solo-portraits" element={<SoloGallery />} />
                    <Route path="/graduation" element={<GraduationGallery/>} />
                </Routes>
            </div>

        </Router>
    );
}

export default App;
