import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component'; // Import LazyLoadImage
import 'react-lazy-load-image-component/src/effects/blur.css'; // Optional: Add a blur effect
import './FamilyGallery.css';


import family21 from '../assets/family21.jpg';
import family22 from '../assets/family22.jpg';
import family23 from '../assets/family23.jpg';
import family4 from '../assets/family4.jpg';
import family5 from '../assets/family5.jpg';
import family6 from '../assets/family6.jpg';
import family7 from '../assets/family7.jpg';
import family8 from '../assets/family8.jpg';
import family9 from '../assets/family9.jpg';
import family10 from '../assets/family10.jpg';
import family11 from '../assets/family11.jpg';
import family12 from '../assets/family12.jpg';
import family13 from '../assets/family13.jpg';
import family14 from '../assets/family14.jpg';
import family15 from '../assets/family15.jpg';
import family16 from '../assets/family16.jpg';
import family17 from '../assets/family17.jpg';
import family18 from '../assets/family18.jpg';
import family19 from '../assets/family19.jpg';
import family20 from '../assets/family20.jpg';
import family24 from '../assets/family24.jpg';
import family25 from '../assets/family25.jpg';
import family26 from '../assets/family26.jpg';
import family27 from '../assets/family27.jpg';
const photos = [
    family21,
    family22,
    family23,
    family4,
    family5,
    family6,
    family7,
    family8,
    family9,
    family10,
    family11,
    family12,
    family13,
    family14,
    family15,
    family16,
    family17,
    family18,
    family19,
    family20,
    family24,
    family25,
    family26, 
    family27
];

function FamilyGallery() {
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

    const openLightbox = (index) => {
        setSelectedPhotoIndex(index);
    };

    const closeLightbox = () => {
        setSelectedPhotoIndex(null);
    };

    const goToNextPhoto = () => {
        setSelectedPhotoIndex((prevIndex) =>
            prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPreviousPhoto = () => {
        setSelectedPhotoIndex((prevIndex) =>
            prevIndex === 0 ? photos.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="family-gallery">
            <h1 className="gallery-title">Family & Couple Gallery</h1>
            <p className="gallSubtext">Visit Other Galleries</p>

            {/* Lazy Load Thumbnails in Grid */}
            <div className="gallery-grid">
                {photos.map((photo, index) => (
                    <LazyLoadImage
                        key={index}
                        src={photo} // Thumbnail or preview image
                        alt={`Family${index + 1}`}
                        className="gallery-photo"
                        effect="blur" // Optional: Adds a blur effect while loading
                        onClick={() => openLightbox(index)} // Open lightbox on click
                    />
                ))}
            </div>

            {/* Lightbox with Full-Quality Images */}
            {selectedPhotoIndex !== null && (
                <div className="lightbox">
                    <button className="lightbox-close" onClick={closeLightbox}>
                        &times;
                    </button>
                    <button className="lightbox-arrow left" onClick={goToPreviousPhoto}>
                        &#8249;
                    </button>
                    <img
                        src={photos[selectedPhotoIndex]} // Full-quality image
                        alt={`Selected Family${selectedPhotoIndex + 1}`}
                        className="lightbox-image"
                    />
                    <button className="lightbox-arrow right" onClick={goToNextPhoto}>
                        &#8250;
                    </button>
                </div>
            )}
        </div>
    );
}

export default FamilyGallery;
