import { useEffect, useState } from 'react';

const useHandleScroll = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        const scrollPosition = window.scrollY;
        const text = document.getElementById('text');
        const image = document.getElementById('image');
        const background = document.getElementById('background');

        if (scrollPosition > 0) {
          text.style.transform = 'translateX(-100%)';
          text.style.opacity = '0';
          image.style.transform = 'translateX(100%)';
          image.style.opacity = '0';
          if (background) {
            background.style.backgroundColor = 'rgba(0, 0, 0, 0)'; 
          }
        } else {
          text.style.transform = 'translateX(0)';
          text.style.opacity = '1';
          image.style.transform = 'translateX(0)';
          image.style.opacity = '1';
          if (background) {
            background.style.backgroundColor = 'rgba(0, 0, 0, 1)'; 
          }
        }
        setHasScrolled(true); 
        window.removeEventListener('scroll', handleScroll);        
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  return hasScrolled;  
};

export default useHandleScroll;
