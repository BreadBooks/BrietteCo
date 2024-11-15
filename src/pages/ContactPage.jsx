// src/pages/ContactPage.jsx
import React from 'react';

function ContactPage() {
    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <p>Feel free to reach out for inquiries or bookings.</p>
            <form>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactPage;
