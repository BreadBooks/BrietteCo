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

            {/* Title & Description */}
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-description">
                We’d love to hear from you! Fill out the form below to get started.
            </p>

            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="firstName">First Name*</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        className="contact-input" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name*</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        className="contact-input" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="contact-input" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="contact-input" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dates">Desired Date(s)</label>
                    <input 
                        type="text" 
                        id="dates" 
                        name="dates" 
                        className="contact-input" 
                        placeholder="MM/DD/YYYY or a range" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sessionType">Type of Session</label>
                    <input 
                        type="text" 
                        id="sessionType" 
                        name="sessionType" 
                        className="contact-input" 
                        placeholder="e.g., Portrait, Wedding, etc." 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="referral">How did you hear about us?</label>
                    <input 
                        type="text" 
                        id="referral" 
                        name="referral" 
                        className="contact-input" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="questions">Any other questions?</label>
                    <textarea 
                        id="questions" 
                        name="questions" 
                        className="contact-textarea"
                    ></textarea>
                </div>
                <button type="submit" className="contact-button">
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default ContactPage;
