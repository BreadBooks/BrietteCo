// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ImageGallery from './components/ImageGallery';
import ServicesPage from './pages/ServicesPage';
import GalleriesPage from './pages/GalleriesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
    return (
        <Router>
        <div className="App">  
        <Header />
        <div className="background-container">
        </div>
            <Routes>
                    {/* Home Route */}
                    <Route path="/" element={
                        <>
                            <section className="hero-section">
                            
                            </section>

                            <section className="content-section">
                                <div className="gallery">
                                    <ImageGallery />
                                </div>
                            </section>
                        </>
                    } />

                    {/* Page Routes */}
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/galleries" element={<GalleriesPage />} />
                    <Route path="/testimonials" element={<TestimonialsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
        </div>

        </Router>
    );
}

export default App;
