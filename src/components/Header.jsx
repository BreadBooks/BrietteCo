import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import logo from '../assets/logo.png';
import logoalt from '../assets/logoalt.svg';

function Header() {
    const location = useLocation();
    const [isCompact, setIsCompact] = useState(false);
    const [applyDelay, setApplyDelay] = useState(false);
    const [scrollOffset, setScrollOffset] = useState(0); // Track scroll position for translation
    const [backgroundReady, setBackgroundReady] = useState(false); // Track when to apply background color
    const [logoOpacity, setLogoOpacity] = useState(1); // New state for logo opacity

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/') {
                // Only apply scroll behavior on the home page
                const currentScrollY = window.scrollY;
                setScrollOffset(Math.min(currentScrollY, 350)); // Limit the offset to 350px (or isCompact trigger)
                setIsCompact(currentScrollY > 350);

                // Calculate and set opacity for the big logo
                const maxScroll = 300; // Adjust the scroll range for full fade-out
                const newLogoOpacity = Math.max(0, 1 - currentScrollY / maxScroll);
                setLogoOpacity(newLogoOpacity);
            }
        };

        if (location.pathname === '/') {
            window.addEventListener('scroll', handleScroll);
        } else {
            // Force compact header on other pages
            setIsCompact(true);
            setScrollOffset(0); // Reset translation when on other pages
            setLogoOpacity(1);   // Reset logo opacity when navigating away
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
    };

    return (
        <>
            <header className={`header compact`}>
                <SwitchTransition>
                    <CSSTransition
                        key={'compact'}
                        timeout={100}
                        classNames="header-transition"
                        unmountOnExit
                    >
                        <div className="header-content compact-content">
                            <div className="nav-left">
                                <ul>
                                    <li>
                                        <Link to="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/galleries">Galleries</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="logo">
                                <Link to="/">
                                    <img src={logoalt} alt="Logoalt" />
                                </Link>
                            </div>
                            <div className="nav-right">
                                <ul>
                                    <li>
                                        <Link to="/aboutme">About Me</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </header>
            {/* Apply inline style for opacity transition */}
            <img
                src={logo}
                alt="big-logo"
                className="big-logo"
                style={{ opacity: logoOpacity }}
            />
        </>
    );
}

export default Header;
