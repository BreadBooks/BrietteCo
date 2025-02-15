import React, { useState, useEffect, lazy, Suspense } from 'react';
import './SoloGallery.css';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import soloBanner from '../assets/solobanner.webp'; // new banner image

import solo1 from '../assets/solo1.webp';
import solo2 from '../assets/solo2.webp';
import solo3 from '../assets/solo3.webp';
import solo4 from '../assets/solo4.webp';
import solo5 from '../assets/solo5.webp';
import solo6 from '../assets/solo6.webp';
import solo7 from '../assets/solo7.webp';
import solo8 from '../assets/solo8.webp';
import solo9 from '../assets/solo9.webp';
import solo10 from '../assets/solo10.webp';
import solo11 from '../assets/solo11.webp';
import solo12 from '../assets/solo12.webp';
import solo13 from '../assets/solo13.webp';
import solo14 from '../assets/solo14.webp';
import solo15 from '../assets/solo15.webp';
import solo16 from '../assets/solo16.webp';

const photos = [
    solo1,
    solo2,
    solo3,
    solo4,
    solo5,
    solo6,
    solo7,
    solo8,
    solo9,
    solo10,
    solo11,
    solo12,
    solo13,
    solo14,
    solo15,
    solo16,
];

function SoloGallery() {
    const [visiblePhotos, setVisiblePhotos] = useState(4);
    const [loadedPhotos, setLoadedPhotos] = useState([]);
    const [currentPhoto, setCurrentPhoto] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const totalHeight = document.documentElement.scrollHeight;
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
        <div className="solo-gallery">
            {/* New Banner Section */}
            <div className="gallery-banner">
                <img
                    src={soloBanner}
                    alt="Solo Banner"
                    className="gallery-banner-image"
                />
                <div className="banner-overlay">
                </div>
            </div>

            {/* Additional Header Info */}
            <div className="gallery-header">
                <p className="gallery-description">
                    Looking to book your own solo portrait session?{' '}
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
                        <ImageWithFadeIn
                            key={index}
                            highResSrc={photo}
                            alt={`Solo ${index + 1}`}
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
                            alt={`Solo ${currentPhoto + 1}`}
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

export default SoloGallery;
