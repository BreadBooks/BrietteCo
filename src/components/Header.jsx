import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import logo from '../assets/logo.png';

function Header() {
    const location = useLocation();
    const [isCompact, setIsCompact] = useState(false);
    const [applyDelay, setApplyDelay] = useState(false);
    const [scrollOffset, setScrollOffset] = useState(0); // Track scroll position for translation
    const [backgroundReady, setBackgroundReady] = useState(false); // Track when to apply background color

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/') {
                // Only apply scroll behavior on the home page
                setScrollOffset(Math.min(window.scrollY, 350)); // Limit the offset to 350px (or isCompact trigger)
                setIsCompact(window.scrollY > 350);
            }
        };

        if (location.pathname === '/') {
            window.addEventListener('scroll', handleScroll);
        } else {
            // Force compact header on other pages
            setIsCompact(true);
            setScrollOffset(0); // Reset translation when on other pages
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);

    useEffect(() => {
        if (isCompact) {
            const delayTimeout = setTimeout(() => setApplyDelay(true), 500);
            const backgroundTimeout = setTimeout(() => setBackgroundReady(true), 100); // Delay background change (black part of header)
            return () => {
                clearTimeout(delayTimeout);
                clearTimeout(backgroundTimeout);
            };
        } else {
            setApplyDelay(false);
            setBackgroundReady(false); // Reset background color immediately when not compact
        }
    }, [isCompact]);

    const translateStyle = {
        transform: `translateY(-${scrollOffset}px)`,
        transition: 'transform 0.05s ease-out', // Smooth transition as the user scrolls
    };

    return (
        <header
            className={`header ${isCompact ? 'compact' : ''} ${applyDelay ? 'compact-delay' : ''} ${
                backgroundReady ? 'background-active' : ''
            }`}
        >
            <SwitchTransition>
                <CSSTransition
                    key={isCompact ? 'compact' : 'full'}
                    timeout={100}
                    classNames="header-transition"
                    unmountOnExit
                >
                    {isCompact ? (
                        <div className="header-content compact-content">
                            <div className="nav-left">
                                <ul>
                                    <li>
                                        <Link to="/services">Services + Pricing</Link>
                                    </li>
                                    <li>
                                        <Link to="/galleries">Galleries</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="logo">
                                <Link to="/">
                                    <img src={logo} alt="Logo" />
                                </Link>
                            </div>
                            <div className="nav-right">
                                <ul>
                                    <li>
                                        <Link to="/testimonials">Testimonials</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div className="header-content">
                            <div className="logo">
                                <Link to="/">
                                    <img src={logo} alt="Logo" />
                                </Link>
                            </div>
                            <nav className="navbar">
                                <ul className="nav-links" style={translateStyle}>
                                    <li>
                                        <Link to="/services">Services + Pricing</Link>
                                    </li>
                                    <li>
                                        <Link to="/galleries">Galleries</Link>
                                    </li>
                                    <li>
                                        <Link to="/testimonials">Testimonials</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
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
