import React, { useState, useEffect, lazy, Suspense } from 'react';
import './FamilyGallery.css';
import { Link } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';

import family1 from '../assets/family1.webp';
import family2 from '../assets/family2.webp';
import family3 from '../assets/family3.webp';
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

const photos = [
    family1,
    family2,
    family3,
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
];

function FamilyGallery() {
    const [visiblePhotos, setVisiblePhotos] = useState(4); // Initial number of visible photos
    const [loadedPhotos, setLoadedPhotos] = useState([]);
    const [currentPhoto, setCurrentPhoto] = useState(null); // To track the current photo for modal
    const [isModalOpen, setIsModalOpen] = useState(false); // To control modal visibility

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

    const openModal = (index) => {
        setCurrentPhoto(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const showPrevious = () => {
        setCurrentPhoto((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
    };

    const showNext = () => {
        setCurrentPhoto((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
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
                <Suspense fallback={<div>Loading images...</div>}>
                    {photos.slice(0, visiblePhotos).map((photo, index) => (
                        <img
                            key={index}
                            src={photo}
                            alt={`Family ${index + 1}`}
                            className="gallery-photo"
                            onLoad={() => handleImageLoad(photo)}
                            onClick={() => openModal(index)}
                        />
                    ))}
                </Suspense>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-arrow left" onClick={showPrevious}>
                            &lt;
                        </button>
                        <img
                            src={photos[currentPhoto]}
                            alt={`Family ${currentPhoto + 1}`}
                            className="modal-photo"
                        />
                        <button className="modal-arrow right" onClick={showNext}>
                            &gt;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FamilyGallery;
