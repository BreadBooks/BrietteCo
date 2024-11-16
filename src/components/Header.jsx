import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import logo from '../assets/logo.png';

function Header() {
    const location = useLocation();
    const [isCompact, setIsCompact] = useState(false);
    const [applyDelay, setApplyDelay] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/') {
                // Only apply scroll behavior on the home page
                setIsCompact(window.scrollY > 200);
            }
        };

        if (location.pathname === '/') {
            window.addEventListener('scroll', handleScroll);
        } else {
            // Force compact header on other pages
            setIsCompact(true);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);

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
                                   <img src={logo} alt="Logo" />
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
                            <img src={logo} alt="Logo" />
                        </div>
                        <nav className="navbar">
                            <ul className="nav-links">
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
