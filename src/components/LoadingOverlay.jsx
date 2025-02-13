// src/components/LoadingOverlay.jsx
import React from 'react';
import './LoadingOverlay.css';

function LoadingOverlay() {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
    </div>
  );
}

export default LoadingOverlay;
