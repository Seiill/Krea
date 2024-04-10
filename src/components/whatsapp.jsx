import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = ({ phoneNumber, message }) => {
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message || '');
    const url = `https://wa.me/57${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <Button onClick={openWhatsApp}>
      <FaWhatsapp />
    </Button>
  );
};

const Button = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 20px;
  right: 32px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: green;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  text-decoration: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    background-color: #4caf50;
  }
`;

export default WhatsappButton;
