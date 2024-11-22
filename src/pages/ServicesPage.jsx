import React, { useState } from 'react';
import './ServicesPage.css';

function ServicesPage() {
    const [activeService, setActiveService] = useState(null);

    const services = [
        {
            id: 1,
            title: "Graduation Shoots",
            price: "Starting at $150",
            details: {
                description: "A 45-minute session with 20 edited photos perfect for graduation memories.",
                addOns: ["Extra 15 minutes: $50", "Additional photos: $10/photo", "Photo album: $100"],
                photos: ["/images/graduation1.jpg", "/images/graduation2.jpg"]
            }
        },
        {
            id: 2,
            title: "Portrait Sessions",
            price: "Starting at $200",
            details: {
                description: "A 1-hour session with 30 edited photos ideal for personal or professional portraits.",
                addOns: ["Extra 30 minutes: $75", "Additional photos: $15/photo", "Framed prints: $50"],
                photos: ["/images/portrait1.jpg", "/images/portrait2.jpg"]
            }
        },
        {
            id: 3,
            title: "Wedding Sessions (4-Hours)",
            price: "Starting at $750",
            details: {
                description: "Capture your special day with a 4-hour session, tailored to wedding ceremonies.",
                addOns: ["Extra hour: $200", "Second photographer: $400", "Custom album: $250"],
                photos: ["/images/wedding1.jpg", "/images/wedding2.jpg"]
            }
        },
        {
            id: 4,
            title: "Wedding Sessions (8-Hours)",
            price: "Starting at $1200",
            details: {
                description: "A comprehensive 8-hour session to document your wedding from start to finish.",
                addOns: ["Extra hour: $200", "Second photographer: $400", "Custom album: $250"],
                photos: ["/images/wedding3.jpg", "/images/wedding4.jpg"]
            }
        }
    ];

    const toggleService = (id) => {
        setActiveService(activeService === id ? null : id);
    };

    return (
        <div className="services-page">
            <h1 className="page-title">Our Services & Pricing</h1>
            <p className="page-description">Explore our range of services tailored to your needs.</p>
            <div className="services-list">
                {services.map((service) => (
                    <div key={service.id} className="service-item">
                        <div className="service-header" onClick={() => toggleService(service.id)}>
                            <span className="service-title">{service.title}</span>
                            <span className="service-price">{service.price}</span>
                        </div>
                        {activeService === service.id && (
                            <div className="service-details">
                                <p className="service-description">{service.details.description}</p>
                                <div className="service-content">
                                    <div className="service-photos">
                                        {service.details.photos.map((photo, index) => (
                                            <img key={index} src={photo} alt={service.title} className="service-photo" />
                                        ))}
                                    </div>
                                    <div className="service-add-ons">
                                        <h3>Add-Ons</h3>
                                        <ul>
                                            {service.details.addOns.map((addOn, index) => (
                                                <li key={index}>{addOn}</li>
                                            ))}
                                        </ul>
                                        <a href="/contact" className="contact-button">Contact Me to Book</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesPage;
