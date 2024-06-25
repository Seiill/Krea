import styled,{css, keyframes} from "styled-components";
export const wiggleAnimation = keyframes`${css`
  0%, 100% {
    opacity: 0;
    transform: scaleX(1) scaleY(1);
  }
  70% {
    opacity: .8;
    transform: scaleX(1.2) scaleY(1.3);
  }
  100%{
    opacity: 1;
    transform: scaleX(1) scaleY(1);
  }
`}`;


const getRandomTransform = () => {
  const randomTranslateX = Math.floor(Math.random() * 10 - 5); // Genera un valor entre -5 y 5
  const randomTranslateY = Math.floor(Math.random() * 10 - 5); // Genera un valor entre -5 y 5
  const randomScale = 1 + Math.random() * 0.1; // Genera un valor entre 1 y 1.1
  return { randomTranslateX, randomTranslateY, randomScale };
};

export const getWiggleAnimation = () => {
  const { randomTranslateX: x1, randomTranslateY: y1, randomScale: scale1 } = getRandomTransform();
  const { randomTranslateX: x2, randomTranslateY: y2, randomScale: scale2 } = getRandomTransform();

  return keyframes`
    0% {
      transform: translate(0, 0) scale(1);
    }
    25% {
      transform: translate(${x1}px, ${y1}px) scale(${scale1});
    }
    50% {
      transform: translate(${x2}px, ${y2}px) scale(${scale2});
    }
    75% {
      transform: translate(${-x1}px, ${-y1}px) scale(${scale1});
    }
    100% {
      transform: translate(0, 0) scale(1);
    }
  `;
};

export const getHoverAnimation = (direction) => {
  let transformValue;
  switch (direction) {
    case 'up':
      transformValue = 'translateY(-100%)';
      break;
    case 'down':
      transformValue = 'translateY(100%)';
      break;
    case 'left':
      transformValue = 'translateX(-100%)';
      break;
    case 'right':
      transformValue = 'translateX(100%)';
      break;
    case 'top-left':
      transformValue = 'translate(-100%, -100%)';
      break;
    case 'top-right':
      transformValue = 'translate(100%, -100%)';
      break;
    case 'bottom-left':
      transformValue = 'translate(-100%, 100%)';
      break;
    case 'bottom-right':
      transformValue = 'translate(100%, 100%)';
      break;
    default:
      transformValue = 'translate(0, 0)';
  }

  return keyframes`
    from {
      transform: none;
      opacity: 1;
      filter: none;
    }
    to {
      transform: ${transformValue};
      opacity: 0.09;
      filter: grayscale(100%);
    }
  `;
};

export const fadeIn = keyframes`
  from {
    opacity: 0.09 ;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`;