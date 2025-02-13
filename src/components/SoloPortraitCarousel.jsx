import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import portrait1 from '../assets/portrait1.webp';
import portrait2 from '../assets/portrait2.webp';
import portrait3 from '../assets/portrait3.webp';

function CustomArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                background: 'lightblue', // Customize background
                borderRadius: '50%',
                opacity: 1,
            }}
            onClick={onClick}
        />
    );
}

function SoloPortraitCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // Enable navigation arrows
        prevArrow: <CustomArrow />, // Custom Previous Arrow
        nextArrow: <CustomArrow />, // Custom Next Arrow
    };

    return (
        <Slider {...settings}>
            <div>
                <img src={portrait1} alt="Solo Portrait 1" />
            </div>
            <div>
                <img src={portrait2} alt="Solo Portrait 2" />
            </div>
            <div>
                <img src={portrait3} alt="Solo Portrait 3" />
            </div>
        </Slider>
    );
}

export default SoloPortraitCarousel;
