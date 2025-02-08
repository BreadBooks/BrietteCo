// src/pages/ServicesPage.jsx
import React, { useState } from 'react';
import './ServicesPage.css';
import servicesBanner from '../assets/servicesbanner.svg'; // Import your banner image
import ThirtyMinSession from '../assets/svg/30-min-session.svg';
import OneHourSession from '../assets/svg/1hr-session.svg';
import EventSession from '../assets/svg/event-session.svg';

function ServicesPage() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const services = [
        { id: 1, svg: ThirtyMinSession, alt: "30-Minute Session" },
        { id: 2, svg: OneHourSession, alt: "1-Hour Session" },
        { id: 3, svg: EventSession, alt: "Event Session" }
    ];

    const faqs = [
        {
            question: "⭐ How many photos will I receive?",
            answer:
                "I aim to deliver as many high-quality photos as possible so you have plenty of options to find your perfect shot! For a one-hour session, you can expect to receive at least 45 professionally edited images, though I often deliver even more."
        },
        {
            question: "⭐ When will I receive my photos?",
            answer:
                "You can expect to receive your final gallery within 2–3 weeks for standard sessions. Event sessions may take a little longer, depending on the scope of the shoot. I’ll keep you updated throughout the editing process!"
        },
        {
            question: "⭐ Where can my photos be taken?",
            answer:
                "I shoot at outdoor locations throughout the DFW area, up to 35 miles from Plano, TX. If you’d like me to travel farther, I’m happy to do so for an additional $1 per mile. Not sure where to go? I’ll work with you to find the ideal spot for your shoot.\n\nI don’t currently have a private studio, but if you’re interested in an indoor session, I’m happy to help arrange a rentable studio—just note that the rental fee will be added to your session cost.\n\nSome locations, such as the Dallas Arboretum or Fort Worth Botanical Gardens, may require an admission or photography fee. If you’d like to shoot at one of these locations, the additional costs will be your responsibility."
        },
        {
            question: "⭐ Can I combine different types of photos in one session?",
            answer:
                "Absolutely! Whether you’re booking a graduation session and want to include professional headshots, or need a mix of candid and posed shots, I’m happy to accommodate. Feel free to bring a friend or family member to assist with props, wardrobe, or regalia."
        },
        {
            question: "⭐ Can I wear more than one outfit?",
            answer:
                "Yes, outfit changes are welcome! As long as the session stays within the scheduled time, you’re free to change outfits. However, if the session runs more than 10 minutes over, there will be an additional charge of $35 for every extra 10 minutes."
        },
        {
            question: "⭐ What should I wear?",
            answer:
                "Your outfit choice is entirely up to you and the vibe you want for your session! I may suggest tips based on the weather or location to ensure you look your best on camera, but my priority is that you feel comfortable and confident. Wear what makes you feel amazing!"
        },
        {
            question: "⭐ Can I bring my pet?",
            answer:
                "Yes! I’d love to include your furry friend in the session. Just let me know in advance so I can ensure our chosen location is pet-friendly."
        },
        {
            question: "⭐ What happens if the weather is bad?",
            answer:
                "If the weather doesn’t cooperate, no worries! We can reschedule your session at no additional cost. Your comfort and safety are my top priority. We can also try to find some indoor locations like photo-friendly libraries, museums, cafes, or rentable studios can often be found for a fee."
        },
        {
            question: "⭐ What happens if I need to cancel?",
            answer:
                "To book your session, a 25% deposit is required, and the remaining balance is due 24 hours before your scheduled shoot.\n\nIf you cancel 12 or more hours before your shoot, I will refund your full payment (including the deposit).\nIf you cancel less than 12 hours before your shoot, I will refund 75% of your payment.\nI understand that unexpected things happen, and I’ll always do my best to work with you!"
        },
        {
            question: "⭐ Can I ask questions before booking?",
            answer:
                "Of course! I’m here to help. You can email me at briettecoportraits@gmail.com or fill out my contact form here. I strive to respond within 24 hours, though it may take a little longer on weekends."
        }
    ];
    const banner = (
        <div className="services-banner">
            <img
                src={servicesBanner}
                alt="Our Services"
                className="services-banner-image"
            />
        </div>
    );

    return (
        <div className="services-page">
            {banner}  {/* This will render first */}
            
            <div className="services-grid">
                {services.map(service => (
                    <div key={service.id} className="service-card">
                        <img src={service.svg} alt={service.alt} />
                    </div>
                ))}
            </div>

            <div className="faq-section">
                <h2 className="faq-title">⭐ Frequently Asked Questions ⭐</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <div
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                            </div>
                            {openFAQ === index && (
                                <div className="faq-answer">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default ServicesPage;
