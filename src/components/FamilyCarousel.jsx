import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import family1 from '../assets/family1.webp';
import family2 from '../assets/family2.webp';
import family3 from '../assets/family3.webp';

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

function FamilyCarousel() {
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
                <img src={family1} alt="Family 1" />
            </div>
            <div>
                <img src={family2} alt="Family 2" />
            </div>
            <div>
                <img src={family3} alt="Family 3" />
            </div>
        </Slider>
    );
}

export default FamilyCarousel;
