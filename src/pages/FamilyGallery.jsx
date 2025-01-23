import React, { useState, useEffect, lazy, Suspense} from 'react';
import './FamilyGallery.css';
import { Link } from 'react-router-dom';
import { FixedSizeGrid as Grid } from 'react-window';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// const ImageWithFadeIn = lazy(() => import('../components/ImageWithFadeIn'))

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

import family21_low from '../assets/family21_low.webp';
import family22_low from '../assets/family22_low.webp';
import family23_low from '../assets/family23_low.webp';
import family4_low from '../assets/family4_low.webp';
import family5_low from '../assets/family5_low.webp';
import family6_low from '../assets/family6_low.webp';
import family7_low from '../assets/family7_low.webp';
import family8_low from '../assets/family8_low.webp';
import family9_low from '../assets/family9_low.webp';
import family10_low from '../assets/family10_low.webp';
import family11_low from '../assets/family11_low.webp';
import family12_low from '../assets/family12_low.webp';
import family13_low from '../assets/family13_low.webp';
import family14_low from '../assets/family14_low.webp';
import family15_low from '../assets/family15_low.webp';
import family16_low from '../assets/family16_low.webp';
import family17_low from '../assets/family17_low.webp';
import family18_low from '../assets/family18_low.webp';
import family19_low from '../assets/family19_low.webp';
import family20_low from '../assets/family20_low.webp';
import family24_low from '../assets/family24_low.webp';
import family25_low from '../assets/family25_low.webp';
import family26_low from '../assets/family26_low.webp';
import family27_low from '../assets/family27_low.webp';

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
];

// Low resolution images
const lowResPhotos = [
    family21_low, family22_low, family23_low, family4_low, family5_low, family6_low, family7_low, family8_low,
    family9_low, family10_low, family11_low, family12_low, family13_low, family14_low, family15_low, family16_low,
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
                        <ImageWithFadeIn
                            key={index}
                            highResSrc={photo}
                            lowResSrc={photo}
                            alt={`Family ${index + 1}`}
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

function ImageWithFadeIn({ highResSrc, lowResSrc, alt, onLoad, isLoaded, onClick }) {
    return (
      <LazyLoadImage
        src={ highResSrc }
        placeholderSrc={ lowResSrc }
        alt={alt}
        className={`gallery-photo ${isLoaded ? 'visible' : ''}`}
        onLoad={onLoad}
        onClick={onClick}
        effect="blur" // This adds a blur-up effect while the image is loading
        // You can optionally add a placeholderSrc prop if you have a custom low-res placeholder image
      />
    );
}

export default FamilyGallery;
