import React, { useState, useEffect } from 'react';
import './FamilyGallery.css';
import { Link } from 'react-router-dom';

import family21 from '../assets/family21.webp';
import family22 from '../assets/family22.webp';
import family23 from '../assets/family23.webp';
import family4 from '../assets/family4.webp';
import family5 from '../assets/family5.webp';
import family6 from '../assets/family6.webp';
import family7 from '../assets/family7.webp';
import family8 from '../assets/family8.webp';
import family9 from '../assets/family9.webp';
import family10 from '../assets/family10.webp';
import family11 from '../assets/family11.webp';
import family12 from '../assets/family12.webp';
import family13 from '../assets/family13.webp';
import family14 from '../assets/family14.webp';
import family15 from '../assets/family15.webp';
import family16 from '../assets/family16.webp';
import family17 from '../assets/family17.webp';
import family18 from '../assets/family18.webp';
import family19 from '../assets/family19.webp';
import family20 from '../assets/family20.webp';
import family24 from '../assets/family24.webp';
import family25 from '../assets/family25.webp';
import family26 from '../assets/family26.webp';
import family27 from '../assets/family27.webp';

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
    family27,
];

function FamilyGallery() {
    const [visiblePhotos, setVisiblePhotos] = useState(4); // Initial number of visible photos
    const [loadedPhotos, setLoadedPhotos] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const totalHeight = document.documentElement.scrollHeight;

            // If scrolled near the bottom, load the next batch
            if (scrollPosition >= totalHeight - 20) {
                loadMorePhotos();
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Cleanup the scroll listener
            window.removeEventListener('scroll', handleScroll);
        };
    }, [visiblePhotos]);

    const loadMorePhotos = () => {
        if (visiblePhotos < photos.length) {
            setVisiblePhotos((prev) => Math.min(prev + 4, photos.length)); // Load next batch of 4 photos
        }
    };

    const handleImageLoad = (src) => {
        setLoadedPhotos((prev) => [...prev, src]); // Add to fully loaded list
    };

    return (
        <div className="family-gallery">
            <div className="gallery-header">
                <h1 className="gallery-title">Family & Couple Gallery</h1>
                <p className="gallery-description">
                    Looking to book your own family or couple session?{' '}
                    <Link to="/services" className="booking-link">
                        Click here to view our services.
                    </Link>
                </p>
                <p className="gallery-redirect">
                    Want to explore more?{' '}
                    <Link to="/galleries" className="other-galleries-link">
                        Visit other galleries.
                    </Link>
                </p>
            </div>

            <div className="gallery-grid">
                {photos.slice(0, visiblePhotos).map((photo, index) => (
                    <ImageWithFadeIn
                        key={index}
                        src={photo}
                        alt={`Family ${index + 1}`}
                        onLoad={() => handleImageLoad(photo)}
                        isLoaded={loadedPhotos.includes(photo)}
                    />
                ))}
            </div>
        </div>
    );
}

function ImageWithFadeIn({ src, alt, onLoad, isLoaded }) {
    return (
        <img
            src={src}
            alt={alt}
            className={`gallery-photo ${isLoaded ? 'visible' : ''}`}
            onLoad={onLoad}
        />
    );
}

export default FamilyGallery;
