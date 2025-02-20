import React, { useRef, useEffect, useState, useCallback } from 'react';
import './EventGalleryCarousel.css';

const EventGalleryCarouselInfinite = ({ images, height = '80vh' }) => {
  const carouselRef = useRef(null);

  // We'll keep track of “copies” of the images array for infinite scrolling.
  const [copies, setCopies] = useState([0, 1, 2]);
  const copyRefs = useRef({});

  // Lightbox (pop-out) state
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // NEW: We'll store how many images are in the array:
  const middleImageIndex = Math.floor(images.length / 2);

  useEffect(() => {
    if (!carouselRef.current) return;

    // Access the "middle copy" (index = 1 in your array).
    const middleCopyEl = copyRefs.current[1];
    if (!middleCopyEl) return;

    // 1) We want to find the DOM element for the "middle image" in that copy.
    //    So inside our .map below, let's attach a data-attribute so we can query it here.
    const middleImageSelector = `[data-middle-img="${middleImageIndex}"]`;
    const middleImageEl = middleCopyEl.querySelector(middleImageSelector);

    // If we found the middle image:
    if (middleImageEl) {
      const carouselWidth = carouselRef.current.clientWidth;
      const imageLeft = middleImageEl.offsetLeft;
      const imageWidth = middleImageEl.clientWidth;

      // 2) We want the center of that image to be in the center of the carousel container.
      //    The center of that image is at (imageLeft + imageWidth/2).
      //    The center of the container is (carouselWidth / 2).
      const centerOffset =
        imageLeft + imageWidth / 2 - carouselWidth / 2;

      // 3) Also consider the offsetLeft of the entire middle copy container.
      //    Because the image offset is relative to middleCopyEl.
      const middleCopyLeft = middleCopyEl.offsetLeft;

      // 4) Finally, set scrollLeft accordingly.
      carouselRef.current.scrollLeft = middleCopyLeft + centerOffset;
    } else {
      // Fallback: if we couldn't find the middle image, just scroll to the middle copy's start.
      carouselRef.current.scrollLeft = middleCopyEl.offsetLeft;
    }
  }, [images]);

  // Check if we need to append or remove copies during scrolling (for infinite effect).
  const handleScroll = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const { scrollLeft, clientWidth } = carousel;

    // *** Append a new copy on the right if near the edge ***
    const lastCopyIndex = copies[copies.length - 1];
    const lastCopyEl = copyRefs.current[lastCopyIndex];
    if (lastCopyEl) {
      const lastCopyRight = lastCopyEl.offsetLeft + lastCopyEl.offsetWidth;
      if (lastCopyRight - scrollLeft < clientWidth + 100) {
        // Add another copy
        setCopies((prevCopies) => [...prevCopies, lastCopyIndex + 1]);
      }
    }

    // *** Remove a copy on the left if it's far off-screen ***
    const firstCopyIndex = copies[0];
    const firstCopyEl = copyRefs.current[firstCopyIndex];
    if (firstCopyEl) {
      const firstCopyRight = firstCopyEl.offsetLeft + firstCopyEl.offsetWidth;
      if (firstCopyRight < scrollLeft - 100) {
        // Adjust scrollLeft before removing copy to keep seamless scroll
        carousel.scrollLeft = scrollLeft - firstCopyEl.offsetWidth;
        setCopies((prevCopies) => prevCopies.slice(1));
      }
    }
  }, [copies]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener('scroll', handleScroll);
    return () => {
      carousel.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Helper to smoothly scroll left/right by half a "page"
  const scrollByPage = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / 2;
      carouselRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Lightbox handlers
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container" style={{ height }}>
      {/* Left arrow (hidden on mobile via CSS) */}
      <button className="carousel-arrow left" onClick={() => scrollByPage(-1)}>
        &#8592;
      </button>

      {/* The horizontal-scrolling carousel */}
      <div className="carousel" ref={carouselRef}>
        {copies.map((copyIndex) => (
          <div
            key={copyIndex}
            className="carousel-copy"
            ref={(el) => {
              if (el) {
                copyRefs.current[copyIndex] = el;
              }
            }}
          >
            {images.map((src, idx) => (
              <div
                key={`${copyIndex}-${idx}`}
                className="carousel-item"
                style={{ height }}
              >
                <img
                  src={src}
                  alt={`Slide ${copyIndex}-${idx}`}
                  style={{ height: '100%', width: 'auto', display: 'block' }}
                  onClick={() => openLightbox(idx)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Right arrow (hidden on mobile via CSS) */}
      <button className="carousel-arrow right" onClick={() => scrollByPage(1)}>
        &#8594;
      </button>

      {/* Lightbox / Pop-out Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightboxIndex]}
              alt="Enlarged"
              className="lightbox-image"
            />
            {/* Lightbox arrows (hidden on mobile via CSS) */}
            <button className="lightbox-arrow left-arrow" onClick={handlePrev}>
              &lt;
            </button>
            <button className="lightbox-arrow right-arrow" onClick={handleNext}>
              &gt;
            </button>
            {/* Close button */}
            <button className="lightbox-close" onClick={closeLightbox}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventGalleryCarouselInfinite;
