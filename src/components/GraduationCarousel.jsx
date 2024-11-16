import React from 'react';
import Slider from 'react-slick';
import graduation1 from '../assets/graduation1.jpg';
import graduation2 from '../assets/graduation2.jpg';
import graduation3 from '../assets/graduation3.jpg';

function GraduationCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <img src={graduation1} alt="Graduation 1" />
            <img src={graduation2} alt="Graduation 2" />
            <img src={graduation3} alt="Graduation 3" />
        </Slider>
    );
}

export default GraduationCarousel;
