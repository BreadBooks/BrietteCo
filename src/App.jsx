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
import ContactPage from './pages/ContactPage';
import FamilyGallery from './pages/FamilyGallery';
import CoupleGallery from './pages/CoupleGallery';
import SoloGallery from './pages/SoloGallery';
import GraduationGallery from './pages/GraduationGallery';
import EventGallery from './pages/EventsGallery';
import AboutPage from './pages/AboutPage';

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
                    <Route path="/aboutme" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/family" element={<FamilyGallery />} />
                    <Route path="/couples" element={<CoupleGallery />} />
                    <Route path="/solo-portraits" element={<SoloGallery />} />
                    <Route path="/graduation" element={<GraduationGallery/>} />
                    <Route path="/events" element={<EventGallery/>} />
                </Routes>
            </div>

        </Router>
    );
}

export default App;
