import React from 'react';
import { Link } from 'react-router-dom';
import './ImageGallery.css';
import graduation from '../assets/svg/Graduation.svg';
import family from '../assets/svg/family.svg';
import wedding from '../assets/svg/wedding.svg';
import solo from '../assets/svg/solo.svg';
import couples from '../assets/svg/couples.svg'

function ImageGallery() {
    const images = [
        {
            src: graduation, 
            title: 'Graduation',
            description: 'Celebrate your achievements',
            link: '/graduation',
        },
        {
            src: family,
            title: 'Family & Couples',
            description: 'Capture family moments',
            link: '/family',
        },
        {
            src: wedding,
            title: 'Weddings & Events',
            description: 'Document treasured memories',
            link: '/weddings',
        },
        {
            src: solo,
            title: 'Solo Portraits',
            description: 'Lifestyle or Professional photos for work or socials',
            link: '/solo-portraits',
        },
        {
            src: couples,
            title: 'Events',
            description: 'Anniversary, Engagements, or just because!',
            link: '/couples',
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
