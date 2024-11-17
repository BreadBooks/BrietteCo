import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import graduation1 from '../assets/graduation1.jpg';
import graduation2 from '../assets/graduation2.jpg';
import graduation3 from '../assets/graduation3.jpg';

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

function GraduationCarousel() {
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
                <img src={graduation1} alt="Graduation 1" />
            </div>
            <div>
                <img src={graduation2} alt="Graduation 2" />
            </div>
            <div>
                <img src={graduation3} alt="Graduation 3" />
            </div>
        </Slider>
    );
}

export default GraduationCarousel;
