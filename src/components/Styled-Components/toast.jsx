import React, { useEffect } from 'react';
import { IoWarningOutline } from "react-icons/io5";
import styled, { keyframes } from 'styled-components';
import { variables } from './themMode';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
`;

const ToastContainer = styled.div`
  width: fit-content;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  color: ${variables.hoverSecondaryDarkColor};
  font-weight: ${variables.boldFont};
  padding: 10px 20px;
  border-radius: 10px;
  border: solid 1px ${variables.primaryColor};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  animation: ${props => (props.visible ? fadeIn : fadeOut)} 0.5s ease-in-out;
  font-size: 1rem;
  font-weight: ${variables.mediumBoldFont};
  position: relative; 
background-color:  ${variables.bgColor} ;
`;

const Toast = ({ message, visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000); 

      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <ToastContainer visible={visible}>
     <IoWarningOutline /> {  message}
    </ToastContainer>
  );
};

export default Toast;
