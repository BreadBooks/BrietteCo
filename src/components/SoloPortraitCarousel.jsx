import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import portrait1 from '../assets/portrait1.jpg';
import portrait2 from '../assets/portrait2.jpg';
import portrait3 from '../assets/portrait3.jpg';

function SoloPortraitCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
