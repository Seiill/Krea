import { useEffect, useRef } from 'react';

const useOnce = (effect) => {
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (!hasRunRef.current) {
      effect();
      hasRunRef.current = true;
    }
  }, [effect]);
};

export default useOnce;
