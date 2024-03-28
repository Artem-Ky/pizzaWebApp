import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToAnchor = () => {
  const location = useLocation();

  useEffect(() => {
    const attemptScrollToAnchor = (anchor:string) => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
        return true;
      }
      return false;
    };

    // если в адресе есть якорь то получаем его
    if (location.hash) {
      const anchorId = location.hash.replace('#', '');
      
      //пытемся сделать скрол по якорю если не получается ждем по 100мс и пробуем снова
      if (!attemptScrollToAnchor(anchorId)) {
        const intervalId = setInterval(() => {
          if (attemptScrollToAnchor(anchorId)) {
            clearInterval(intervalId);
          }
        }, 100); 

        //без этого иногда багует
        return () => clearInterval(intervalId);
      }
    } else {
      window.scrollTo(0, 0);
    }
    
  }, [location]);
};

export default useScrollToAnchor;
