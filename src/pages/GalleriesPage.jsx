// src/pages/GalleriesPage.jsx
import React from 'react';

function GalleriesPage() {
    return (
        <div className="galleries-page">
            <h1>Galleries</h1>
            <p>Select a gallery to view more photos.</p>
            {/* Placeholder images or links to other galleries */}
            <div className="gallery-links">
                <a href="/graduation">Graduation</a>
                <a href="/solo-portraits">Solo Portraits</a>
                <a href="/family">Family</a>
            </div>
        </div>
    );
}

export default GalleriesPage;
