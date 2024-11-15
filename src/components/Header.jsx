import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import logo from '../assets/logo.png';

function Header() {
    const [isCompact, setIsCompact] = useState(false);
    const [applyDelay, setApplyDelay] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Update scroll position
            setScrollY(window.scrollY);

            // Trigger compact mode when scroll exceeds threshold
            setIsCompact(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isCompact) {
            const delayTimeout = setTimeout(() => setApplyDelay(true), 500);
            return () => clearTimeout(delayTimeout);
        } else {
            setApplyDelay(false);
        }
    }, [isCompact]);

    return (
        <header className={`header ${isCompact ? 'compact' : ''} ${applyDelay ? 'compact-delay' : ''}`}>
            <SwitchTransition>
                <CSSTransition
                    key={isCompact ? 'compact' : 'full'}
                    timeout={100}
                    classNames="header-transition"
                    unmountOnExit
                >
                    {isCompact ? (
                        <div
                            className="header-content compact-content"
                            style={{
                                transform: 'translateY(0)',
                                position: 'fixed',
                                top: 0,
                                width: '100%',
                            }}
                        >
                            <div className="nav-left">
                                <ul>
                                    <li><a href="#services">Services + Pricing</a></li>
                                    <li><a href="#gallery">Galleries</a></li>
                                </ul>
                            </div>
                            <div className="logo">
                                <img src={logo} alt="Logo" />
                            </div>
                            <div className="nav-right">
                                <ul>
                                    <li><a href="#testimonials">Testimonials</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div
                            className="header-content"
                        >
                            <div className="logo">
                                <img src={logo} alt="Logo" />
                            </div>
                            <nav 
                            className="navbar" 
                            style={{
                                transform: `translateY(-${scrollY}px)`, // Move the entire header-content based on scroll position
                                transition: 'transform 0s', // Instant translation to match scroll
                            }}>
                                <ul className="nav-links">
                                    <li><a href="#services">Services + Pricing</a></li>
                                    <li><a href="#gallery">Galleries</a></li>
                                    <li><a href="#testimonials">Testimonials</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    )}
                </CSSTransition>
            </SwitchTransition>
        </header>
    );
}

export default Header;
