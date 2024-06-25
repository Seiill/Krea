import React from 'react';
import styled, { keyframes } from 'styled-components';

const directions = {
  'diagonal izquierda arriba': { transform: 'translate(-100%, -100%)', animation: 'moveDiagonalLeftUp' },
  'diagonal izquierda abajo': { transform: 'translate(-100%, 100%)', animation: 'moveDiagonalLeftDown' },
  'diagonal derecha abajo': { transform: 'translate(100%, 100%)', animation: 'moveDiagonalRightDown' },
  'diagonal derecha arriba': { transform: 'translate(100%, -100%)', animation: 'moveDiagonalRightUp' },
  'derecha': { transform: 'translate(100%, 0)', animation: 'moveRight' },
  'izquierda': { transform: 'translate(-100%, 0)', animation: 'moveLeft' },
  'abajo': { transform: 'translate(0, 100%)', animation: 'moveDown' },
  'arriba': { transform: 'translate(0, -100%)', animation: 'moveUp' },
};

const moveAnimation = Object.keys(directions).reduce((acc, direction) => {
  acc[directions[direction].animation] = keyframes`
    0% {
      transform: translateY(0) translateX(0);
    }
    100% {
      transform: ${directions[direction].transform};
    }
  `;
  return acc;
}, {});

const AnimatedElement = styled.div`
  position: relative;
  animation: ${({ direction }) => moveAnimation[direction]} ${({ $delay }) => $delay}s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  animation-delay: ${({ $delay }) => $delay}s;
   
  
 
  animation-name: ${({ direction }) => moveAnimation[direction]}, wiggle;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  animation-iteration-count: infinite;
  animation-duration: 2s;

  &:hover {
    animation: ${({ direction }) => moveAnimation[direction]} 1s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
    animation-name: ${({ direction }) => moveAnimation[direction]}, wiggle;
  }

   transition: transform 0.3s ease-in-out; 
  transform-origin: center;
`;

// Keyframes para el efecto wiggle
const wiggle = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const AnimatedComponent = ({ direction, distance = 100, delay = 1,children }) => {
  return (
    <AnimatedElement direction={direction} $delay={delay} >
      {children}
    </AnimatedElement>
  );
};

export default AnimatedComponent;
