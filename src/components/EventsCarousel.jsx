import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import events1 from '../assets/events1.webp';
import events2 from '../assets/events2.webp';
import events3 from '../assets/events3.webp';

function CustomArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                background: 'lightblue',
                borderRadius: '50%',
                opacity: 1,
            }}
            onClick={onClick}
        />
    );
}

function EventsCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomArrow />,
        nextArrow: <CustomArrow />,
    };

    return (
        <Slider {...settings}>
            <div>
                <img src={events1} alt="Event 1" />
            </div>
            <div>
                <img src={events2} alt="Event 2" />
            </div>
            <div>
                <img src={events3} alt="Event 3" />
            </div>
        </Slider>
    );
}

export default EventsCarousel;
