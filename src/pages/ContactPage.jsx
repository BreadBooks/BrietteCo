// src/pages/ContactPage.jsx
import React from 'react';
import './ContactPage.css';
import contactBanner from '../assets/contactbanner.svg'; // adjust the path as needed

function ContactPage() {
    return (
        <div className="contact-page">
            {/* Banner Section */}
            <div className="contact-banner">
                <img 
                    src={contactBanner} 
                    alt="Contact Banner" 
                    className="contact-banner-image" 
                />
            </div>

            {/* Existing Text Remains Unchanged */}
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-description">
                We’d love to hear from you! Fill out the form below to get started.
            </p>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" className="contact-input" />
                <input type="email" placeholder="Your Email" className="contact-input" />
                <textarea placeholder="Your Message" className="contact-textarea"></textarea>
                <button type="submit" className="contact-button">Send Message</button>
            </form>
        </div>
    );
}

export default ContactPage;
