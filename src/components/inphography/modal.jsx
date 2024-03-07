import React from "react";
import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";
import { variables } from "../Styled-Components/themMode";
const ModalWrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(7, 54, 85, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  border-radius: 8px;

`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 50px;
  background: none;
  border: none;
  font-size: ${variables.bigFont};
  cursor: pointer;
  color: ${variables.hoverSecondaryLightColor};
`;

const PDFContainer = styled.iframe`
  width: 90vw;
  height: 90vh;
  border: none;
`;

const Modal = ({ onClose, pdfUrl, title }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}><IoIosCloseCircle /></CloseButton>
        <PDFContainer title={title} src={pdfUrl}></PDFContainer>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
