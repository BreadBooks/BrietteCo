import React from 'react';
import './ServicesPage.css';
import ThirtyMinSession from '../assets/svg/30-min-session.svg';
import OneHourSession from '../assets/svg/1hr-session.svg';
import EventSession from '../assets/svg/event-session.svg';

function ServicesPage() {
    const services = [
        { id: 1, svg: ThirtyMinSession, alt: "30-Minute Session" },
        { id: 2, svg: OneHourSession, alt: "1-Hour Session" },
        { id: 3, svg: EventSession, alt: "Event Session" }
    ];

    return (
        <div className="services-page">
            <div className="services-grid">
                {services.map(service => (
                    <div key={service.id} className="service-card">
                        <img src={service.svg} alt={service.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesPage;
