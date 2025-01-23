import React from 'react';
import { Link } from 'react-router-dom';
import './ImageGallery.css';
import graduation from '../assets/svg/Graduation.svg';
import graduationHover from '../assets/svg/GraduationBW.svg';
import family from '../assets/svg/family.svg';
import familyHover from '../assets/svg/FamilyBW.svg';
import solo from '../assets/svg/solo.svg';
import soloHover from '../assets/svg/SoloBW.svg';
import couples from '../assets/svg/couples.svg';
import couplesHover from '../assets/svg/CouplesBW.svg';


function ImageGallery() {
    const images = [
        {
            src: graduation,
            hoverSrc: graduationHover,
            title: 'GRADUATION PHOTOS',
            description: 'Celebrate your achievements',
            link: '/graduation',
        },
        {
            src: family,
            hoverSrc: familyHover,
            title: 'FAMILY PHOTOS',
            description: 'Capture family moments',
            link: '/family',
        },
        {
            src: solo,
            hoverSrc: soloHover,
            title: 'SOLO PORTRAITS',
            description: 'Professional photos for     work or socials',
            link: '/solo-portraits',
        },
        {
            src: couples,
            hoverSrc: couplesHover,
            title: 'COUPLES SHOOT',
            description: 'Anniversary, Engagements, or  just because!',
            link: '/couples',
        },
    ];

    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <Link to={image.link} key={index} className="gallery-item">
                    {/* Default image */}
                    <img src={image.src} alt={image.title} className="gallery-image default" />
                    {/* Hover image */}
                    <img src={image.hoverSrc} alt={image.title} className="gallery-image hover" />
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
