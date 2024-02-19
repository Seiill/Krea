import { useState, useEffect } from 'react';

export const useLampState = (cardsData) => {
  const [encendidaIndex, setEncendidaIndex] = useState(null);

  useEffect(() => {
    
    const randomIndex = Math.floor(Math.random() * cardsData.length);
    setEncendidaIndex(randomIndex);
  }, []);

  const encender = (i) => {
    setEncendidaIndex((prevIndex) => (prevIndex === i ? null : i));
  };

  return { encendidaIndex, encender };
};