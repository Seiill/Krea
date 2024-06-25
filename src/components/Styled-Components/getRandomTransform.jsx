const getRandomTransform = () => {
    const randomTranslateX = Math.floor(Math.random() * 10 - 5); 
    const randomTranslateY = Math.floor(Math.random() * 10 - 5); 
    const randomScale = 1 + Math.random() * 0.1; 
    return { randomTranslateX, randomTranslateY, randomScale };
  };
  