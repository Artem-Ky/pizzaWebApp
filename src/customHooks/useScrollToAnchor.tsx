import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToAnchor = () => {
  const location = useLocation();

  useEffect(() => {
    let frameId: number;

    const attemptScrollToAnchor = () => {
      const anchor = location.hash.replace('#', '');
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      } else {
        frameId = window.requestAnimationFrame(attemptScrollToAnchor);
      }
    };

    if (location.hash) {
      frameId = window.requestAnimationFrame(attemptScrollToAnchor);
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [location]);
};

export default useScrollToAnchor;
