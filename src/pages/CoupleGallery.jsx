import React, { useState, useEffect, lazy, Suspense } from 'react';
import './CoupleGallery.css';
import { Link } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';

import couplebannerImage from '../assets/couplebanner.webp'; // Import banner image

import couple1 from '../assets/couple1.webp';
import couple2 from '../assets/couple2.webp';
import couple3 from '../assets/couple3.webp';
import couple4 from '../assets/couple4.webp';
import couple5 from '../assets/couple5.webp';
import couple6 from '../assets/couple6.webp';
import couple7 from '../assets/couple7.webp';
import couple8 from '../assets/couple8.webp';
import couple9 from '../assets/couple9.webp';
import couple10 from '../assets/couple10.webp';
import couple11 from '../assets/couple11.webp';
import couple12 from '../assets/couple12.webp';
import couple13 from '../assets/couple13.webp';
import couple14 from '../assets/couple14.webp';
import couple15 from '../assets/couple15.webp';
import couple16 from '../assets/couple16.webp';

const photos = [
    couple1,
    couple2,
    couple3,
    couple4,
    couple5,
    couple6,
    couple7,
    couple8,
    couple9,
    couple10,
    couple11,
    couple12,
    couple13,
    couple14,
    couple15,
    couple16,
];

function CoupleGallery() {
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
        <div className="couple-gallery">
            {/* Full-width Banner */}
            <div className="couple-banner">
                <img src={couplebannerImage} alt="Couple Banner" className="couple-banner-image" />
            </div>

            <div className="gallery-header">
                <p className="gallery-description">
                    Looking to book your own couple session?{' '}
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
                            alt={`Couple ${index + 1}`}
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
                            alt={`Couple ${currentPhoto + 1}`}
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

export default CoupleGallery;
