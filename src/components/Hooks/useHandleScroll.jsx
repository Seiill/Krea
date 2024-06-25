import { useEffect, useState } from 'react';

const useHandleScroll = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [zIndexLayer1, setZIndexLayer1] = useState(2); // Inicialmente el z-index del Layer1 es 2
  const [zIndexLayer2, setZIndexLayer2] = useState(1); // Inicialmente el z-index del Layer2 es 1

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

          // Actualizar el z-index
          setZIndexLayer1(1);
          setZIndexLayer2(2);
          setHasScrolled(true);
        } else {
          text.style.transform = 'translateX(0)';
          text.style.opacity = '1';
          image.style.transform = 'translateX(0)';
          image.style.opacity = '1';
          if (background) {
            background.style.backgroundColor = 'rgba(0, 0, 0, 1)'; 
          }

          // Restaurar el z-index
          setZIndexLayer1(2);
          setZIndexLayer2(1);
          setHasScrolled(false);
        }

        window.removeEventListener('scroll', handleScroll);        
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  return { hasScrolled, zIndexLayer1, zIndexLayer2 };
};

export default useHandleScroll;
