import React, { useRef, useEffect, useState, useCallback } from 'react';
import './EventGalleryCarousel.css';

const EventGalleryCarouselInfinite = ({ images, height = '80vh' }) => {
  const carouselRef = useRef(null);
  // We'll keep track of “copies” of the images array. For example, copy 1, copy 2, etc.
  // Start with three copies so the user can scroll in either direction.
  const [copies, setCopies] = useState([0, 1, 2]);
  // We'll store refs for each rendered copy so we can measure their widths.
  const copyRefs = useRef({});

  // On mount, we want to start the user at the middle copy so that they can scroll both ways.
  useEffect(() => {
    if (carouselRef.current) {
      const middleCopyEl = copyRefs.current[1];
      if (middleCopyEl) {
        carouselRef.current.scrollLeft = middleCopyEl.offsetLeft;
      }
    }
  }, []);

  // This handler will check if we need to add a new copy at the right
  // or remove a copy on the left.
  const handleScroll = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const { scrollLeft, clientWidth } = carousel;

    // *** Append a new copy on the right ***
    const lastCopyIndex = copies[copies.length - 1];
    const lastCopyEl = copyRefs.current[lastCopyIndex];
    if (lastCopyEl) {
      // Determine the right edge of the last copy.
      const lastCopyRight = lastCopyEl.offsetLeft + lastCopyEl.offsetWidth;
      // When the right edge gets within a threshold of the visible area, append a new copy.
      if (lastCopyRight - scrollLeft < clientWidth + 100) {
        setCopies(prevCopies => [...prevCopies, lastCopyIndex + 1]);
      }
    }

    // *** Remove a copy from the left if it's far off-screen ***
    const firstCopyIndex = copies[0];
    const firstCopyEl = copyRefs.current[firstCopyIndex];
    if (firstCopyEl) {
      const firstCopyRight = firstCopyEl.offsetLeft + firstCopyEl.offsetWidth;
      // If the right edge of the first copy is more than 100px off the left edge of the viewport…
      if (firstCopyRight < scrollLeft - 100) {
        // Before removing, adjust scrollLeft so the removal is seamless.
        carousel.scrollLeft = scrollLeft - firstCopyEl.offsetWidth;
        setCopies(prevCopies => prevCopies.slice(1));
      }
    }
  }, [copies]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    // Attach our scroll handler.
    carousel.addEventListener('scroll', handleScroll);
    return () => {
      carousel.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Optional: a helper to scroll by a fixed amount when clicking an arrow.
  const scrollByPage = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / 2;
      carouselRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="carousel-container" style={{ height }}>
      <button className="carousel-arrow left" onClick={() => scrollByPage(-1)}>
        &#8592;
      </button>
      <div className="carousel" ref={carouselRef}>
        {copies.map(copyIndex => (
          // Wrap each copy in its own container so we can measure its total width.
          <div
            key={copyIndex}
            className="carousel-copy"
            ref={el => {
              if (el) {
                copyRefs.current[copyIndex] = el;
              }
            }}
            style={{ display: 'flex' }} // Render the copy as a flex container.
          >
            {images.map((src, idx) => (
              <div key={`${copyIndex}-${idx}`} className="carousel-item" style={{ height }}>
                <img 
                  src={src} 
                  alt={`Slide ${copyIndex}-${idx}`} 
                  style={{ height: '100%', width: 'auto', display: 'block' }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="carousel-arrow right" onClick={() => scrollByPage(1)}>
        &#8594;
      </button>
    </div>
  );
};

export default EventGalleryCarouselInfinite;
