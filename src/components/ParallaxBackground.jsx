// src/components/ParallaxBackground.jsx
import React, { useEffect, useState } from 'react';
import '../App.css';

const ParallaxBackground = () => {
  const [bgPosition, setBgPosition] = useState('center');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Lower the movement factor for slower movement
      const movementFactor = 0.075; 
      // Instead of a continuous calculation, use a stepped approach
      // For more discrete steps, you could round the scroll value
      const steppedScrollY = Math.round(scrollY / 50) * 50; // adjust step size as needed
      const yPos = 50 + steppedScrollY * movementFactor;
      setBgPosition(`center ${yPos}%`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="background-container"
      style={{ backgroundPosition: bgPosition }}
    />
  );
};

export default ParallaxBackground;
