import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import family1 from '../assets/family1.jpg';
import family2 from '../assets/family2.jpg';
import family3 from '../assets/family3.jpg';

function FamilyCarousel() {
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
