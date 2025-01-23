import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import couples1 from '../assets/couples1.webp';
import couples2 from '../assets/couples2.webp';
import couples3 from '../assets/couples3.webp';

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

function CouplesCarousel() {
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
                <img src={couples1} alt="Couples Portrait 1" />
            </div>
            <div>
                <img src={couples2} alt="Couples Portrait 2" />
            </div>
            <div>
                <img src={couples3} alt="Couples Portrait 3" />
            </div>
        </Slider>
    );
}

export default CouplesCarousel;
