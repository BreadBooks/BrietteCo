import React from 'react';
import { Link } from 'react-router-dom';
import './ImageGallery.css';
import graduation from '../assets/graduation.jpg';
import portrait from '../assets/portrait.jpg';
import family from '../assets/family.jpg';

function ImageGallery() {
    const images = [
        {
            src: graduation, 
            title: 'Graduation',
            description: 'Celebrate your achievements',
            link: '/graduation', // URL to redirect to graduation page
        },
        {
            src: portrait,
            title: 'Portraits',
            description: 'Personalized portrait sessions',
            link: '/portraits', // URL to redirect to portraits page
        },
        {
            src: family,
            title: 'Family & Couples',
            description: 'Capture family moments',
            link: '/family', // URL to redirect to family page
        },
    ];

    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <Link to={image.link} key={index} className="gallery-item">
                    <img src={image.src} alt={image.title} className="gallery-image" />
                    <div className="overlay">
                        <h3>{image.title}</h3>
                        <p>{image.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ImageGallery;
