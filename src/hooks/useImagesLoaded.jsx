import { useState, useEffect } from 'react';

function useImagesLoaded(ref, dependencies = []) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const imgs = ref.current.querySelectorAll('img');
    if (imgs.length === 0) {
      setLoaded(true);
      return;
    }
    let loadedCount = 0;
    const total = imgs.length;
    const onLoad = () => {
      loadedCount++;
      if (loadedCount === total) {
        setLoaded(true);
      }
    };

    imgs.forEach((img) => {
      if (img.complete) {
        onLoad();
      } else {
        img.addEventListener('load', onLoad);
        img.addEventListener('error', onLoad);
      }
    });

    // Cleanup event listeners on unmount or dependency change
    return () => {
      imgs.forEach((img) => {
        img.removeEventListener('load', onLoad);
        img.removeEventListener('error', onLoad);
      });
    };
  }, dependencies);

  return loaded;
}

export default useImagesLoaded;
