import React, { useState, useEffect, lazy, Suspense } from 'react';
import './GraduationGallery.css';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import gradbanner from '../assets/gradbanner.webp'; // Import your banner image

import grad1 from '../assets/grad1.webp';
import grad2 from '../assets/grad2.webp';
import grad3 from '../assets/grad3.webp';
import grad4 from '../assets/grad4.webp';
import grad5 from '../assets/grad5.webp';
import grad6 from '../assets/grad6.webp';
import grad7 from '../assets/grad7.webp';
import grad8 from '../assets/grad8.webp';
import grad9 from '../assets/grad9.webp';
import grad10 from '../assets/grad10.webp';
import grad11 from '../assets/grad11.webp';
import grad12 from '../assets/grad12.webp';
import grad13 from '../assets/grad13.webp';
import grad14 from '../assets/grad14.webp';
import grad15 from '../assets/grad15.webp';
import grad16 from '../assets/grad16.webp';

const photos = [
    grad1,
    grad2,
    grad3,
    grad4,
    grad5,
    grad6,
    grad7,
    grad8,
    grad9,
    grad10,
    grad11,
    grad12,
    grad13,
    grad14,
    grad15,
    grad16,
];

function GraduationGallery() {
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

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [visiblePhotos]);

    const loadMorePhotos = () => {
        if (visiblePhotos < photos.length) {
            setVisiblePhotos((prev) => Math.min(prev + 4, photos.length));
        }
    };

    const handleImageLoad = (src) => {
        setLoadedPhotos((prev) => [...prev, src]);
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
        <div className="graduation-gallery">
            {/* Full-width Banner */}
            <div className="gradbanner">
                <img src={gradbanner} alt="Graduation Banner" className="gradbanner-image" />
            </div>

            <div className="gallery-header">
                <p className="gallery-description">
                    Celebrate your achievement with a stunning graduation photo session.{' '}
                    <Link to="/services" className="booking-link">
                        Click here to book your session.
                    </Link>
                </p>
                <p className="gallery-redirect">
                    Explore other galleries?{' '}
                    <Link to="/galleries" className="other-galleries-link">
                        Visit here.
                    </Link>
                </p>
            </div>

            <div className="gallery-grid">
                <Suspense fallback={<div>Loading images...</div>}>
                    {photos.slice(0, visiblePhotos).map((photo, index) => (
                        <ImageWithFadeIn
                            key={index}
                            highResSrc={photo}
                            alt={`Graduation ${index + 1}`}
                            onLoad={() => handleImageLoad(photo)}
                            isLoaded={loadedPhotos.includes(photo)}
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
                            alt={`Graduation ${currentPhoto + 1}`}
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

function ImageWithFadeIn({ highResSrc, alt, onLoad, isLoaded, onClick }) {
    return (
        <LazyLoadImage
            src={highResSrc}
            alt={alt}
            className={`gallery-photo ${isLoaded ? 'visible' : ''}`}
            onLoad={onLoad}
            onClick={onClick}
            effect="blur"
        />
    );
}

export default GraduationGallery;
