import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './EventsGallery.css';

// Import event images
import event1_1 from '../assets/event1_1.webp';
import event1_2 from '../assets/event1_2.webp';
import event1_3 from '../assets/event1_3.webp';
import event1_4 from '../assets/event1_4.webp';
import event1_5 from '../assets/event1_5.webp';
import event1_6 from '../assets/event1_6.webp';
import event1_7 from '../assets/event1_7.webp';
import event1_8 from '../assets/event1_8.webp';
import event1_9 from '../assets/event1_9.webp';
import event1_10 from '../assets/event1_10.webp';
import event1_11 from '../assets/event1_11.webp';
import event1_12 from '../assets/event1_12.webp';

import event2_1 from '../assets/event2_1.webp';
import event2_2 from '../assets/event2_2.webp';
import event2_3 from '../assets/event2_3.webp';
import event2_4 from '../assets/event2_4.webp';
import event2_5 from '../assets/event2_5.webp';
import event2_6 from '../assets/event2_6.webp';
import event2_7 from '../assets/event2_7.webp';
import event2_8 from '../assets/event2_8.webp';
import event2_9 from '../assets/event2_9.webp';
import event2_10 from '../assets/event2_10.webp';
import event2_11 from '../assets/event2_11.webp';
import event2_12 from '../assets/event2_12.webp';

const event1Photos = [
    event1_1, event1_2, event1_3, event1_4, event1_5, event1_6,
    event1_7, event1_8, event1_9, event1_10, event1_11, event1_12
];

const event2Photos = [
    event2_1, event2_2, event2_3, event2_4, event2_5, event2_6,
    event2_7, event2_8, event2_9, event2_10, event2_11, event2_12
];

function EventsGallery() {
    return (
        <div className="events-gallery">
            <h1 className="gallery-title">Event 1</h1>
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={1.8}
                centeredSlides={true}
                navigation
                loop={true}
                className="event-swiper"
            >
                {event1Photos.map((photo, index) => (
                    <SwiperSlide key={index}>
                        <img src={photo} alt={`Event 1 - Photo ${index + 1}`} className="event-photo" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <h1 className="gallery-title">Event 2</h1>
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={1.8}
                centeredSlides={true}
                navigation
                loop={true}
                className="event-swiper"
            >
                {event2Photos.map((photo, index) => (
                    <SwiperSlide key={index}>
                        <img src={photo} alt={`Event 2 - Photo ${index + 1}`} className="event-photo" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default EventsGallery;
