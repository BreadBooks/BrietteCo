// src/pages/TestimonialsPage.jsx
import React from 'react';
import './AboutMe.css';
import peachy from '../assets/peachy.jpg';



function TestimonialsPage() {
    return (
        <div className="about-me-page">
            <h1>About Me</h1>
            <p>
            Hi there! I’m a Texas-born photographer with a love for capturing the little things that make life special. <br />
            I’ve been taking professional photos since 2023, and while I specialize in portraits—like family photos, graduations, engagements, and weddings—<br />
            I’m always excited to try something new and keep learning.
            For me, photography is about preserving moments that matter, whether it’s a big celebration or a quiet, everyday memory. <br />
            I love experimenting with creative ideas and seeing where they take me, so if you have a vision, let’s bring it to life!
            </p>
            <p>
                Thanks for stopping by—I can’t wait to help you capture memories that will make your heart smile!
            </p>
            <div className="icon-decorations">
            <img src={peachy} alt="Orange Cat" />
            </div>
            <div className="texas-motif">
                Proudly Texan
            </div>
        </div>
    );
}

export default TestimonialsPage;